// Libraries
import {createRef, useState} from 'react'
import {marked} from 'marked'

// Components
import {SlideToggle} from '../'
import {FlexBox} from '../../FlexBox'
import {InputLabel} from '../../Inputs'

// Types
import {
  ComponentColor,
  ComponentSize,
  FlexDirection,
  AlignItems,
} from '../../../Types'

// Notes
import SlideToggleReadme from './SlideToggle.md?raw'
import ControlsListReadme from './ControlsList.md?raw'
import SlideToggleWithLabelsReadme from './SlideToggleWithLabels.md?raw'

export default {title: 'Components/Slide Toggles/Family'}

export const _SlideToggle = () => {
  const slideToggleRef = createRef<HTMLButtonElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(slideToggleRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <SlideToggle
        ref={slideToggleRef}
        onChange={() => alert('clicked')}
        active={false}
        disabled={false}
        size={(ComponentSize as Record<string, any>)['Small']}
        color={(ComponentColor as Record<string, any>)['Default']}
        tooltipText={'Tooltip Text'}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_SlideToggle.story = {
  name: 'SlideToggle',

  parameters: {
    readme: {
      content: marked.parse(SlideToggleReadme),
    },
  },
}

export const SlideToggleWithLabels = () => (
  <div className="story--example">
    <FlexBox
      direction={FlexDirection.Row}
      alignItems={AlignItems.Center}
      margin={ComponentSize.Medium}
    >
      <InputLabel
        wrapText={true}
        active={!false}
        size={(ComponentSize as Record<string, any>)['Small']}
      >
        {'Apples'}
      </InputLabel>
      <SlideToggle
        onChange={() => alert('clicked')}
        active={false}
        size={(ComponentSize as Record<string, any>)['Small']}
        color={(ComponentColor as Record<string, any>)['Primary']}
      />
      <InputLabel
        wrapText={true}
        active={false}
        size={(ComponentSize as Record<string, any>)['Small']}
      >
        {'Oranges'}
      </InputLabel>
    </FlexBox>
  </div>
)

SlideToggleWithLabels.story = {
  name: 'SlideToggle with labels',

  parameters: {
    readme: {
      content: marked.parse(SlideToggleWithLabelsReadme),
    },
  },
}

export const ControlsList = () => {
  const [optionA, updateOptionA] = useState<boolean>(true)
  const [optionB, updateOptionB] = useState<boolean>(false)
  const [optionC, updateOptionC] = useState<boolean>(false)

  return (
    <div className="story--example">
      <div style={{width: '250px'}}>
        <FlexBox
          direction={FlexDirection.Column}
          alignItems={AlignItems.Stretch}
          margin={ComponentSize.Large}
        >
          <FlexBox
            direction={FlexDirection.Row}
            alignItems={AlignItems.Center}
            margin={ComponentSize.Medium}
            stretchToFitWidth={true}
          >
            <SlideToggle
              onChange={() => updateOptionA(!optionA)}
              active={optionA}
              size={ComponentSize.ExtraSmall}
              color={(ComponentColor as Record<string, any>)['Secondary']}
            />
            <InputLabel active={optionA}>Send email notifications</InputLabel>
          </FlexBox>
          <FlexBox
            direction={FlexDirection.Row}
            alignItems={AlignItems.Center}
            margin={ComponentSize.Medium}
            stretchToFitWidth={true}
          >
            <SlideToggle
              onChange={() => updateOptionA(!optionA)}
              active={optionA}
              size={ComponentSize.Small}
              color={(ComponentColor as Record<string, any>)['Secondary']}
            />
            <InputLabel active={optionA}>Send SMS notifications</InputLabel>
          </FlexBox>
          <FlexBox
            direction={FlexDirection.Row}
            alignItems={AlignItems.Center}
            margin={ComponentSize.Medium}
            stretchToFitWidth={true}
          >
            <SlideToggle
              onChange={() => updateOptionB(!optionB)}
              active={optionB}
              size={ComponentSize.Medium}
              color={(ComponentColor as Record<string, any>)['Secondary']}
            />
            <InputLabel active={optionB}>Send a raven</InputLabel>
          </FlexBox>
          <FlexBox
            direction={FlexDirection.Row}
            alignItems={AlignItems.Center}
            margin={ComponentSize.Medium}
            stretchToFitWidth={true}
          >
            <SlideToggle
              onChange={() => updateOptionC(!optionC)}
              active={optionC}
              size={ComponentSize.Large}
              color={(ComponentColor as Record<string, any>)['Secondary']}
            />
            <InputLabel active={optionC}>Send an owl</InputLabel>
          </FlexBox>
        </FlexBox>
      </div>
    </div>
  )
}

ControlsList.story = {
  parameters: {
    readme: {
      content: marked.parse(ControlsListReadme),
    },
  },
}
