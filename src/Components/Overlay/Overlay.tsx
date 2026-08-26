// Libraries
import React, {FunctionComponent, CSSProperties, useEffect, useRef} from 'react'
import classnames from 'classnames'

// Components
import {OverlayMask} from './OverlayMask'

// Utils
import {usePortal} from '../../Utils/portals'
import {useDelayedUnmount} from '../../Utils/useDelayedUnmount'

// Types
import {StandardFunctionProps} from '../../Types'

// Styles
import './Overlay.scss'

// Matches d3-ease's easeExpInOut, which drove the previous react-spring version
const EASE_EXP_IN_OUT = 'cubic-bezier(0.87, 0, 0.13, 1)'

export interface OverlayProps extends StandardFunctionProps {
  /** Controls visibility of the overlay */
  visible: boolean
  /** Will replace the mask element with a custom element, useful for customizing the mask appearance */
  renderMaskElement?: (style: CSSProperties) => React.ReactElement
  /** Controls the transition timing */
  transitionDuration?: number
  /** Accepts state handler for visible prop to enable escape press functionality */
  onEscape?: (visible: boolean) => void
}

export const OverlayRoot: FunctionComponent<OverlayProps> = ({
  id,
  testID = 'overlay',
  visible,
  children,
  onEscape,
  className,
  transitionDuration = 360,
  renderMaskElement = (style: CSSProperties) => <OverlayMask style={style} />,
}) => {
  const oldVisibility = useRef<boolean>(visible)
  const shouldRender = useDelayedUnmount(visible, transitionDuration)

  useEffect(() => {
    if (visible && !oldVisibility.current) {
      window.addEventListener('keydown', handleEscapeKey)
    }

    oldVisibility.current = visible
    return () => {
      window.removeEventListener('keydown', handleEscapeKey)
    }
  }, [visible])

  const handleEscapeKey = (e: KeyboardEvent): void => {
    if (e.key === 'Escape' && onEscape) {
      onEscape(false)
    }
  }

  const {addElementToPortal} = usePortal()

  const overlayClass = classnames('cf-overlay', {
    [`${className}`]: className,
  })

  if (!shouldRender) {
    return addElementToPortal(null)
  }

  const timing = `${transitionDuration}ms ${EASE_EXP_IN_OUT} both`
  const maskStyle: CSSProperties = {
    animation: `cf-overlay-mask-${visible ? 'in' : 'out'} ${timing}`,
  }
  const dialogStyle: CSSProperties = {
    animation: `cf-overlay-dialog-${visible ? 'in' : 'out'} ${timing}`,
  }

  const OverlayRender = (
    <>
      {renderMaskElement(maskStyle)}
      <div className={overlayClass} data-testid={testID} id={id}>
        <div
          className="cf-overlay--children"
          data-testid={`${testID}--children`}
          style={dialogStyle}
        >
          {children}
        </div>
      </div>
    </>
  )

  return addElementToPortal(OverlayRender)
}

OverlayRoot.displayName = 'Overlay'
