// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface EmptyStateSubTextProps extends StandardFunctionProps {
  ref?: Ref<HTMLParagraphElement>
}

export const EmptyStateSubText: FunctionComponent<EmptyStateSubTextProps> = ({
  id,
  children,
  style,
  className,
  testID = 'empty-state--sub-text',
  ref,
}) => {
  const emptyStateSubTextClass = classnames('cf-empty-state--sub-text', {
    [`${className}`]: className,
  })

  return (
    <p
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={emptyStateSubTextClass}
    >
      {children}
    </p>
  )
}
