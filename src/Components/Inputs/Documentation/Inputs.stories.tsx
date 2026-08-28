// Libraries
import {createRef, ChangeEvent, useState} from 'react'
import {marked} from 'marked'

// Components
import {
  Toggle,
  Input,
  AutoInput,
  RangeSlider,
  TextArea,
  VisibilityInput,
  TimeInput,
} from '../'
import {InputLabel} from '../InputLabel'
import {FlexBox} from '../../FlexBox'

// Types
import {
  ComponentStatus,
  ComponentSize,
  ComponentColor,
  ComponentOrientation,
  IconFont,
  AutoComplete,
  FlexDirection,
  AlignItems,
  InputType,
  AutoInputMode,
  InputToggleType,
  Appearance,
} from '../../../Types'

// Notes
import InputReadme from './Input.md?raw'
import AutoInputReadme from './AutoInput.md?raw'
import VisibilityInputReadme from './VisibilityInput.md?raw'
import RangeSliderReadme from './RangeSlider.md?raw'
import TextAreaReadme from './TextArea.md?raw'
import ToggleReadme from './Toggle.md?raw'
import InputLabelReadme from './InputLabel.md?raw'
import TimeInputReadme from './TimeInput.md?raw'
import MultipleChoiceForm from './MultipleChoiceForm.md?raw'

export default {title: 'Components/Inputs/Base'}

const defaultInputStyle = {
  width: '200px',
}

export const InputText = () => {
  const inputRef = createRef<HTMLInputElement>()
  const inputContainerRef = createRef<HTMLDivElement>()

  const handleLogRefs = (): void => {
    /* eslint-disable */
    console.log('InputRef', inputRef.current)
    console.log('InputContainerRef', inputContainerRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <Input
        ref={inputRef}
        containerRef={inputContainerRef}
        placeholder={'Placeholder Text'}
        value={'Value Text'}
        monospace={false}
        onChange={() => {
          // do nothing
        }}
        name={'Name'}
        titleText={'Title Text'}
        disabledTitleText={'Disabled Title Text'}
        maxLength={24}
        icon={(IconFont as Record<string, any>)['None']}
        style={defaultInputStyle}
        status={(ComponentStatus as Record<string, any>)['Default']}
        size={(ComponentSize as Record<string, any>)['Small']}
        autocomplete={(AutoComplete as Record<string, any>)['Off']}
        type={InputType.Text}
      />
      <div className="story--test-buttons">
        <button onClick={handleLogRefs}>Log Refs</button>
      </div>
    </div>
  )
}

InputText.story = {
  name: 'Input (Text)',

  parameters: {
    readme: {
      content: marked.parse(InputReadme),
    },
  },
}

export const InputClearableText = () => {
  const [value, setValue] = useState<string>(
    'hello world how are you it is me working on this input.....'
  )

  return (
    <div className="story--example">
      <Input
        min={0}
        max={50}
        value={value}
        monospace={false}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue('')}
        name={'Name'}
        titleText={'Title Text'}
        disabledTitleText={'Disabled Title Text'}
        maxLength={125}
        icon={(IconFont as Record<string, any>)['None']}
        style={defaultInputStyle}
        status={(ComponentStatus as Record<string, any>)['Default']}
        size={(ComponentSize as Record<string, any>)['Small']}
        type={InputType.Text}
      />
    </div>
  )
}

InputClearableText.story = {
  name: 'Input (Clearable Text)',

  parameters: {
    readme: {
      content: marked.parse(InputReadme),
    },
  },
}

export const InputNumber = () => {
  const [value, setValue] = useState<number>(25)

  return (
    <div className="story--example">
      <Input
        min={0}
        max={50}
        value={value}
        monospace={false}
        onChange={e =>
          setValue(e.target.value === '' ? NaN : Number(e.target.value))
        }
        name={'Name'}
        titleText={'Title Text'}
        disabledTitleText={'Disabled Title Text'}
        maxLength={24}
        icon={(IconFont as Record<string, any>)['None']}
        style={defaultInputStyle}
        status={(ComponentStatus as Record<string, any>)['Default']}
        size={(ComponentSize as Record<string, any>)['Small']}
        type={InputType.Number}
      />
    </div>
  )
}

InputNumber.story = {
  name: 'Input (Number)',

  parameters: {
    readme: {
      content: marked.parse(InputReadme),
    },
  },
}

export const InputPassword = () => (
  <div className="story--example">
    <Input
      placeholder={'Placeholder Text'}
      value={'Value Text'}
      monospace={false}
      onChange={() => {
        // do nothing
      }}
      name={'Name'}
      titleText={'Title Text'}
      disabledTitleText={'Disabled Title Text'}
      maxLength={24}
      icon={(IconFont as Record<string, any>)['None']}
      style={defaultInputStyle}
      status={(ComponentStatus as Record<string, any>)['Default']}
      size={(ComponentSize as Record<string, any>)['Small']}
      autocomplete={(AutoComplete as Record<string, any>)['Off']}
      type={InputType.Password}
    />
  </div>
)

InputPassword.story = {
  name: 'Input (Password)',

  parameters: {
    readme: {
      content: marked.parse(InputReadme),
    },
  },
}

export const InputEmail = () => (
  <div className="story--example">
    <Input
      placeholder={'Placeholder Text'}
      value={'value@text.com'}
      monospace={false}
      onChange={() => {
        // do nothing
      }}
      name={'Name'}
      titleText={'Title Text'}
      disabledTitleText={'Disabled Title Text'}
      maxLength={24}
      icon={(IconFont as Record<string, any>)['None']}
      style={defaultInputStyle}
      status={(ComponentStatus as Record<string, any>)['Default']}
      size={(ComponentSize as Record<string, any>)['Small']}
      autocomplete={(AutoComplete as Record<string, any>)['Off']}
      type={InputType.Email}
    />
  </div>
)

InputEmail.story = {
  name: 'Input (Email)',

  parameters: {
    readme: {
      content: marked.parse(InputReadme),
    },
  },
}

export const InputCheckbox = () => (
  <div className="story--example">
    <div style={{width: `${300}px`}}>
      <FlexBox
        direction={FlexDirection.Row}
        alignItems={AlignItems.Center}
        margin={ComponentSize.Medium}
        stretchToFitWidth={true}
      >
        <Input
          name={'Name'}
          onChange={() => {
            // do nothing
          }}
          size={(ComponentSize as Record<string, any>)['Small']}
          status={(ComponentStatus as Record<string, any>)['Default']}
          type={InputType.Checkbox}
          checked={true}
        />
        <InputLabel
          size={(ComponentSize as Record<string, any>)['Small']}
          active={true}
          wrapText={true}
        >
          {'I Agree to Terms and Conditions'}
        </InputLabel>
      </FlexBox>
    </div>
  </div>
)

InputCheckbox.story = {
  name: 'Input (Checkbox)',

  parameters: {
    readme: {
      content: marked.parse(InputReadme),
    },
  },
}

export const _InputLabel = () => {
  const inputLabelRef = createRef<HTMLLabelElement>()

  const handleLogRefs = (): void => {
    /* eslint-disable */
    console.log('ToggleRef', inputLabelRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <InputLabel
        ref={inputLabelRef}
        style={{}}
        active={true}
        size={(ComponentSize as Record<string, any>)['Small']}
      >
        {'I am a label!'}
      </InputLabel>
      <div className="story--test-buttons">
        <button onClick={handleLogRefs}>Log Ref</button>
      </div>
    </div>
  )
}

_InputLabel.story = {
  name: 'InputLabel',

  parameters: {
    readme: {
      content: marked.parse(InputLabelReadme),
    },
  },
}

export const _Toggle = () => {
  const toggleRef = createRef<HTMLInputElement>()
  const toggleContainerRef = createRef<HTMLDivElement>()

  const [checked, setChecked] = useState<boolean>(false)

  const handleToggleChange = (value?: string): void => {
    /* eslint-disable */
    console.log('onChange fired!', value)
    /* eslint-enable */
    setChecked(!checked)
  }

  const handleLogRefs = (): void => {
    /* eslint-disable */
    console.log('ToggleRef', toggleRef.current)
    console.log('ToggleContainerRef', toggleContainerRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <Toggle
        checked={checked}
        ref={toggleRef}
        titleText={'Title Text'}
        disabledTitleText={'Disabled Title Text'}
        containerRef={toggleContainerRef}
        id={'example_toggle_id'}
        value={'Value Text'}
        style={{}}
        tabIndex={1}
        icon={(IconFont as Record<string, any>)['None']}
        disabled={false}
        size={(ComponentSize as Record<string, any>)['Small']}
        color={(ComponentColor as Record<string, any>)['Primary']}
        fill={(Appearance as Record<string, any>)['None']}
        type={(InputToggleType as Record<string, any>)['Checkbox']}
        onChange={handleToggleChange}
      />
      <div className="story--test-buttons">
        <button onClick={handleLogRefs}>Log Refs</button>
      </div>
    </div>
  )
}

_Toggle.story = {
  parameters: {
    readme: {
      content: marked.parse(ToggleReadme),
    },
  },
}

export const _TextArea = () => {
  const textAreaRefDefault = createRef<HTMLTextAreaElement>()
  const textAreaRefDisabled = createRef<HTMLTextAreaElement>()
  const textAreaRefValid = createRef<HTMLTextAreaElement>()
  const textAreaRefError = createRef<HTMLTextAreaElement>()
  const textAreaRefLoading = createRef<HTMLTextAreaElement>()
  const textAreaContainerRef = createRef<HTMLDivElement>()

  const handleLogRefs = (): void => {
    /* eslint-disable */
    console.log('TextAreaRef (Default)', textAreaRefDefault.current)
    console.log('TextAreaRef (Disabled)', textAreaRefDisabled.current)
    console.log('TextAreaRef (Valid)', textAreaRefValid.current)
    console.log('TextAreaRef (Error)', textAreaRefError.current)
    console.log('TextAreaRef (Loading)', textAreaRefLoading.current)
    console.log('TextAreaContainerRef (Default)', textAreaContainerRef.current)
    /* eslint-enable */
  }

  const exampleTextAreaStyle = {width: '100%', margin: '0 10px'}

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={handleLogRefs}>Log Refs</button>
      </div>
      <FlexBox
        style={{width: '100%'}}
        stretchToFitWidth={true}
        direction={FlexDirection.Column}
        margin={ComponentSize.Large}
      >
        <TextArea
          ref={textAreaRefDefault}
          containerRef={textAreaContainerRef}
          value={
            'Example text can be controlled from the Knobs panel on the right'
          }
          maxLength={50}
          minLength={5}
          placeholder={'Placeholder Text'}
          onChange={() => {
            // do nothing
          }}
          monospace={false}
          autocomplete={(AutoComplete as Record<string, any>)['Off']}
          size={(ComponentSize as Record<string, any>)['Small']}
          style={exampleTextAreaStyle}
          cols={20}
          rows={10}
          status={ComponentStatus.Default}
        />
        <TextArea
          ref={textAreaRefDisabled}
          value={
            'Example text can be controlled from the Knobs panel on the right'
          }
          maxLength={50}
          minLength={5}
          placeholder={'Placeholder Text'}
          onChange={() => {
            // do nothing
          }}
          monospace={false}
          autocomplete={(AutoComplete as Record<string, any>)['Off']}
          size={(ComponentSize as Record<string, any>)['Small']}
          style={exampleTextAreaStyle}
          cols={20}
          rows={10}
          status={ComponentStatus.Disabled}
        />
        <TextArea
          ref={textAreaRefValid}
          value={
            'Example text can be controlled from the Knobs panel on the right'
          }
          maxLength={50}
          minLength={5}
          placeholder={'Placeholder Text'}
          onChange={() => {
            // do nothing
          }}
          monospace={false}
          autocomplete={(AutoComplete as Record<string, any>)['Off']}
          size={(ComponentSize as Record<string, any>)['Small']}
          style={exampleTextAreaStyle}
          cols={20}
          rows={10}
          status={ComponentStatus.Valid}
        />
        <TextArea
          ref={textAreaRefError}
          value={
            'Example text can be controlled from the Knobs panel on the right'
          }
          maxLength={50}
          minLength={5}
          placeholder={'Placeholder Text'}
          onChange={() => {
            // do nothing
          }}
          monospace={false}
          autocomplete={(AutoComplete as Record<string, any>)['Off']}
          size={(ComponentSize as Record<string, any>)['Small']}
          style={exampleTextAreaStyle}
          cols={20}
          rows={10}
          status={ComponentStatus.Error}
        />
        <TextArea
          ref={textAreaRefLoading}
          value={
            'Example text can be controlled from the Knobs panel on the right'
          }
          maxLength={50}
          minLength={5}
          placeholder={'Placeholder Text'}
          onChange={() => {
            // do nothing
          }}
          monospace={false}
          autocomplete={(AutoComplete as Record<string, any>)['Off']}
          size={(ComponentSize as Record<string, any>)['Small']}
          style={exampleTextAreaStyle}
          cols={20}
          rows={10}
          status={ComponentStatus.Loading}
        />
      </FlexBox>
    </div>
  )
}

_TextArea.story = {
  name: 'TextArea',

  parameters: {
    readme: {
      content: marked.parse(TextAreaReadme),
    },
  },
}

export const _VisibilityInput = () => {
  const [value, setValue] = useState<string>('Value text')
  const visibilityInputRef = createRef<HTMLInputElement>()

  const handleLogRefs = (): void => {
    /* eslint-disable */
    console.log('VisibilityInputRef', visibilityInputRef.current)
    /* eslint-enable */
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  return (
    <div className="story--example">
      <VisibilityInput
        ref={visibilityInputRef}
        placeholder={'Placeholder Text'}
        value={value}
        onChange={handleInputChange}
        name={'Name'}
        titleText={'Title Text'}
        disabledTitleText={'Disabled Title Text'}
        maxLength={24}
        icon={(IconFont as Record<string, any>)['None']}
        style={defaultInputStyle}
        status={(ComponentStatus as Record<string, any>)['Default']}
        size={(ComponentSize as Record<string, any>)['Small']}
        autocomplete={(AutoComplete as Record<string, any>)['Off']}
      />
      <div className="story--test-buttons">
        <button onClick={handleLogRefs}>Log Refs</button>
      </div>
    </div>
  )
}

_VisibilityInput.story = {
  parameters: {
    readme: {
      content: marked.parse(VisibilityInputReadme),
    },
  },
}

export const _TimeInput = () => {
  const DEFAULT_UNITS = ['s', 'm', 'h', 'd', 'w', 'mo']
  const [value, setValue] = useState<string>('')
  const [unit, setUnit] = useState<string>(DEFAULT_UNITS[0])
  const timeInputRef = createRef<HTMLInputElement>()

  const handleLogRefs = (): void => {
    /* eslint-disable */
    console.log('ref', timeInputRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <TimeInput
        ref={timeInputRef}
        placeholder={'00000'}
        value={value}
        units={DEFAULT_UNITS}
        selectedUnit={unit}
        onSelectUnit={setUnit}
        onChange={setValue}
        maxLength={5}
        name={'Name'}
        titleText={'Title Text'}
        disabledTitleText={'Disabled Title Text'}
        icon={(IconFont as Record<string, any>)['None']}
        style={defaultInputStyle}
        status={(ComponentStatus as Record<string, any>)['Default']}
        size={(ComponentSize as Record<string, any>)['Small']}
      />
      <div className="story--test-buttons">
        <button onClick={handleLogRefs}>Log Refs</button>
      </div>
    </div>
  )
}

_TimeInput.story = {
  parameters: {
    readme: {
      content: marked.parse(TimeInputReadme),
    },
  },
}

export const _AutoInput = () => {
  const autoInputRef = createRef<HTMLDivElement>()
  const autoInputSelectGroupRef = createRef<HTMLDivElement>()
  const autoInputSelectGroupAutoRef = createRef<HTMLInputElement>()
  const autoInputSelectGroupCustomRef = createRef<HTMLInputElement>()

  const handleLogRef = (): void => {
    /* eslint-disable */
    console.log('AutoInput', autoInputRef.current)
    console.log('AutoInput SelectGroup', autoInputSelectGroupRef.current)
    console.log(
      'AutoInput SelectGroupOption',
      autoInputSelectGroupAutoRef.current
    )
    console.log(
      'AutoInput SelectGroupOption',
      autoInputSelectGroupCustomRef.current
    )
    /* eslint-enable */
  }

  const exampleAutoInputStyle = {width: '300px'}

  return (
    <div className="story--example">
      <AutoInput
        ref={autoInputRef}
        radioRef={autoInputSelectGroupRef}
        radioButtonAutoRef={autoInputSelectGroupAutoRef}
        radioButtonCustomRef={autoInputSelectGroupCustomRef}
        style={exampleAutoInputStyle}
        size={(ComponentSize as Record<string, any>)['Small']}
        mode={(AutoInputMode as Record<string, any>)['Auto']}
        color={(ComponentColor as Record<string, any>)['Primary']}
        onChangeMode={mode => alert(`${mode}`)}
        inputComponent={
          <Input
            value={'Swoggles'}
            placeholder={'Enter a custom value...'}
            size={(ComponentSize as Record<string, any>)['Small']}
            type={(InputType as Record<string, any>)['Text']}
            maxLength={100}
            min={0}
            max={100}
          />
        }
      />
      <div className="story--test-buttons">
        <button onClick={handleLogRef}>Log Ref</button>
      </div>
    </div>
  )
}

_AutoInput.story = {
  name: 'AutoInput',

  parameters: {
    readme: {
      content: marked.parse(AutoInputReadme),
    },
  },
}

export const _RangeSlider = () => {
  const [rangeSliderValue, setRangeSliderValue] = useState<number>(50)
  const rangeSliderRef = createRef<HTMLInputElement>()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setRangeSliderValue(parseInt(e.target.value))
  }

  const handleLogRef = (): void => {
    /* eslint-disable */
    console.log(rangeSliderRef.current)
    /* eslint-enable */
  }

  const exampleRangeSliderStyle = {width: '375px'}

  return (
    <div className="story--example">
      <RangeSlider
        ref={rangeSliderRef}
        min={0}
        max={100}
        value={rangeSliderValue}
        step={0}
        onChange={handleInputChange}
        size={(ComponentSize as Record<string, any>)['Small']}
        color={(ComponentColor as Record<string, any>)['Primary']}
        labelPrefix={''}
        labelSuffix={''}
        fill={true}
        hideLabels={false}
        style={exampleRangeSliderStyle}
        status={(ComponentStatus as Record<string, any>)['Default']}
        orientation={
          (ComponentOrientation as Record<string, any>)['Horizontal']
        }
        displayValue={false}
      />
      <div className="story--test-buttons">
        <button onClick={handleLogRef}>Log Ref</button>
      </div>
    </div>
  )
}

_RangeSlider.story = {
  parameters: {
    readme: {
      content: marked.parse(RangeSliderReadme),
    },
  },
}

export const _MultipleChoiceForm = () => {
  const [weapon, setWeapon] = useState<string>('chainsaw')

  const handleToggleChange = (value?: string): void => {
    if (value !== undefined) {
      setWeapon(value)
    }
  }

  return (
    <div className="story--example">
      <FlexBox
        direction={FlexDirection.Column}
        margin={ComponentSize.Large}
        alignItems={AlignItems.FlexStart}
      >
        <p>Choose a weapon to fight zombies with</p>
        <Toggle
          tabIndex={1}
          value="chainsaw"
          id="chainsaw"
          name="zombie_fighting_weapon"
          checked={weapon === 'chainsaw'}
          onChange={handleToggleChange}
          type={InputToggleType.Radio}
          size={ComponentSize.ExtraSmall}
          color={(ComponentColor as Record<string, any>)['Primary']}
          fill={(Appearance as Record<string, any>)['None']}
        >
          <InputLabel active={weapon === 'chainsaw'} htmlFor="chainsaw">
            Chainsaw
          </InputLabel>
        </Toggle>
        <Toggle
          tabIndex={2}
          value="crowbar"
          id="crowbar"
          name="zombie_fighting_weapon"
          checked={weapon === 'crowbar'}
          onChange={handleToggleChange}
          type={InputToggleType.Radio}
          size={ComponentSize.ExtraSmall}
          color={(ComponentColor as Record<string, any>)['Primary']}
          fill={(Appearance as Record<string, any>)['None']}
        >
          <InputLabel active={weapon === 'crowbar'} htmlFor="crowbar">
            Crowbar
          </InputLabel>
        </Toggle>
        <Toggle
          tabIndex={3}
          value="katana"
          id="katana"
          name="zombie_fighting_weapon"
          checked={weapon === 'katana'}
          onChange={handleToggleChange}
          type={InputToggleType.Radio}
          size={ComponentSize.ExtraSmall}
          color={(ComponentColor as Record<string, any>)['Primary']}
          fill={(Appearance as Record<string, any>)['None']}
        >
          <InputLabel active={weapon === 'katana'} htmlFor="katana">
            Katana
          </InputLabel>
        </Toggle>
      </FlexBox>
    </div>
  )
}

_MultipleChoiceForm.story = {
  parameters: {
    readme: {
      content: marked.parse(MultipleChoiceForm),
    },
  },
}

export const Collage = () => {
  return (
    <div className="story--example">
      <table className="two-axis-table two-axis-table--spaced">
        <tbody>
          <tr>
            <td>
              <code>Size</code>
            </td>
            {[
              {size: ComponentSize.ExtraSmall, placeholder: 'ExtraSmall'},
              {size: ComponentSize.Small, placeholder: 'Small'},
              {size: ComponentSize.Medium, placeholder: 'Medium'},
              {size: ComponentSize.Large, placeholder: 'Large'},
            ].map((props, i) => (
              <td key={i}>
                <Input {...props} />
              </td>
            ))}
          </tr>
          <tr>
            <td>
              <code>Status</code>
            </td>
            {[
              {status: ComponentStatus.Default},
              {status: ComponentStatus.Disabled},
              {status: ComponentStatus.Loading},
              {status: ComponentStatus.Error},
              {status: ComponentStatus.Valid},
            ].map((props, i) => (
              <td key={i}>
                <Input placeholder={props.status.toString()} {...props} />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Collage.story = {
  parameters: {
    readme: {
      content: marked.parse(InputReadme),
    },
  },
}
