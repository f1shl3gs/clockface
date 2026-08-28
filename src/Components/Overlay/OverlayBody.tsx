// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface OverlayBodyProps extends StandardFunctionProps {
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const OverlayBody: FunctionComponent<OverlayBodyProps> = ({
  id,
  style,
  testID = 'overlay--body',
  children,
  className,
  ref,
}) => {
  const overlayBodyClass = classnames('cf-overlay--body', {
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      className={overlayBodyClass}
      data-testid={testID}
    >
      {children}
    </div>
  )
}
