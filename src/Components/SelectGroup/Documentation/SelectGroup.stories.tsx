// Libraries
import {createRef, RefObject, useState} from 'react'
import {marked} from 'marked'

// Components
import {SelectGroup, SelectGroupOption} from '../'

// Types
import {
  ComponentColor,
  ComponentSize,
  ButtonShape,
  InputToggleType,
} from '../../../Types'

// Notes
import SelectGroupReadme from './SelectGroup.md?raw'
import SelectGroupOptionReadme from './SelectGroupOption.md?raw'
import SelectGroupExampleReadme from './SelectGroupExample.md?raw'

export default {title: 'Components/SelectGroup/Family'}

export const _SelectGroup = () => {
  const mirepoix = ['Celery', 'Carrot', 'Onion', 'Garlic']

  const [selectedSelectGroup, setSelectedSelectGroup] = useState<string>(
    mirepoix[0],
  )
  const [selectedCheckbox, setSelectedCheckbox] = useState<string[]>([
    mirepoix[0],
  ])
  const selectGroupRef = createRef<HTMLDivElement>()
  const selectGroupButtonCeleryRef = createRef<HTMLInputElement>()
  const selectGroupButtonCarrotRef = createRef<HTMLInputElement>()
  const selectGroupButtonOnionRef = createRef<HTMLInputElement>()

  const selectGroupButtonRefs: Record<
    string,
    RefObject<HTMLInputElement | null>
  > = {
    Celery: selectGroupButtonCeleryRef,
    Carrot: selectGroupButtonCarrotRef,
    Onion: selectGroupButtonOnionRef,
  }

  const logSelectGroupRefs = (): void => {
    console.log('SelectGroup', selectGroupRef.current)
    console.log('SelectGroupOption', selectGroupButtonCeleryRef.current)
    console.log('SelectGroupOption', selectGroupButtonCarrotRef.current)
    console.log('SelectGroupOption', selectGroupButtonOnionRef.current)
  }

  return (
    <div className="story--example">
      <SelectGroup
        ref={selectGroupRef}
        style={{width: '400px'}}
        size={(ComponentSize as Record<string, any>)['Small']}
        color={(ComponentColor as Record<string, any>)['Default']}
        shape={(ButtonShape as Record<string, any>)['StretchToFit']}
      >
        {mirepoix.map(btn => {
          const isSelectGroup = true
          const active = isSelectGroup
            ? selectedSelectGroup === btn
            : selectedCheckbox.includes(btn)

          const setActive = (value: any): void => {
            if (isSelectGroup) {
              setSelectedSelectGroup(value)
            } else {
              let updatedSelection = selectedCheckbox
              if (selectedCheckbox.includes(btn)) {
                updatedSelection = updatedSelection.filter(s => s !== btn)
              } else {
                updatedSelection = [...updatedSelection, btn]
              }
              setSelectedCheckbox(updatedSelection)
            }
          }

          const disabled = btn === mirepoix[3]

          return (
            <SelectGroupOption
              type={(InputToggleType as Record<string, any>)['SelectGroup']}
              name={'mirepoix'}
              ref={selectGroupButtonRefs[btn]}
              key={btn}
              id={btn}
              active={active}
              value={btn}
              titleText={btn}
              onClick={setActive}
              disabled={disabled}
            >
              {btn}
            </SelectGroupOption>
          )
        })}
      </SelectGroup>
      <div className="story--test-buttons">
        <button onClick={logSelectGroupRefs}>Log Refs</button>
      </div>
    </div>
  )
}

_SelectGroup.story = {
  name: 'SelectGroup',

  parameters: {
    readme: {
      content: marked.parse(SelectGroupReadme),
    },
  },
}

export const _SelectGroupOption = () => {
  const selectGroupButtonRef = createRef<HTMLInputElement>()

  const logSelectGroupOptionRef = (): void => {
    console.log(selectGroupButtonRef.current)
  }

  return (
    <div className="story--example">
      <SelectGroupOption
        ref={selectGroupButtonRef}
        id={'example-selectGroup-option'}
        active={false}
        value={'example-selectGroup-option'}
        onClick={value => {
          alert(value)
        }}
        disabled={false}
        titleText={'I am helpful text!'}
        disabledTitleText={'Explainer for why this item is disabled'}
      >
        {'Button Label'}
      </SelectGroupOption>
      <div className="story--test-buttons">
        <button onClick={logSelectGroupOptionRef}>Log Ref</button>
      </div>
    </div>
  )
}

_SelectGroupOption.story = {
  name: 'SelectGroupOption',

  parameters: {
    readme: {
      content: marked.parse(SelectGroupOptionReadme),
    },
  },
}

export const NoteEditorModeToggle = () => {
  const [activeItemID, updateActiveItemID] = useState<string>('mode-compose')

  return (
    <div className="story--example">
      <div style={{width: `${240}px`}}>
        <SelectGroup
          size={(ComponentSize as Record<string, any>)['Small']}
          color={(ComponentColor as Record<string, any>)['Default']}
          shape={ButtonShape.StretchToFit}
        >
          <SelectGroupOption
            titleText="Compose your Note using Markdown"
            id="mode-compose"
            active={activeItemID === 'mode-compose'}
            value="mode-compose"
            name="note-editor"
            onClick={activeItemID => updateActiveItemID(activeItemID)}
          >
            Compose
          </SelectGroupOption>
          <SelectGroupOption
            titleText="See a preview of your Note"
            id="mode-preview"
            active={activeItemID === 'mode-preview'}
            value="mode-preview"
            name="note-editor"
            onClick={activeItemID => updateActiveItemID(activeItemID)}
          >
            Preview
          </SelectGroupOption>
        </SelectGroup>
      </div>
    </div>
  )
}

NoteEditorModeToggle.story = {
  parameters: {
    readme: {
      content: marked.parse(SelectGroupExampleReadme),
    },
  },
}
