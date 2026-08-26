// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {
  PaginationNav,
  PaginationNavRef,
  PaginationItemRef,
  PaginationTruncationItemRef,
  PaginationDirectionItemRef,
  PaginationInputRef,
} from '../'

// Types
import {ComponentSize, Direction} from '../../../Types'

// Notes
import PaginationReadme from './PaginationNav.md?raw'
import PaginationItemReadme from './PaginationNavItem.md?raw'
import PaginationTruncationItemReadme from './PaginationTruncationItem.md?raw'
import PaginationDirectionItemReadme from './PaginationDirectionItem.md?raw'
import PaginationInputReadme from './PaginationInput.md?raw'

export default {title: 'Components/Pagination/PaginationNav'}

export const _PaginationNav = () => {
  const paginationRef = createRef<PaginationNavRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(paginationRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <PaginationNav.PaginationNav
        ref={paginationRef}
        totalPages={10}
        currentPage={1}
        pageRangeOffset={1}
        onChange={page => {
          /* eslint-disable */
          console.log(`page selected: ${page}`)
          /* eslint-enable */
        }}
        hideDirectionIcon={false}
        enablePageInput={false}
        size={(ComponentSize as Record<string, any>)['Medium']}
        enableArrowPaginate={true}
      ></PaginationNav.PaginationNav>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_PaginationNav.story = {
  name: 'PaginationNav',

  parameters: {
    readme: {
      content: marked.parse(PaginationReadme),
    },
  },
}

export const PaginationNavItem = () => {
  const paginationItemRef = createRef<PaginationItemRef>()
  const logRef = (): void => {
    /* eslint-disable */
    console.log(paginationItemRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
      <PaginationNav.Item
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

PaginationNavItem.story = {
  name: 'PaginationNavItem',

  parameters: {
    readme: {
      content: marked.parse(PaginationItemReadme),
    },
  },
}

export const PaginationDirectionItem = () => {
  const paginationDirectionItemRef = createRef<PaginationDirectionItemRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(paginationDirectionItemRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <PaginationNav.DirectionItem
        ref={paginationDirectionItemRef}
        direction={(Direction as Record<string, any>)['Left']}
        size={(ComponentSize as Record<string, any>)['Small']}
        isActive={false}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

PaginationDirectionItem.story = {
  name: 'PaginationDirectionItem',

  parameters: {
    readme: {
      content: marked.parse(PaginationDirectionItemReadme),
    },
  },
}

export const PaginationTruncationItem = () => {
  const paginationTruncationItemRef = createRef<PaginationTruncationItemRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(paginationTruncationItemRef.current)
    /* eslint-enable */
  }
  return (
    <div className="story--example">
      <PaginationNav.TruncationItem
        ref={paginationTruncationItemRef}
        size={(ComponentSize as Record<string, any>)['Small']}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

PaginationTruncationItem.story = {
  name: 'PaginationTruncationItem',

  parameters: {
    readme: {
      content: marked.parse(PaginationTruncationItemReadme),
    },
  },
}

export const PaginationInput = () => {
  const paginationInputRef = createRef<PaginationInputRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(paginationInputRef.current)
    /* eslint-enable */
  }
  return (
    <div className="story--example">
      <PaginationNav.Input
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

PaginationInput.story = {
  name: 'PaginationInput',

  parameters: {
    readme: {
      content: marked.parse(PaginationInputReadme),
    },
  },
}
