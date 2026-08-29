// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface DrawerBodyProps extends StandardFunctionProps {
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const DrawerBody: FunctionComponent<DrawerBodyProps> = ({
  id,
  style,
  testID = 'drawer--body',
  children,
  className,
  ref,
}) => {
  const drawerBodyClass = classnames('cf-drawer--body', {
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      className={drawerBodyClass}
      data-testid={testID}
    >
      {children}
    </div>
  )
}
