// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {FlexBox, FlexBoxChild} from '../'

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
  const flexBoxRef = createRef<HTMLDivElement>()

  const handleLogRef = (): void => {
    console.log(flexBoxRef.current)
  }

  return (
    <div className="story--example">
      <FlexBox
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
      </FlexBox>
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
  const flexBoxRef = createRef<HTMLDivElement>()
  const flexBoxChildARef = createRef<HTMLDivElement>()
  const flexBoxChildBRef = createRef<HTMLDivElement>()
  const flexBoxChildCRef = createRef<HTMLDivElement>()
  const flexBoxChildDRef = createRef<HTMLDivElement>()

  const handleLogRefs = (): void => {
    console.log('FlexBox', flexBoxRef.current)
    console.log('FlexBoxChild A', flexBoxChildARef.current)
    console.log('FlexBoxChild B', flexBoxChildBRef.current)
    console.log('FlexBoxChild C', flexBoxChildCRef.current)
    console.log('FlexBoxChild D', flexBoxChildDRef.current)
  }

  return (
    <div className="story--example">
      <FlexBox
        ref={flexBoxRef}
        direction={FlexDirection.Row}
        alignItems={AlignItems.Center}
        justifyContent={JustifyContent.FlexStart}
        margin={(ComponentSize as Record<string, any>)['Small']}
        stretchToFitWidth={true}
      >
        <FlexBoxChild ref={flexBoxChildARef} basis={40} grow={0} shrink={0}>
          <div className="mockComponent stretch">A</div>
        </FlexBoxChild>
        <FlexBoxChild ref={flexBoxChildBRef} basis={0} grow={1} shrink={0}>
          <div className="mockComponent stretch">B</div>
        </FlexBoxChild>
        <FlexBoxChild ref={flexBoxChildCRef} basis={0} grow={2} shrink={0}>
          <div className="mockComponent stretch">C</div>
        </FlexBoxChild>
        <FlexBoxChild ref={flexBoxChildDRef} basis={80} grow={0} shrink={0}>
          <div className="mockComponent stretch">D</div>
        </FlexBoxChild>
      </FlexBox>
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
