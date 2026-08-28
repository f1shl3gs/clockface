// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface TableFooterProps extends StandardFunctionProps {
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLTableSectionElement>
}

export const TableFooter: FunctionComponent<TableFooterProps> = ({
  id,
  style,
  testID = 'table-footer',
  children,
  className,
  ref,
}) => {
  const tableFooterClass = classnames('cf-table--footer', {
    [`${className}`]: className,
  })

  return (
    <tfoot
      id={id}
      ref={ref}
      style={style}
      className={tableFooterClass}
      data-testid={testID}
    >
      {children}
    </tfoot>
  )
}
