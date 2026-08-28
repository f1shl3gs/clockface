// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, RenderLinkElement} from '../../Types'

export interface NavMenuItemProps extends StandardFunctionProps {
  /** Render prop for linked title text */
  titleLink: RenderLinkElement
  /** Render prop for linked icon component */
  iconLink: RenderLinkElement
  /** Controls highlighting of the menu item */
  active: boolean
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const NavMenuItem: FunctionComponent<NavMenuItemProps> = ({
  id,
  style,
  active,
  iconLink,
  children,
  titleLink,
  className,
  testID = 'nav-menu--item',
  ref,
}) => {
  const navMenuItemClass = classnames('cf-nav--item', {
    active,
    [`${className}`]: className,
  })

  return (
    <div
      ref={ref}
      className={navMenuItemClass}
      data-testid={testID}
      id={id}
      style={style}
    >
      {iconLink('cf-nav--item-icon')}
      <div className="cf-nav--item-menu">
        {titleLink('cf-nav--item-header')}
        {children}
      </div>
    </div>
  )
}
