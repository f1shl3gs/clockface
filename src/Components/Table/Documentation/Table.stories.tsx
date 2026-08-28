// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {
  Table,
  TableRow,
  TableFooter,
  TableCell,
  TableHeaderCell,
  TableHeader,
  TableBody,
} from '../'

// Types
import {
  Alignment,
  ComponentSize,
  BorderType,
  ComponentColor,
} from '../../../Types'

// Notes
import TableReadme from './Table.md?raw'

export default {title: 'Components/Table/Family'}

export const _Table = () => {
  const tableRef = createRef<HTMLTableElement>()
  const tableHeaderRef = createRef<HTMLTableSectionElement>()
  const tableHeaderCellRef = createRef<HTMLTableCellElement>()
  const tableBodyRef = createRef<HTMLTableSectionElement>()
  const tableRowRef = createRef<HTMLTableRowElement>()
  const tableCellRef = createRef<HTMLTableCellElement>()
  const tableFooterRef = createRef<HTMLTableSectionElement>()

  const logRefs = (): void => {
    /* eslint-disable */
    console.log('Table', tableRef.current)
    console.log('TableHeader', tableHeaderRef.current)
    console.log('TableHeaderCell', tableHeaderCellRef.current)
    console.log('TableBody', tableBodyRef.current)
    console.log('TableRow', tableRowRef.current)
    console.log('TableCell', tableCellRef.current)
    console.log('TableFooter', tableFooterRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRefs}>Log Ref</button>
      </div>
      <Table
        ref={tableRef}
        cellPadding={(ComponentSize as Record<string, any>)['Small']}
        fontSize={(ComponentSize as Record<string, any>)['Medium']}
        borders={(BorderType as Record<string, any>)['Horizontal']}
        striped={false}
        highlight={false}
        style={{width: '100%'}}
      >
        <TableHeader ref={tableHeaderRef}>
          <TableRow ref={tableRowRef}>
            <TableHeaderCell
              ref={tableHeaderCellRef}
              style={{width: `${'30%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              Name
            </TableHeaderCell>
            <TableHeaderCell
              style={{width: `${'50%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              Description
            </TableHeaderCell>
            <TableHeaderCell
              style={{width: `${'20%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Right']}
            >
              Price
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody ref={tableBodyRef}>
          <TableRow color={(ComponentColor as Record<string, any>)['Default']}>
            <TableCell
              ref={tableCellRef}
              style={{width: `${'30%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              Peach
            </TableCell>
            <TableCell
              style={{width: `${'50%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              A sweet fruit that makes a great pie
            </TableCell>
            <TableCell
              style={{width: `${'20%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Right']}
            >
              $5.00
            </TableCell>
          </TableRow>
          <TableRow color={(ComponentColor as Record<string, any>)['Default']}>
            <TableCell
              style={{width: `${'30%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              Pineapple
            </TableCell>
            <TableCell
              style={{width: `${'50%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              Tropical, highly sought after, and a requirement for a Piña Colada
            </TableCell>
            <TableCell
              style={{width: `${'20%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Right']}
            >
              $8.00
            </TableCell>
          </TableRow>
          <TableRow color={(ComponentColor as Record<string, any>)['Default']}>
            <TableCell
              style={{width: `${'30%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              Yuzu
            </TableCell>
            <TableCell
              style={{width: `${'50%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              A golden citrus fruit from Japan & China with a powerful aroma
            </TableCell>
            <TableCell
              style={{width: `${'20%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Right']}
            >
              $11.00
            </TableCell>
          </TableRow>
          <TableRow color={(ComponentColor as Record<string, any>)['Default']}>
            <TableCell
              style={{width: `${'30%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              Lychee
            </TableCell>
            <TableCell
              style={{width: `${'50%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              A light and refreshing fruit encased in a spiky shell
            </TableCell>
            <TableCell
              style={{width: `${'20%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Right']}
            >
              $2.00
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter ref={tableFooterRef}>
          <TableRow>
            <TableCell colSpan={3}>
              *All fruits are shipped in padded boxes to ensure quality
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

_Table.story = {
  parameters: {
    readme: {
      content: marked.parse(TableReadme),
    },
  },
}
