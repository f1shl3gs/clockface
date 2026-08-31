// Libraries
import React, {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {
  StandardFunctionProps,
  ComponentColor,
  RenderLinkElement,
} from '../../Types'

export interface TreeNavHeaderProps extends Omit<StandardFunctionProps, 'id'> {
  /** Unique identifier for nav item */
  id: string
  /** Icon or Image to appear in the square */
  icon?: React.ReactElement
  /** Label to appear to the right of the icon, only visible when expanded */
  label: React.ReactElement
  /** Coloration of the Header */
  color?: ComponentColor
  /** Controls state of item */
  active?: boolean
  /** Click behavior */
  onClick?: (id: string) => void
  /** Optional link element. Will override onClick prop */
  linkElement?: RenderLinkElement
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLButtonElement>
}

export const TreeNavHeader: FunctionComponent<TreeNavHeaderProps> = ({
  id,
  icon,
  label,
  color = ComponentColor.Primary,
  style,
  active,
  testID = 'tree-nav--header',
  onClick,
  className,
  linkElement,
  ref,
}) => {
  const navMenuHeaderClass = classnames('cf-tree-nav--header', {
    'cf-tree-nav--header__clickable': onClick || linkElement,
    'cf-tree-nav--header__active': active,
    [`cf-tree-nav--header__${color}`]: color,
    [`${className}`]: className,
  })

  const handleClick = (): void => {
    if (onClick) {
      onClick(id)
    }
  }

  if (linkElement) {
    const linkItems = (
      <>
        <div className="cf-tree-nav--square">{icon}</div>
        <div className="cf-tree-nav--label">{label}</div>
      </>
    )
    const link = React.cloneElement(
      linkElement(navMenuHeaderClass),
      {'data-testid': testID},
      linkItems,
    )

    return link
  }

  return (
    <button
      type="button"
      id={id}
      ref={ref}
      style={style}
      onClick={handleClick}
      className={navMenuHeaderClass}
      data-testid={testID}
    >
      {icon && <div className="cf-tree-nav--square">{icon}</div>}
      <div className="cf-tree-nav--label">{label}</div>
    </button>
  )
}
