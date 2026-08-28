// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {EmptyState, EmptyStateSubText, EmptyStateText} from '../'
import {Button} from '../../Button/Composed/Button'

// Types
import {ComponentSize, ComponentColor, IconFont} from '../../../Types'

// Notes
import EmptyStateReadme from './EmptyState.md?raw'
import EmptyStateTextReadme from './EmptyStateText.md?raw'
import EmptyStateSubTextReadme from './EmptyStateSubText.md?raw'
import EmptyStateExampleAReadme from './EmptyStateExampleA.md?raw'
import EmptyStateExampleBReadme from './EmptyStateExampleB.md?raw'

export default {title: 'Components/Empty States/Family'}

export const NoDashboards = () => {
  const emptyStateRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(emptyStateRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <EmptyState size={ComponentSize.Medium} ref={emptyStateRef}>
        <EmptyStateText>
          Looks like you don't have any <em>Dashboards</em>, why not create one?
        </EmptyStateText>
        <Button
          text="Create Dashboard"
          icon={IconFont.Plus_New}
          color={ComponentColor.Primary}
        />
      </EmptyState>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

NoDashboards.story = {
  parameters: {
    readme: {
      content: marked.parse(EmptyStateExampleAReadme),
    },
  },
}

export const NoTagKeysFound = () => {
  const emptyStateRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(emptyStateRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <EmptyState size={ComponentSize.Small} ref={emptyStateRef}>
        <EmptyStateText>{'No Tag Keys found'}</EmptyStateText>
        <EmptyStateSubText>{'Try changing the Time Range'}</EmptyStateSubText>
      </EmptyState>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

NoTagKeysFound.story = {
  parameters: {
    readme: {
      content: marked.parse(EmptyStateExampleBReadme),
    },
  },
}

export const _EmptyState = () => {
  const emptyStateRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(emptyStateRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <EmptyState
        size={(ComponentSize as Record<string, any>)['Small']}
        ref={emptyStateRef}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_EmptyState.story = {
  name: 'EmptyState',

  parameters: {
    readme: {
      content: marked.parse(EmptyStateReadme),
    },
  },
}

export const _EmptyStateText = () => {
  const emptyStateTextRef = createRef<HTMLHeadingElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(emptyStateTextRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <EmptyStateText ref={emptyStateTextRef}>
        <>
          {'Some words and some '}
          <em>{'highlighted words'}</em>.
        </>
      </EmptyStateText>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_EmptyStateText.story = {
  name: 'EmptyStateText',

  parameters: {
    readme: {
      content: marked.parse(EmptyStateTextReadme),
    },
  },
}

export const _EmptyStateSubText = () => {
  const emptyStateSubTextRef = createRef<HTMLParagraphElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(emptyStateSubTextRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <EmptyStateSubText ref={emptyStateSubTextRef}>
        {'Sub Text'}
      </EmptyStateSubText>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_EmptyStateSubText.story = {
  name: 'EmptyStateSubText',

  parameters: {
    readme: {
      content: marked.parse(EmptyStateSubTextReadme),
    },
  },
}
