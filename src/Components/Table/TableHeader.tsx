// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface TableHeaderProps extends StandardFunctionProps {
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLTableSectionElement>
}

export const TableHeader: FunctionComponent<TableHeaderProps> = ({
  id,
  style,
  testID = 'table-header',
  children,
  className,
  ref,
}) => {
  const tableHeaderClass = classnames('cf-table--header', {
    [`${className}`]: className,
  })

  return (
    <thead
      id={id}
      ref={ref}
      style={style}
      className={tableHeaderClass}
      data-testid={testID}
    >
      {children}
    </thead>
  )
}
