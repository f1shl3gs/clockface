// Libraries
import {MouseEvent, FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Components
import {Button} from '../Button/Composed/Button'

// Types
import {
  ButtonShape,
  ComponentColor,
  ComponentSize,
  ComponentStatus,
  StandardFunctionProps,
} from '../../Types'

// Styles
import './Pagination.scss'

export interface PaginationTruncationItemProps extends StandardFunctionProps {
  onClick?: (e?: MouseEvent<HTMLElement>) => void
  size?: ComponentSize
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLLIElement>
}

export const PaginationTruncationItem: FunctionComponent<
  PaginationTruncationItemProps
> = ({
  id,
  style,
  testID = 'pagination-truncation-item',
  className,
  onClick,
  size = ComponentSize.Medium,
  ref,
}) => {
  const paginationClassName = classnames('cf-pagination--item--container', {
    [`${className}`]: className,
  })

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
        text={'...'}
        status={ComponentStatus.Disabled}
        style={{background: 'transparent'}}
      />
    </li>
  )
}
