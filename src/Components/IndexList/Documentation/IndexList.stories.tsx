// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {
  IndexList,
  IndexListRef,
  IndexListRowRef,
  IndexListBodyRef,
  IndexListHeaderRef,
  IndexListRowCellRef,
  IndexListHeaderCellRef,
} from '../index'
import {SquareButton} from '../../Button/Composed/SquareButton'
import {EmptyState} from '../../EmptyState'

// Types
import {
  IconFont,
  ComponentColor,
  Alignment,
  Sort,
  ComponentSize,
} from '../../../Types'

// Notes
import IndexListReadme from './IndexList.md?raw'
import IndexListHeaderReadme from './IndexListHeader.md?raw'
import IndexListHeaderCellReadme from './IndexListHeaderCell.md?raw'
import IndexListBodyReadme from './IndexListBody.md?raw'
import IndexListRowReadme from './IndexListRow.md?raw'
import IndexListRowCellReadme from './IndexListRowCell.md?raw'
import IndexListExampleReadme from './IndexListExample.md?raw'

export default {title: 'Components/IndexList/Family'}

export const _IndexList = () => {
  const indexListRef = createRef<IndexListRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(indexListRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <IndexList.IndexList ref={indexListRef} />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_IndexList.story = {
  name: 'IndexList',

  parameters: {
    readme: {
      content: marked.parse(IndexListReadme),
    },
  },
}

export const IndexListHeader = () => {
  const indexListHeaderRef = createRef<IndexListHeaderRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(indexListHeaderRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <table>
        <IndexList.Header ref={indexListHeaderRef} />
      </table>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

IndexListHeader.story = {
  name: 'IndexListHeader',

  parameters: {
    readme: {
      content: marked.parse(IndexListHeaderReadme),
    },
  },
}

export const IndexListHeaderCell = () => {
  const indexListHeaderCellRef = createRef<IndexListHeaderCellRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(indexListHeaderCellRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <table>
        <thead>
          <tr>
            <IndexList.HeaderCell
              ref={indexListHeaderCellRef}
              width={'100px'}
              columnName={'Name'}
              sort={(Sort as Record<string, any>)['None']}
              sortKey={'name'}
              onClick={(nextSort: string, sortKey?: string) =>
                alert(
                  `Header clicked! nextSort: ${nextSort}, sortKey: ${sortKey}`
                )
              }
            />
          </tr>
        </thead>
      </table>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

IndexListHeaderCell.story = {
  name: 'IndexListHeaderCell',

  parameters: {
    readme: {
      content: marked.parse(IndexListHeaderCellReadme),
    },
  },
}

export const IndexListBody = () => {
  const indexListBodyRef = createRef<IndexListBodyRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(indexListBodyRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <table>
        <IndexList.Body
          ref={indexListBodyRef}
          columnCount={1}
          emptyState={
            <EmptyState>
              <EmptyState.Text>No children present</EmptyState.Text>
            </EmptyState>
          }
        />
      </table>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

IndexListBody.story = {
  name: 'IndexListBody',

  parameters: {
    readme: {
      content: marked.parse(IndexListBodyReadme),
    },
  },
}

export const IndexListRow = () => {
  const indexListRowRef = createRef<IndexListRowRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(indexListRowRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <IndexList.Row ref={indexListRowRef} disabled={false} brighten={false} />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

IndexListRow.story = {
  name: 'IndexListRow',

  parameters: {
    readme: {
      content: marked.parse(IndexListRowReadme),
    },
  },
}

export const IndexListCell = () => {
  const indexListRowCellRef = createRef<IndexListRowCellRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(indexListRowCellRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <table>
        <tbody>
          <tr>
            <IndexList.Cell
              ref={indexListRowCellRef}
              revealOnHover={false}
              alignment={(Alignment as Record<string, any>)['Left']}
            >
              <span>{'Mitochondria are the powerhouse of the cell'}</span>
            </IndexList.Cell>
          </tr>
        </tbody>
      </table>

      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

IndexListCell.story = {
  name: 'IndexListCell',

  parameters: {
    readme: {
      content: marked.parse(IndexListRowCellReadme),
    },
  },
}

export const SimpleTable = () => {
  const columnWidths = ['20%', '60%', '20%']
  const exampleHeaders = ['Name', 'Description', '']
  const exampleNames = ['Apple', 'Banana', 'Orange']
  const exampleDescriptions = [
    'Keeps doctors away',
    'A tropical yellow fruit with a creamy, starchy inside',
    'Spherical and protected by a thick peel',
  ]

  const disabledRows = ['Banana']

  return (
    <div className="story--example">
      <IndexList>
        <IndexList.Header>
          {exampleHeaders.map((col, i) => (
            <IndexList.HeaderCell
              key={`header--${col}${i}`}
              columnName={col}
              width={columnWidths[i]}
            />
          ))}
        </IndexList.Header>
        <IndexList.Body
          emptyState={<div>Empty</div>}
          columnCount={exampleNames.length}
        >
          {exampleHeaders.map((row, i) => (
            <IndexList.Row
              key={`row--${row}${i}`}
              brighten={false}
              disabled={disabledRows.includes(exampleNames[i])}
            >
              <IndexList.Cell>{exampleNames[i]}</IndexList.Cell>
              <IndexList.Cell>{exampleDescriptions[i]}</IndexList.Cell>
              <IndexList.Cell revealOnHover={true} alignment={Alignment.Right}>
                <SquareButton
                  icon={IconFont.Trash_New}
                  color={ComponentColor.Danger}
                  size={ComponentSize.ExtraSmall}
                />
              </IndexList.Cell>
            </IndexList.Row>
          ))}
        </IndexList.Body>
      </IndexList>
    </div>
  )
}

SimpleTable.story = {
  parameters: {
    readme: {
      content: marked.parse(IndexListExampleReadme),
    },
  },
}
