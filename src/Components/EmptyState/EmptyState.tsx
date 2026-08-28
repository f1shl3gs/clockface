// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {ComponentSize, StandardFunctionProps} from '../../Types'

// Styles
import './EmptyState.scss'

export interface EmptyStateProps extends StandardFunctionProps {
  /** Controls vertical padding in container and font size of children */
  size?: ComponentSize
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const EmptyState: FunctionComponent<EmptyStateProps> = ({
  id,
  style,
  children,
  className,
  testID = 'empty-state',
  size = ComponentSize.Small,
  ref,
}) => {
  const emptyStateClass = classnames('cf-empty-state', {
    [`cf-empty-state--${size}`]: size,
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={emptyStateClass}
    >
      {children}
    </div>
  )
}
