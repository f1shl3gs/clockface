// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {
  Pagination,
  PaginationTruncationItem,
  PaginationItem,
  PaginationInput,
  PaginationDirectionItem,
} from '../../../Components/Pagination'

// Types
import {ComponentSize, Direction} from '../../../Types'

// Notes
import PaginationReadme from './Pagination.md?raw'
import PaginationItemReadme from './PaginationItem.md?raw'
import PaginationTruncationItemReadme from './PaginationTruncationItem.md?raw'
import PaginationDirectionItemReadme from './PaginationDirectionItem.md?raw'
import PaginationInputReadme from './PaginationInput.md?raw'

export default {title: 'Components/Pagination/Pagination'}

export const _Pagination = () => {
  const paginationRef = createRef<HTMLElement>()

  const logRef = (): void => {
    console.log(paginationRef.current)
  }

  return (
    <div className="story--example">
      <Pagination
        ref={paginationRef}
        totalPages={10}
        currentPage={1}
        pageRangeOffset={1}
        onChange={page => {
          console.log(`page selected: ${page}`)
        }}
        hideDirectionIcon={false}
        enablePageInput={false}
        size={(ComponentSize as Record<string, any>)['Medium']}
        enableArrowPaginate={true}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_Pagination.story = {
  name: 'Pagination',

  parameters: {
    readme: {
      content: marked.parse(PaginationReadme),
    },
  },
}

export const _PaginationItem = () => {
  const paginationItemRef = createRef<HTMLLIElement>()
  const logRef = (): void => {
    console.log(paginationItemRef.current)
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
      <PaginationItem
        ref={paginationItemRef}
        page={(10).toString()}
        isActive={false}
        size={(ComponentSize as Record<string, any>)['Medium']}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_PaginationItem.story = {
  name: 'PaginationItem',

  parameters: {
    readme: {
      content: marked.parse(PaginationItemReadme),
    },
  },
}

export const _PaginationDirectionItem = () => {
  const paginationDirectionItemRef = createRef<HTMLLIElement>()

  const logRef = (): void => {
    console.log(paginationDirectionItemRef.current)
  }

  return (
    <div className="story--example">
      <PaginationDirectionItem
        ref={paginationDirectionItemRef}
        direction={(Direction as Record<string, any>)['Left']}
        size={(ComponentSize as Record<string, any>)['Small']}
        active={false}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_PaginationDirectionItem.story = {
  name: 'PaginationDirectionItem',

  parameters: {
    readme: {
      content: marked.parse(PaginationDirectionItemReadme),
    },
  },
}

export const _PaginationTruncationItem = () => {
  const paginationTruncationItemRef = createRef<HTMLLIElement>()

  const logRef = (): void => {
    console.log(paginationTruncationItemRef.current)
  }
  return (
    <div className="story--example">
      <PaginationTruncationItem
        ref={paginationTruncationItemRef}
        size={(ComponentSize as Record<string, any>)['Small']}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_PaginationTruncationItem.story = {
  name: 'PaginationTruncationItem',

  parameters: {
    readme: {
      content: marked.parse(PaginationTruncationItemReadme),
    },
  },
}

export const _PaginationInput = () => {
  const paginationInputRef = createRef<HTMLInputElement>()

  const logRef = (): void => {
    console.log(paginationInputRef.current)
  }
  return (
    <div className="story--example">
      <PaginationInput
        ref={paginationInputRef}
        currentPage={1}
        size={(ComponentSize as Record<string, any>)['Small']}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_PaginationInput.story = {
  name: 'PaginationInput',

  parameters: {
    readme: {
      content: marked.parse(PaginationInputReadme),
    },
  },
}
