// Libraries
import {MouseEvent, FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Components
import {Button} from '../Button/Composed/Button'

// Styles
import './Pagination.scss'

// Types
import {
  StandardFunctionProps,
  ComponentColor,
  ComponentSize,
  ButtonShape,
  Direction,
  IconFont,
} from '../../Types'

export interface PaginationDirectionItemProps extends StandardFunctionProps {
  /** Caret Left or Caret Right on button */
  direction: Direction
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
  size?: ComponentSize
  isActive: boolean
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLLIElement>
}

export const PaginationDirectionItem: FunctionComponent<
  PaginationDirectionItemProps
> = ({
  id,
  style,
  testID = 'pagination-direction-item',
  className,
  direction,
  onClick,
  size = ComponentSize.Medium,
  isActive,
  ref,
}) => {
  const paginationClassName = classnames('cf-pagination--item--container', {
    [`${className}`]: className,
  })

  const iconFont =
    direction === Direction.Left
      ? IconFont.CaretLeft_New
      : IconFont.CaretRight_New

  return (
    <li
      className={paginationClassName}
      data-testid={testID}
      id={id}
      style={style}
      ref={ref}
    >
      <Button
        size={size}
        color={ComponentColor.Tertiary}
        onClick={onClick}
        shape={ButtonShape.Square}
        icon={iconFont}
        active={isActive}
      />
    </li>
  )
}
