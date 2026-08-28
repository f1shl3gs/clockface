// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface OverlayHeaderProps extends StandardFunctionProps {
  /** Title of the Overlay */
  title: string
  /** Passing a function into this prop will cause the Dismiss "X" to render in the header */
  onDismiss?: () => void
  /** Wrap text */
  wrapText?: boolean
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const OverlayHeader: FunctionComponent<OverlayHeaderProps> = ({
  id,
  style,
  title,
  testID = 'overlay--header',
  wrapText = false,
  children,
  className,
  onDismiss,
  ref,
}) => {
  const overlayHeaderClass = classnames('cf-overlay--header', {
    'cf-overlay--header__wrap': wrapText,
    'cf-overlay--header__nowrap': !wrapText,
    'cf-overlay--header__dismissable': onDismiss,
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      className={overlayHeaderClass}
      data-testid={testID}
    >
      <div className="cf-overlay--title" title={title}>
        {title}
      </div>
      {children && children}
      {onDismiss && (
        <button
          className="cf-overlay--dismiss"
          onClick={onDismiss}
          type="button"
        />
      )}
    </div>
  )
}
