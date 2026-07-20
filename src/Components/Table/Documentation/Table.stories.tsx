// Libraries
import {RefObject, createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, text, boolean, object} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

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
import TableReadme from './Table.md'

const tableStories = storiesOf('Components/Table/Family', module).addDecorator(
  withKnobs
)

tableStories.add(
  'Table',
  () => {
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
          cellPadding={
            (ComponentSize as Record<string, any>)[
              select('cellPadding', mapEnumKeys(ComponentSize), 'Small')
            ]
          }
          fontSize={
            (ComponentSize as Record<string, any>)[
              select('fontSize', mapEnumKeys(ComponentSize), 'Medium')
            ]
          }
          borders={
            (BorderType as Record<string, any>)[
              select('borders', mapEnumKeys(BorderType), 'Horizontal')
            ]
          }
          striped={boolean('striped', false)}
          highlight={boolean('highlight', false)}
          style={object('Table - width', {width: '100%'})}
        >
          <Table.Header ref={tableHeaderRef}>
            <Table.Row ref={tableRowRef}>
              <Table.HeaderCell
                ref={tableHeaderCellRef}
                style={{width: `${text('Name - width', '30%')}`}}
                horizontalAlignment={
                  (Alignment as Record<string, any>)[
                    select(
                      'Name - horizontalAlignment',
                      mapEnumKeys(Alignment),
                      'Left'
                    )
                  ]
                }
              >
                Name
              </Table.HeaderCell>
              <Table.HeaderCell
                style={{width: `${text('Description - width', '50%')}`}}
                horizontalAlignment={
                  (Alignment as Record<string, any>)[
                    select(
                      'Description - horizontalAlignment',
                      mapEnumKeys(Alignment),
                      'Left'
                    )
                  ]
                }
              >
                Description
              </Table.HeaderCell>
              <Table.HeaderCell
                style={{width: `${text('Price - width', '20%')}`}}
                horizontalAlignment={
                  (Alignment as Record<string, any>)[
                    select(
                      'Price - horizontalAlignment',
                      mapEnumKeys(Alignment),
                      'Right'
                    )
                  ]
                }
              >
                Price
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body ref={tableBodyRef}>
            <Table.Row
              color={
                (ComponentColor as Record<string, any>)[
                  select(
                    'Peach - row color',
                    mapEnumKeys(ComponentColor),
                    'Default'
                  )
                ]
              }
            >
              <Table.Cell
                ref={tableCellRef}
                style={{width: `${text('Name - width', '30%')}`}}
                horizontalAlignment={
                  (Alignment as Record<string, any>)[
                    select(
                      'Name - horizontalAlignment',
                      mapEnumKeys(Alignment),
                      'Left'
                    )
                  ]
                }
              >
                Peach
              </Table.Cell>
              <Table.Cell
                style={{width: `${text('Description - width', '50%')}`}}
                horizontalAlignment={
                  (Alignment as Record<string, any>)[
                    select(
                      'Description - horizontalAlignment',
                      mapEnumKeys(Alignment),
                      'Left'
                    )
                  ]
                }
              >
                A sweet fruit that makes a great pie
              </Table.Cell>
              <Table.Cell
                style={{width: `${text('Price - width', '20%')}`}}
                horizontalAlignment={
                  (Alignment as Record<string, any>)[
                    select(
                      'Price - horizontalAlignment',
                      mapEnumKeys(Alignment),
                      'Right'
                    )
                  ]
                }
              >
                $5.00
              </Table.Cell>
            </Table.Row>
            <Table.Row
              color={
                (ComponentColor as Record<string, any>)[
                  select(
                    'Pineapple - row color',
                    mapEnumKeys(ComponentColor),
                    'Default'
                  )
                ]
              }
            >
              <Table.Cell
                style={{width: `${text('Name - width', '30%')}`}}
                horizontalAlignment={
                  (Alignment as Record<string, any>)[
                    select(
                      'Name - horizontalAlignment',
                      mapEnumKeys(Alignment),
                      'Left'
                    )
                  ]
                }
              >
                Pineapple
              </Table.Cell>
              <Table.Cell
                style={{width: `${text('Description - width', '50%')}`}}
                horizontalAlignment={
                  (Alignment as Record<string, any>)[
                    select(
                      'Description - horizontalAlignment',
                      mapEnumKeys(Alignment),
                      'Left'
                    )
                  ]
                }
              >
                Tropical, highly sought after, and a requirement for a Piña
                Colada
              </Table.Cell>
              <Table.Cell
                style={{width: `${text('Price - width', '20%')}`}}
                horizontalAlignment={
                  (Alignment as Record<string, any>)[
                    select(
                      'Price - horizontalAlignment',
                      mapEnumKeys(Alignment),
                      'Right'
                    )
                  ]
                }
              >
                $8.00
              </Table.Cell>
            </Table.Row>
            <Table.Row
              color={
                (ComponentColor as Record<string, any>)[
                  select(
                    'Yuzu - row color',
                    mapEnumKeys(ComponentColor),
                    'Default'
                  )
                ]
              }
            >
              <Table.Cell
                style={{width: `${text('Name - width', '30%')}`}}
                horizontalAlignment={
                  (Alignment as Record<string, any>)[
                    select(
                      'Name - horizontalAlignment',
                      mapEnumKeys(Alignment),
                      'Left'
                    )
                  ]
                }
              >
                Yuzu
              </Table.Cell>
              <Table.Cell
                style={{width: `${text('Description - width', '50%')}`}}
                horizontalAlignment={
                  (Alignment as Record<string, any>)[
                    select(
                      'Description - horizontalAlignment',
                      mapEnumKeys(Alignment),
                      'Left'
                    )
                  ]
                }
              >
                A golden citrus fruit from Japan & China with a powerful aroma
              </Table.Cell>
              <Table.Cell
                style={{width: `${text('Price - width', '20%')}`}}
                horizontalAlignment={
                  (Alignment as Record<string, any>)[
                    select(
                      'Price - horizontalAlignment',
                      mapEnumKeys(Alignment),
                      'Right'
                    )
                  ]
                }
              >
                $11.00
              </Table.Cell>
            </Table.Row>
            <Table.Row
              color={
                (ComponentColor as Record<string, any>)[
                  select(
                    'Lychee - row color',
                    mapEnumKeys(ComponentColor),
                    'Default'
                  )
                ]
              }
            >
              <Table.Cell
                style={{width: `${text('Name - width', '30%')}`}}
                horizontalAlignment={
                  (Alignment as Record<string, any>)[
                    select(
                      'Name - horizontalAlignment',
                      mapEnumKeys(Alignment),
                      'Left'
                    )
                  ]
                }
              >
                Lychee
              </Table.Cell>
              <Table.Cell
                style={{width: `${text('Description - width', '50%')}`}}
                horizontalAlignment={
                  (Alignment as Record<string, any>)[
                    select(
                      'Description - horizontalAlignment',
                      mapEnumKeys(Alignment),
                      'Left'
                    )
                  ]
                }
              >
                A light and refreshing fruit encased in a spiky shell
              </Table.Cell>
              <Table.Cell
                style={{width: `${text('Price - width', '20%')}`}}
                horizontalAlignment={
                  (Alignment as Record<string, any>)[
                    select(
                      'Price - horizontalAlignment',
                      mapEnumKeys(Alignment),
                      'Right'
                    )
                  ]
                }
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
  },
  {
    readme: {
      content: marked(TableReadme),
    },
  }
)
