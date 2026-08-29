// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface DrawerHeaderProps extends StandardFunctionProps {
  /** Title of the Drawer */
  title: string
  /** Wrap text */
  wrapText?: boolean
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const DrawerHeader: FunctionComponent<DrawerHeaderProps> = ({
  id,
  style,
  title,
  testID = 'drawer--header',
  wrapText = false,
  children,
  className,
  ref,
}) => {
  const drawerHeaderClass = classnames('cf-drawer--header', {
    'cf-drawer--header__wrap': wrapText,
    'cf-drawer--header__nowrap': !wrapText,
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      className={drawerHeaderClass}
      data-testid={testID}
    >
      <div className="cf-drawer--title" title={title}>
        {title}
      </div>
      {children && children}
    </div>
  )
}
