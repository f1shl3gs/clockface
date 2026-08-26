// Libraries
import * as React from 'react'
import {marked} from 'marked'

// Components
import {
  SpinnerContainer,
  SpinnerContainerRef,
  SparkleSpinner,
  SparkleSpinnerRef,
  TechnoSpinner,
  TechnoSpinnerRef,
  WaitingText,
  WaitingTextRef,
} from '../'

// Types
import {ComponentSize, RemoteDataState} from '../../../Types'

// Notes
import SpinnerContainerReadme from './SpinnerContainer.md?raw'
import TechnoSpinnerReadme from './TechnoSpinner.md?raw'
import SparkleSpinnerReadme from './SparkleSpinner.md?raw'
import WaitingTextReadme from './WaitingText.md?raw'

export default {title: 'Components/Spinners/Container'}

export const _SpinnerContainer = () => {
  const technoSpinnerRef: React.RefObject<TechnoSpinnerRef | null> =
    React.createRef()
  const spinnerContainerRef: React.RefObject<SpinnerContainerRef | null> =
    React.createRef()

  const handleLogRefs = (): void => {
    /* eslint-disable */
    console.log('TechnoSpinner', technoSpinnerRef.current)
    console.log('SpinnerContainer', spinnerContainerRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <SpinnerContainer
        ref={spinnerContainerRef}
        loading={(RemoteDataState as Record<string, any>)['Loading']}
        spinnerComponent={
          <TechnoSpinner
            ref={technoSpinnerRef}
            diameterPixels={100}
            strokeWidth={ComponentSize.Small}
          />
        }
      >
        <h3>{'Loading done, display content or error.'}</h3>
      </SpinnerContainer>
      <div className="story--test-buttons">
        <button onClick={handleLogRefs}>Log Refs</button>
      </div>
    </div>
  )
}

_SpinnerContainer.story = {
  name: 'SpinnerContainer',

  parameters: {
    readme: {
      content: marked.parse(SpinnerContainerReadme),
    },
  },
}

export const _TechnoSpinner = () => {
  const technoSpinnerRef: React.RefObject<TechnoSpinnerRef | null> =
    React.createRef()

  const handleLogRef = (): void => {
    /* eslint-disable */
    console.log(technoSpinnerRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <TechnoSpinner
        ref={technoSpinnerRef}
        diameterPixels={100}
        strokeWidth={(ComponentSize as Record<string, any>)['Small']}
      />
      <div className="story--test-buttons">
        <button onClick={handleLogRef}>Log Ref</button>
      </div>
    </div>
  )
}

_TechnoSpinner.story = {
  name: 'TechnoSpinner',

  parameters: {
    readme: {
      content: marked.parse(TechnoSpinnerReadme),
    },
  },
}

export const _SparkleSpinner = () => {
  const sparkleSpinnerRef: React.RefObject<SparkleSpinnerRef | null> =
    React.createRef()

  const handleLogRef = (): void => {
    /* eslint-disable */
    console.log(sparkleSpinnerRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <SparkleSpinner
        ref={sparkleSpinnerRef}
        sizePixels={200}
        loading={(RemoteDataState as Record<string, any>)['Loading']}
      />
      <div className="story--test-buttons">
        <button onClick={handleLogRef}>Log Ref</button>
      </div>
    </div>
  )
}

_SparkleSpinner.story = {
  name: 'SparkleSpinner',

  parameters: {
    readme: {
      content: marked.parse(SparkleSpinnerReadme),
    },
  },
}

export const _WaitingText = () => {
  const waitingTextRef: React.RefObject<WaitingTextRef | null> =
    React.createRef()

  const handleLogRef = (): void => {
    /* eslint-disable */
    console.log(waitingTextRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <WaitingText text={'Loading'} ref={waitingTextRef} />
      <div className="story--test-buttons">
        <button onClick={handleLogRef}>Log Ref</button>
      </div>
    </div>
  )
}

_WaitingText.story = {
  name: 'WaitingText',

  parameters: {
    readme: {
      content: marked.parse(WaitingTextReadme),
    },
  },
}
