// Libraries
import {RefObject, createRef} from 'react'
import {marked} from 'marked'

// Components
import {FlexBox, FlexBoxRef, FlexBoxChildRef} from '../'

// Types
import {
  AlignItems,
  FlexDirection,
  JustifyContent,
  ComponentSize,
} from '../../../Types'

// Notes
import FlexBoxReadme from './FlexBox.md?raw'
import FlexBoxChildReadme from './FlexBoxChild.md?raw'

export default {title: 'Layout/FlexBox'}

export const _FlexBox = () => {
  const flexBoxRef: RefObject<FlexBoxRef | null> = createRef()

  const handleLogRef = (): void => {
    /* eslint-disable */
    console.log(flexBoxRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <FlexBox.FlexBox
        ref={flexBoxRef}
        direction={(FlexDirection as Record<string, any>)['Row']}
        alignItems={(AlignItems as Record<string, any>)['Center']}
        justifyContent={(JustifyContent as Record<string, any>)['FlexStart']}
        margin={(ComponentSize as Record<string, any>)['None']}
        stretchToFitWidth={false}
        stretchToFitHeight={false}
      >
        <div
          className="mockComponent box"
          style={{height: '40px', width: '40px'}}
        />
        <div
          className="mockComponent box"
          style={{height: '60px', width: '60px'}}
        />
        <div
          className="mockComponent box"
          style={{height: '80px', width: '80px'}}
        />
        <div
          className="mockComponent box"
          style={{height: '100px', width: '100px'}}
        />
        <div
          className="mockComponent box"
          style={{height: '120px', width: '120px'}}
        />
      </FlexBox.FlexBox>
      <div className="story--test-buttons">
        <button onClick={handleLogRef}>Log Ref</button>
      </div>
    </div>
  )
}

_FlexBox.story = {
  name: 'FlexBox',

  parameters: {
    readme: {
      content: marked.parse(FlexBoxReadme),
    },
  },
}

export const FlexChild = () => {
  const flexBoxRef: RefObject<FlexBoxRef | null> = createRef()
  const flexBoxChildARef: RefObject<FlexBoxChildRef | null> = createRef()
  const flexBoxChildBRef: RefObject<FlexBoxChildRef | null> = createRef()
  const flexBoxChildCRef: RefObject<FlexBoxChildRef | null> = createRef()
  const flexBoxChildDRef: RefObject<FlexBoxChildRef | null> = createRef()

  const handleLogRefs = (): void => {
    /* eslint-disable */
    console.log('FlexBox', flexBoxRef.current)
    console.log('FlexBoxChild A', flexBoxChildARef.current)
    console.log('FlexBoxChild B', flexBoxChildBRef.current)
    console.log('FlexBoxChild C', flexBoxChildCRef.current)
    console.log('FlexBoxChild D', flexBoxChildDRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <FlexBox.FlexBox
        ref={flexBoxRef}
        direction={FlexDirection.Row}
        alignItems={AlignItems.Center}
        justifyContent={JustifyContent.FlexStart}
        margin={(ComponentSize as Record<string, any>)['Small']}
        stretchToFitWidth={true}
      >
        <FlexBox.Child ref={flexBoxChildARef} basis={40} grow={0} shrink={0}>
          <div className="mockComponent stretch">A</div>
        </FlexBox.Child>
        <FlexBox.Child ref={flexBoxChildBRef} basis={0} grow={1} shrink={0}>
          <div className="mockComponent stretch">B</div>
        </FlexBox.Child>
        <FlexBox.Child ref={flexBoxChildCRef} basis={0} grow={2} shrink={0}>
          <div className="mockComponent stretch">C</div>
        </FlexBox.Child>
        <FlexBox.Child ref={flexBoxChildDRef} basis={80} grow={0} shrink={0}>
          <div className="mockComponent stretch">D</div>
        </FlexBox.Child>
      </FlexBox.FlexBox>
      <div className="story--test-buttons">
        <button onClick={handleLogRefs}>Log Refs</button>
      </div>
    </div>
  )
}

FlexChild.story = {
  name: 'FlexChild',

  parameters: {
    readme: {
      content: marked.parse(FlexBoxChildReadme),
    },
  },
}
