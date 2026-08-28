// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'

// Styles
import './AppHeader.scss'

export interface AppHeaderProps extends StandardFunctionProps {
  /** Height of header bar */
  size?: ComponentSize
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const AppHeader: FunctionComponent<AppHeaderProps> = ({
  id,
  style,
  children,
  className,
  testID = 'app-header',
  size = ComponentSize.Small,
  ref,
}) => {
  const appHeaderClass = classnames('cf-app-header', {
    [`cf-app-header__${size}`]: size,
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={appHeaderClass}
    >
      {children}
    </div>
  )
}
