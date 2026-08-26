// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {
  EmptyState,
  EmptyStateRef,
  EmptyStateTextRef,
  EmptyStateSubTextRef,
} from '../'
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
  const emptyStateRef = createRef<EmptyStateRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(emptyStateRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <EmptyState.EmptyState size={ComponentSize.Medium} ref={emptyStateRef}>
        <EmptyState.Text>
          Looks like you don't have any <em>Dashboards</em>, why not create one?
        </EmptyState.Text>
        <Button
          text="Create Dashboard"
          icon={IconFont.Plus_New}
          color={ComponentColor.Primary}
        />
      </EmptyState.EmptyState>
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
  const emptyStateRef = createRef<EmptyStateRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(emptyStateRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <EmptyState.EmptyState size={ComponentSize.Small} ref={emptyStateRef}>
        <EmptyState.Text>{'No Tag Keys found'}</EmptyState.Text>
        <EmptyState.SubText>{'Try changing the Time Range'}</EmptyState.SubText>
      </EmptyState.EmptyState>
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
  const emptyStateRef = createRef<EmptyStateRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(emptyStateRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <EmptyState.EmptyState
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

export const EmptyStateText = () => {
  const emptyStateTextRef = createRef<EmptyStateTextRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(emptyStateTextRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <EmptyState.Text ref={emptyStateTextRef}>
        <>
          {'Some words and some '}
          <em>{'highlighted words'}</em>.
        </>
      </EmptyState.Text>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

EmptyStateText.story = {
  name: 'EmptyStateText',

  parameters: {
    readme: {
      content: marked.parse(EmptyStateTextReadme),
    },
  },
}

export const EmptyStateSubText = () => {
  const emptyStateSubTextRef = createRef<EmptyStateSubTextRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(emptyStateSubTextRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <EmptyState.SubText ref={emptyStateSubTextRef}>
        {'Sub Text'}
      </EmptyState.SubText>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

EmptyStateSubText.story = {
  name: 'EmptyStateSubText',

  parameters: {
    readme: {
      content: marked.parse(EmptyStateSubTextReadme),
    },
  },
}
