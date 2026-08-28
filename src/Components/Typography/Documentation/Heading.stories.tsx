// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {Heading} from '..'

// Types
import {
  HeadingElement,
  Typeface,
  FontWeight,
  FlexDirection,
  ComponentSize,
} from '../../../Types'

// Notes
import HeadingReadme from './Heading.md?raw'
import {FlexBox} from '../../FlexBox'

export default {title: 'Components/Heading'}

export const Base = () => {
  const headingRef = createRef<HTMLHeadingElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log('Heading', headingRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <Heading
        ref={headingRef}
        element={(HeadingElement as Record<string, any>)['H1']}
        appearance={(HeadingElement as Record<string, any>)['Inherit']}
        type={(Typeface as Record<string, any>)['ProximaNova']}
        weight={(FontWeight as Record<string, any>)['Medium']}
        underline={false}
        selectable={false}
        onClick={() => alert('clicked')}
      >
        {'Gigantic Mental Fortitude'}
      </Heading>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

Base.story = {
  parameters: {
    readme: {
      content: marked.parse(HeadingReadme),
    },
  },
}

export const Collage = () => {
  return (
    <div className="story--example">
      <FlexBox direction={FlexDirection.Column} margin={ComponentSize.Large}>
        <Heading element={HeadingElement.H2} appearance={HeadingElement.H1}>
          Heading 1
        </Heading>
        <Heading element={HeadingElement.H2} appearance={HeadingElement.H2}>
          Heading 2
        </Heading>
        <Heading element={HeadingElement.H2} appearance={HeadingElement.H3}>
          Heading 3
        </Heading>
        <Heading element={HeadingElement.H2} appearance={HeadingElement.H4}>
          Heading 4
        </Heading>
        <Heading element={HeadingElement.H2} appearance={HeadingElement.H5}>
          Heading 5
        </Heading>
        <Heading element={HeadingElement.H2} appearance={HeadingElement.H6}>
          Heading 6
        </Heading>
      </FlexBox>
    </div>
  )
}

Collage.story = {
  parameters: {
    readme: {
      content: marked.parse(HeadingReadme),
    },
  },
}
