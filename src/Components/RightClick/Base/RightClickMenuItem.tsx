// Libraries
import {MouseEvent, FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../../Types'

export interface RightClickMenuItemProps extends StandardFunctionProps {
  /** Click handler */
  onClick: (value?: any, e?: MouseEvent<HTMLLIElement>) => void
  /** Disabled */
  disabled?: boolean
  /** Optional return value */
  value?: any
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLLIElement>
}

export const RightClickMenuItem: FunctionComponent<RightClickMenuItemProps> = ({
  id,
  style,
  value,
  testID = 'right-click-menu-item',
  onClick,
  children,
  disabled = false,
  className,
  ref,
}) => {
  const rightClickMenuItemClassName = classnames('cf-right-click--menu-item', {
    'cf-right-click--menu-item__disabled': disabled,
    [`${className}`]: className,
  })

  const handleClick = (e: MouseEvent<HTMLLIElement>): void => {
    if (disabled) {
      return
    }

    onClick(value, e)
  }

  return (
    <li
      id={id}
      ref={ref}
      style={style}
      onClick={handleClick}
      className={rightClickMenuItemClassName}
      data-testid={testID}
    >
      {children}
    </li>
  )
}
