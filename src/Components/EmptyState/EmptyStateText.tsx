// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface EmptyStateTextProps extends StandardFunctionProps {
  ref?: Ref<HTMLHeadingElement>
}

export const EmptyStateText: FunctionComponent<EmptyStateTextProps> = ({
  id,
  style,
  className,
  children,
  testID = 'empty-state--text',
  ref,
}) => {
  const emptyStateTextClass = classnames('cf-empty-state--text', {
    [`${className}`]: className,
  })

  return (
    <h2
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={emptyStateTextClass}
    >
      {children}
    </h2>
  )
}
