// Libraries
import {FunctionComponent, CSSProperties, ReactElement} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface PopNavItemProps extends StandardFunctionProps {
  /** Controls highlighting of the menu item */
  active: boolean
  /** Render prop for linked title text (suggested <a /> or <Link /> ) */
  titleLink: (
    className: string,
    testID?: string,
    style?: CSSProperties,
  ) => ReactElement
}

export const PopNavItem: FunctionComponent<PopNavItemProps> = ({
  style,
  active,
  className,
  titleLink,
  testID = 'pop-nav--item',
}) => {
  const titleClass = classnames('cf-pop-nav--item', className, {
    active,
  })

  return titleLink(titleClass, testID, style)
}
