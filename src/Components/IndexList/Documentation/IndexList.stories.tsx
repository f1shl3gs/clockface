// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {
  IndexList,
  IndexListBody,
  IndexListHeader,
  IndexListHeaderCell,
  IndexListRow,
  IndexListCell,
} from '../index'
import {SquareButton} from '../../Button/Composed/SquareButton'
import {EmptyState, EmptyStateText} from '../../EmptyState'

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
  const indexListRef = createRef<HTMLTableElement>()

  const logRef = (): void => {
    console.log(indexListRef.current)
  }

  return (
    <div className="story--example">
      <IndexList ref={indexListRef} />
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

export const _IndexListHeader = () => {
  const indexListHeaderRef = createRef<HTMLTableSectionElement>()

  const logRef = (): void => {
    console.log(indexListHeaderRef.current)
  }

  return (
    <div className="story--example">
      <table>
        <IndexListHeader ref={indexListHeaderRef} />
      </table>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_IndexListHeader.story = {
  name: 'IndexListHeader',

  parameters: {
    readme: {
      content: marked.parse(IndexListHeaderReadme),
    },
  },
}

export const _IndexListHeaderCell = () => {
  const indexListHeaderCellRef = createRef<HTMLTableCellElement>()

  const logRef = (): void => {
    console.log(indexListHeaderCellRef.current)
  }

  return (
    <div className="story--example">
      <table>
        <thead>
          <tr>
            <IndexListHeaderCell
              ref={indexListHeaderCellRef}
              width={'100px'}
              columnName={'Name'}
              sort={(Sort as Record<string, any>)['None']}
              sortKey={'name'}
              onClick={(nextSort: string, sortKey?: string) =>
                alert(
                  `Header clicked! nextSort: ${nextSort}, sortKey: ${sortKey}`,
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

_IndexListHeaderCell.story = {
  name: 'IndexListHeaderCell',

  parameters: {
    readme: {
      content: marked.parse(IndexListHeaderCellReadme),
    },
  },
}

export const _IndexListBody = () => {
  const indexListBodyRef = createRef<HTMLTableSectionElement>()

  const logRef = (): void => {
    console.log(indexListBodyRef.current)
  }

  return (
    <div className="story--example">
      <table>
        <IndexListBody
          ref={indexListBodyRef}
          columnCount={1}
          emptyState={
            <EmptyState>
              <EmptyStateText>No children present</EmptyStateText>
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

_IndexListBody.story = {
  name: 'IndexListBody',

  parameters: {
    readme: {
      content: marked.parse(IndexListBodyReadme),
    },
  },
}

export const _IndexListRow = () => {
  const indexListRowRef = createRef<HTMLTableRowElement>()

  const logRef = (): void => {
    console.log(indexListRowRef.current)
  }

  return (
    <div className="story--example">
      <IndexListRow ref={indexListRowRef} disabled={false} brighten={false} />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_IndexListRow.story = {
  name: 'IndexListRow',

  parameters: {
    readme: {
      content: marked.parse(IndexListRowReadme),
    },
  },
}

export const _IndexListRowCell = () => {
  const indexListRowCellRef = createRef<HTMLTableCellElement>()

  const logRef = (): void => {
    console.log(indexListRowCellRef.current)
  }

  return (
    <div className="story--example">
      <table>
        <tbody>
          <tr>
            <IndexListCell
              ref={indexListRowCellRef}
              revealOnHover={false}
              alignment={(Alignment as Record<string, any>)['Left']}
            >
              <span>{'Mitochondria are the powerhouse of the cell'}</span>
            </IndexListCell>
          </tr>
        </tbody>
      </table>

      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_IndexListRowCell.story = {
  name: 'IndexListRowCell',

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
        <IndexListHeader>
          {exampleHeaders.map((col, index) => (
            <IndexListHeaderCell
              key={`header--${col}${index}`}
              columnName={col}
              width={columnWidths[index]}
            />
          ))}
        </IndexListHeader>
        <IndexListBody
          emptyState={<div>Empty</div>}
          columnCount={exampleNames.length}
        >
          {exampleHeaders.map((row, index) => (
            <IndexListRow
              key={`row--${row}${index}`}
              brighten={false}
              disabled={disabledRows.includes(exampleNames[index])}
            >
              <IndexListCell>{exampleNames[index]}</IndexListCell>
              <IndexListCell>{exampleDescriptions[index]}</IndexListCell>
              <IndexListCell revealOnHover={true} alignment={Alignment.Right}>
                <SquareButton
                  icon={IconFont.Trash_New}
                  color={ComponentColor.Danger}
                  size={ComponentSize.ExtraSmall}
                />
              </IndexListCell>
            </IndexListRow>
          ))}
        </IndexListBody>
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
