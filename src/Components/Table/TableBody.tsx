// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface TableBodyProps extends StandardFunctionProps {
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLTableSectionElement>
}

export const TableBody: FunctionComponent<TableBodyProps> = ({
  id,
  style,
  testID = 'table-body',
  children,
  className,
  ref,
}) => {
  const tableBodyClass = classnames('cf-table--body', {
    [`${className}`]: className,
  })

  return (
    <tbody
      id={id}
      ref={ref}
      style={style}
      className={tableBodyClass}
      data-testid={testID}
    >
      {children}
    </tbody>
  )
}
