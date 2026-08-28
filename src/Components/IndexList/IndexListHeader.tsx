// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface IndexListHeaderProps extends StandardFunctionProps {
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLTableSectionElement>
}

export const IndexListHeader: FunctionComponent<IndexListHeaderProps> = ({
  className,
  children,
  id,
  style,
  testID = 'index-list--header',
  ref,
}) => {
  const indexListHeaderClass = classnames('cf-index-list--header', {
    [`${className}`]: className,
  })

  return (
    <thead
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={indexListHeaderClass}
    >
      <tr>{children}</tr>
    </thead>
  )
}
