// Libraries
import {CSSProperties, RefObject, createRef} from 'react'
import {marked} from 'marked'

// Components
import {TextBlock, TextBlockRef} from '../'

// Types
import {ComponentSize} from '../../../Types'

// Notes
import TextBlockReadme from './TextBlock.md?raw'

export default {title: 'Components/TextBlock'}

const customTextBlockStyles: CSSProperties = {
  backgroundImage: 'linear-gradient(90deg, #ff0054 0%, rgba(0,212,255,1) 100%)',
  width: '200px',
  textAlign: 'center',
}

export const Example = () => {
  const textBlock1Ref: RefObject<TextBlockRef | null> = createRef()
  const textBlock2Ref: RefObject<TextBlockRef | null> = createRef()
  const textBlock3Ref: RefObject<TextBlockRef | null> = createRef()
  const textBlock4Ref: RefObject<TextBlockRef | null> = createRef()

  const logLabelRefs = (): void => {
    /* eslint-disable */
    console.log('TextBlock 1', textBlock1Ref.current)
    console.log('TextBlock 2', textBlock2Ref.current)
    console.log('TextBlock 3', textBlock3Ref.current)
    console.log('TextBlock 4', textBlock4Ref.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div style={{margin: '15px'}}>
        <TextBlock
          ref={textBlock1Ref}
          text="No backgroundColor or textColor"
          size={(ComponentSize as Record<string, any>)['Small']}
          monospace={false}
        />
      </div>
      <div style={{margin: '15px'}}>
        <TextBlock
          ref={textBlock2Ref}
          text={'I am customizable!'}
          size={(ComponentSize as Record<string, any>)['Small']}
          backgroundColor={''}
          monospace={false}
        />
      </div>
      <div style={{margin: '15px'}}>
        <TextBlock
          ref={textBlock3Ref}
          text={'I am customizable!'}
          size={(ComponentSize as Record<string, any>)['Small']}
          backgroundColor={''}
          textColor={''}
          monospace={false}
        />
      </div>
      <div style={{margin: '15px'}}>
        <TextBlock
          ref={textBlock4Ref}
          text="I can be styled"
          size={(ComponentSize as Record<string, any>)['Small']}
          backgroundColor={''}
          textColor={''}
          monospace={false}
          style={customTextBlockStyles}
        />
      </div>
      <div className="story--test-buttons">
        <button onClick={logLabelRefs}>Log Refs</button>
      </div>
    </div>
  )
}

Example.story = {
  parameters: {
    readme: {
      content: marked.parse(TextBlockReadme),
    },
  },
}
