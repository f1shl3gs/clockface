// Libraries
import {MouseEvent, FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Components
import {Button} from '../Button/Composed/Button'

// Styles
import './Pagination.scss'

// Types
import {StandardFunctionProps, ComponentColor, ComponentSize} from '../../Types'

export interface PaginationItemProps extends StandardFunctionProps {
  page?: string
  isActive: boolean
  onClick?: (e?: MouseEvent<HTMLElement>) => void
  size?: ComponentSize
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLLIElement>
}

export const PaginationItem: FunctionComponent<PaginationItemProps> = ({
  id,
  style,
  testID = 'pagination-item',
  className,
  page,
  isActive,
  onClick,
  size = ComponentSize.Small,
  ref,
}) => {
  const paginationItemContainerClassName = classnames(
    'cf-pagination--item--container',
    {
      'cf-pagination--item--container__active': isActive && page,
      [`${className}`]: className,
    }
  )

  return (
    <li
      className={paginationItemContainerClassName}
      data-testid={testID}
      id={id}
      style={style}
      ref={ref}
    >
      <Button
        size={size}
        color={ComponentColor.Tertiary}
        onClick={onClick}
        active={isActive}
        text={page}
      />
    </li>
  )
}
