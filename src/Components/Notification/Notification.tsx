// Libraries
import {CSSProperties, useEffect, FunctionComponent, Ref} from 'react'

// Components
import {NotificationDialog} from './NotificationDialog'

// Types
import {
  Alignment,
  InfluxColors,
  VerticalAlignment,
  ComponentSize,
} from '../../Types'
import {NotificationDialogProps} from './NotificationDialog'

// Utils
import {usePortal} from '../../Utils/portals'
import {useDelayedUnmount} from '../../Utils/useDelayedUnmount'

// Styles
import './Notification.scss'

// Matches d3-ease's easeExpInOut, which drove the previous react-spring version
const EASE_EXP_IN_OUT = 'cubic-bezier(0.87, 0, 0.13, 1)'

export interface NotificationProps extends NotificationDialogProps {
  /** Controls if the notification is showing or hidden */
  visible?: boolean
  /** Positioning the notification left, center, or right on the window */
  horizontalAlignment?: Alignment
  /** Positioning the notification top, middle, or bottom on the window */
  verticalAlignment?: VerticalAlignment
  /** If a function is passed in a dismiss button will appear on the notification */
  onDismiss?: (id?: string) => void
  /** Function called when duration expires */
  onTimeout?: (id?: string) => void
  /** Duration before notification calls onTimeout function */
  duration?: number
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

const defaultNotificationStyle = {maxWidth: '500px'}

export const Notification: FunctionComponent<NotificationProps> = ({
  id,
  icon,
  size = ComponentSize.Medium,
  style = defaultNotificationStyle,
  testID,
  visible = true,
  duration = Infinity,
  children,
  gradient,
  onDismiss,
  className,
  onTimeout,
  backgroundColor = InfluxColors.Castle,
  verticalAlignment = VerticalAlignment.Top,
  horizontalAlignment = Alignment.Right,
  ref,
}) => {
  const {addNotificationToPortal} = usePortal()
  const shouldRender = useDelayedUnmount(visible, 300)

  useEffect(() => {
    if (visible && duration !== Infinity) {
      const dismissTimer = setTimeout(handleTimeout, duration)
      return () => clearTimeout(dismissTimer)
    }

    return
  }, [visible])

  const handleTimeout = () => {
    if (onTimeout) {
      onTimeout(id)
    }
  }

  const translateOrigin = () => {
    let cardinality = 'X'
    let sign = ''

    if (horizontalAlignment === 'center') {
      cardinality = 'Y'

      if (verticalAlignment === 'top') {
        sign = '-'
      }
    }

    if (horizontalAlignment === 'left') {
      sign = '-'
    }

    return `translate${cardinality}(${sign}50%)`
  }

  const animationStyle = {
    '--slide-from': translateOrigin(),
    animation: `cf-notification-${
      visible ? 'in' : 'out'
    } 300ms ${EASE_EXP_IN_OUT} both`,
  } as CSSProperties

  const notificationElement = shouldRender && (
    <NotificationDialog
      backgroundColor={backgroundColor}
      className={className}
      onDismiss={onDismiss}
      gradient={gradient}
      testID={testID}
      style={{...style, ...animationStyle}}
      size={size}
      icon={icon}
      ref={ref}
      id={id}
    >
      {children}
    </NotificationDialog>
  )

  return addNotificationToPortal(
    notificationElement,
    horizontalAlignment,
    verticalAlignment
  )
}
