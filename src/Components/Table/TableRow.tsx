// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentColor} from '../../Types'

export interface TableRowProps extends StandardFunctionProps {
  /** Controls coloration of the row, useful for showing a certain state */
  color?: ComponentColor
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLTableRowElement>
}

export const TableRow: FunctionComponent<TableRowProps> = ({
  id,
  style,
  color = ComponentColor.Default,
  testID = 'table-row',
  children,
  className,
  ref,
}) => {
  const tableRowClass = classnames('cf-table--row', {
    [`${className}`]: className,
    [`cf-table--row__${color}`]: color,
  })

  return (
    <tr
      id={id}
      ref={ref}
      style={style}
      className={tableRowClass}
      data-testid={testID}
    >
      {children}
    </tr>
  )
}
