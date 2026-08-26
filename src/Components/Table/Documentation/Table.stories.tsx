// Libraries
import {RefObject, createRef} from 'react'
import {marked} from 'marked'

// Components
import {
  Table,
  TableRef,
  TableHeaderRef,
  TableHeaderCellRef,
  TableBodyRef,
  TableRowRef,
  TableCellRef,
  TableFooterRef,
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
  const tableRef: RefObject<TableRef | null> = createRef()
  const tableHeaderRef: RefObject<TableHeaderRef | null> = createRef()
  const tableHeaderCellRef: RefObject<TableHeaderCellRef | null> = createRef()
  const tableBodyRef: RefObject<TableBodyRef | null> = createRef()
  const tableRowRef: RefObject<TableRowRef | null> = createRef()
  const tableCellRef: RefObject<TableCellRef | null> = createRef()
  const tableFooterRef: RefObject<TableFooterRef | null> = createRef()

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
      <Table.Table
        ref={tableRef}
        cellPadding={(ComponentSize as Record<string, any>)['Small']}
        fontSize={(ComponentSize as Record<string, any>)['Medium']}
        borders={(BorderType as Record<string, any>)['Horizontal']}
        striped={false}
        highlight={false}
        style={{width: '100%'}}
      >
        <Table.Header ref={tableHeaderRef}>
          <Table.Row ref={tableRowRef}>
            <Table.HeaderCell
              ref={tableHeaderCellRef}
              style={{width: `${'30%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{width: `${'50%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              Description
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{width: `${'20%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Right']}
            >
              Price
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body ref={tableBodyRef}>
          <Table.Row color={(ComponentColor as Record<string, any>)['Default']}>
            <Table.Cell
              ref={tableCellRef}
              style={{width: `${'30%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              Peach
            </Table.Cell>
            <Table.Cell
              style={{width: `${'50%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              A sweet fruit that makes a great pie
            </Table.Cell>
            <Table.Cell
              style={{width: `${'20%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Right']}
            >
              $5.00
            </Table.Cell>
          </Table.Row>
          <Table.Row color={(ComponentColor as Record<string, any>)['Default']}>
            <Table.Cell
              style={{width: `${'30%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              Pineapple
            </Table.Cell>
            <Table.Cell
              style={{width: `${'50%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              Tropical, highly sought after, and a requirement for a Piña Colada
            </Table.Cell>
            <Table.Cell
              style={{width: `${'20%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Right']}
            >
              $8.00
            </Table.Cell>
          </Table.Row>
          <Table.Row color={(ComponentColor as Record<string, any>)['Default']}>
            <Table.Cell
              style={{width: `${'30%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              Yuzu
            </Table.Cell>
            <Table.Cell
              style={{width: `${'50%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              A golden citrus fruit from Japan & China with a powerful aroma
            </Table.Cell>
            <Table.Cell
              style={{width: `${'20%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Right']}
            >
              $11.00
            </Table.Cell>
          </Table.Row>
          <Table.Row color={(ComponentColor as Record<string, any>)['Default']}>
            <Table.Cell
              style={{width: `${'30%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              Lychee
            </Table.Cell>
            <Table.Cell
              style={{width: `${'50%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Left']}
            >
              A light and refreshing fruit encased in a spiky shell
            </Table.Cell>
            <Table.Cell
              style={{width: `${'20%'}`}}
              horizontalAlignment={(Alignment as Record<string, any>)['Right']}
            >
              $2.00
            </Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer ref={tableFooterRef}>
          <Table.Row>
            <Table.Cell colSpan={3}>
              *All fruits are shipped in padded boxes to ensure quality
            </Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table.Table>
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
