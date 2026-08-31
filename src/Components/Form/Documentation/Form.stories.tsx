// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {
  Form,
  FormBox,
  FormDivider,
  FormElement,
  FormElementError,
  FormFooter,
  FormHelpText,
  FormLabel,
  FormValidationElement,
} from '../index'

import {Grid, GridColumn, GridRow} from '../../Grid'
import {Button} from '../../Button/Composed/Button'
import {Input, InputLabel} from '../../Inputs'
import {FlexBox, FlexBoxChild} from '../../FlexBox'
import {SlideToggle} from '../../SlideToggle'
import {Panel, PanelBody} from '../../Panel'
import {TextBlock} from '../../TextBlock'
import {DismissButton} from '../../Button/Composed/DismissButton'
import {SelectDropdown} from '../../Dropdowns/Composed/SelectDropdown'
import {FormValidationTest} from './FormValidationTest'

// Types
import {
  Columns,
  ComponentColor,
  ComponentSize,
  ComponentStatus,
  FlexDirection,
  AlignItems,
  InputType,
  InfluxColors,
} from '../../../Types'

// Notes
import FormReadme from './Form.md?raw'
import FormElementReadme from './FormElement.md?raw'
import FormValidationElementReadme from './FormValidationElement.md?raw'
import NaturalLanguageFormReadme from './NaturalLanguageForm.md?raw'

export default {title: 'Components/Forms/Standard'}

const mockValidationFunc = (value: string): string | null => {
  if (!value) {
    return 'Field cannot be empty'
  }

  if (value.length >= 21) {
    return 'Must be 20 characters or less'
  }

  return null
}

export const _Form = () => {
  const formRef = createRef<HTMLFormElement>()

  const logRef = (): void => {
    console.log(formRef.current)
  }

  return (
    <div className="story--example">
      <div className="story--form-example">
        <Form ref={formRef} />
      </div>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_Form.story = {
  parameters: {
    readme: {
      content: marked.parse(FormReadme),
    },
  },
}

export const _FormBox = () => {
  const formBoxRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(formBoxRef.current)
  }

  return (
    <div className="story--example">
      <div className="story--form-example">
        <FormBox ref={formBoxRef} />
      </div>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_FormBox.story = {
  name: 'FormBox',

  parameters: {
    readme: {
      content: marked.parse(FormReadme),
    },
  },
}

export const _FormDivider = () => {
  const formDividerRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(formDividerRef.current)
  }

  return (
    <div className="story--example">
      <div className="story--form-example">
        <FormDivider ref={formDividerRef} lineColor={''} />
      </div>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_FormDivider.story = {
  name: 'FormDivider',

  parameters: {
    readme: {
      content: marked.parse(FormReadme),
    },
  },
}

export const _FormElement = () => {
  const formElementRef = createRef<HTMLLabelElement & HTMLDivElement>()

  const logRef = (): void => {
    console.log(formElementRef.current)
  }

  return (
    <div className="story--example">
      <div className="story--form-example">
        <FormElement
          ref={formElementRef}
          label={'Element Label'}
          helpText={'Help Text'}
          errorMessage={'Error Message'}
          required={true}
        >
          <div className="mockComponent mockInput">Input Goes Here</div>
        </FormElement>
      </div>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_FormElement.story = {
  name: 'FormElement',

  parameters: {
    readme: {
      content: marked.parse(FormElementReadme),
    },
  },
}

export const _FormElementError = () => {
  const formElementErrorRef = createRef<HTMLSpanElement>()

  const logRef = (): void => {
    console.log(formElementErrorRef.current)
  }

  return (
    <div className="story--example">
      <FormElementError ref={formElementErrorRef} message={'Error Message'} />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_FormElementError.story = {
  name: 'FormElementError',

  parameters: {
    readme: {
      content: marked.parse(FormReadme),
    },
  },
}

export const _FormFooter = () => {
  const formFooterRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(formFooterRef.current)
  }

  return (
    <div className="story--example">
      <FormFooter ref={formFooterRef}>
        <Button text="Cancel" />
        <Button text="Confirm" color={ComponentColor.Primary} />
      </FormFooter>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_FormFooter.story = {
  name: 'FormFooter',

  parameters: {
    readme: {
      content: marked.parse(FormReadme),
    },
  },
}

export const _FormHelpText = () => {
  const formHelpTextRef = createRef<HTMLSpanElement>()

  const logRef = (): void => {
    console.log(formHelpTextRef.current)
  }

  return (
    <div className="story--example">
      <div className="story--form-example">
        <FormHelpText ref={formHelpTextRef} text={'Help Text'} />
      </div>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_FormHelpText.story = {
  name: 'FormHelpText',

  parameters: {
    readme: {
      content: marked.parse(FormReadme),
    },
  },
}

export const _FormLabel = () => {
  const formLabelRef = createRef<HTMLDivElement & HTMLLabelElement>()

  const logRef = (): void => {
    console.log(formLabelRef.current)
  }

  return (
    <div className="story--example">
      <div className="story--form-example">
        <FormLabel ref={formLabelRef} label={'Element Label'} required={true} />
      </div>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_FormLabel.story = {
  name: 'FormLabel',

  parameters: {
    readme: {
      content: marked.parse(FormReadme),
    },
  },
}

export const _FormValidationElement = () => {
  const formValidationElementRef = createRef<HTMLLabelElement>()

  const logRef = (): void => {
    console.log(formValidationElementRef.current)
  }

  return (
    <div className="story--example">
      <div className="story--form-example">
        <FormValidationElement
          ref={formValidationElementRef}
          label={'Element Label'}
          value={'Input Value (delete this to cause error)'}
          helpText={'Help Text'}
          required={true}
          validationFunc={mockValidationFunc}
          prevalidate={false}
        >
          {status => (
            <Input
              status={status}
              value={'Input Value (delete this to cause error)'}
              onChange={() => {
                // do nothing
              }}
            />
          )}
        </FormValidationElement>
      </div>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_FormValidationElement.story = {
  name: 'FormValidationElement',

  parameters: {
    readme: {
      content: marked.parse(FormValidationElementReadme),
    },
  },
}

export const ValidationFunction = () => (
  <div className="story--example" style={{flexDirection: 'column'}}>
    <FormValidationTest />
  </div>
)

ValidationFunction.story = {
  parameters: {
    readme: {
      content: marked.parse(FormValidationElementReadme),
    },
  },
}

export const CreateUserForm = () => {
  const usernameValidator = (value: string): string | null => {
    if (!value) {
      return 'Username cannot be blank'
    }

    return null
  }

  const emailValidator = (value: string): string | null => {
    if (!value) {
      return 'Email cannot be blank'
    }

    const regexBlurb =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!regexBlurb.test(value)) {
      return 'Please enter a valid email address'
    }

    return null
  }

  const submitStatus = (): ComponentStatus => {
    const usernameIsValid = usernameValidator('')
    const emailIsValid = emailValidator('')

    if (usernameIsValid === null && emailIsValid === null) {
      return ComponentStatus.Default
    }

    return ComponentStatus.Disabled
  }

  return (
    <div className="story--example">
      <div className="story--form-example">
        <Form>
          <Grid>
            <GridRow>
              <GridColumn widthXS={Columns.Six}>
                <FormValidationElement
                  label="Username"
                  required={true}
                  value={''}
                  validationFunc={usernameValidator}
                >
                  {status => (
                    <Input
                      size={ComponentSize.Small}
                      placeholder="A user needs a name..."
                      value={''}
                      status={status}
                      onChange={() => {
                        // do nothing
                      }}
                    />
                  )}
                </FormValidationElement>
              </GridColumn>
              <GridColumn widthXS={Columns.Six}>
                <FormValidationElement
                  label="Email"
                  required={true}
                  value={''}
                  validationFunc={emailValidator}
                >
                  {status => (
                    <Input
                      size={ComponentSize.Small}
                      placeholder="example@example.com"
                      value={''}
                      status={status}
                      onChange={() => {
                        // do nothing
                      }}
                    />
                  )}
                </FormValidationElement>
              </GridColumn>
              <GridColumn widthXS={Columns.Twelve}>
                <FormElement label="Title or Description" required={false}>
                  <Input
                    size={ComponentSize.Small}
                    placeholder="What role does this user play?"
                    value={''}
                    onChange={() => {
                      // do nothing
                    }}
                  />
                </FormElement>
              </GridColumn>
              <GridColumn widthXS={Columns.Twelve}>
                <FormElement label="Team" required={false}>
                  <FormBox>
                    <FlexBox
                      stretchToFitWidth={true}
                      direction={FlexDirection.Row}
                      alignItems={AlignItems.Center}
                      margin={ComponentSize.Small}
                    >
                      <SlideToggle
                        active={true}
                        onChange={() => {
                          // do nothing
                        }}
                        size={ComponentSize.ExtraSmall}
                        color={ComponentColor.Primary}
                      />
                      <InputLabel active={true}>
                        Add this user to all teams?
                      </InputLabel>
                    </FlexBox>
                  </FormBox>
                </FormElement>
              </GridColumn>
              <GridColumn widthXS={Columns.Twelve}>
                <FormFooter>
                  <Button
                    text="Create User"
                    color={ComponentColor.Primary}
                    size={ComponentSize.Small}
                    status={submitStatus()}
                  />
                </FormFooter>
              </GridColumn>
            </GridRow>
          </Grid>
        </Form>
      </div>
    </div>
  )
}

CreateUserForm.story = {
  parameters: {
    readme: {
      content: marked.parse(FormReadme),
    },
  },
}

export const NaturalLanguageForm = () => (
  <div className="story--example">
    <div style={{width: `${500}px`}}>
      <Panel>
        <DismissButton
          onClick={() => {
            // do nothing
          }}
          color={ComponentColor.Danger}
        />
        <PanelBody size={(ComponentSize as Record<string, any>)['Small']}>
          <FlexBox
            direction={FlexDirection.Column}
            margin={(ComponentSize as Record<string, any>)['Small']}
          >
            <FlexBox
              stretchToFitWidth={true}
              direction={FlexDirection.Row}
              margin={(ComponentSize as Record<string, any>)['Small']}
            >
              <TextBlock
                size={(ComponentSize as Record<string, any>)['Small']}
                text="When"
              />
              <FlexBoxChild grow={1}>
                <SelectDropdown
                  options={['any value', 'all values']}
                  selectedOption="any value"
                  onSelect={() => {
                    // do nothing
                  }}
                  buttonSize={(ComponentSize as Record<string, any>)['Small']}
                />
              </FlexBoxChild>
              <FlexBoxChild grow={2}>
                <SelectDropdown
                  options={[
                    'is above threshold',
                    'is below threshold',
                    'is inside range',
                    'is outside range',
                  ]}
                  selectedOption="is inside range"
                  onSelect={() => {
                    // do nothing
                  }}
                  buttonSize={(ComponentSize as Record<string, any>)['Small']}
                />
              </FlexBoxChild>
            </FlexBox>
            <FlexBox
              stretchToFitWidth={true}
              direction={FlexDirection.Row}
              margin={(ComponentSize as Record<string, any>)['Small']}
            >
              <FlexBoxChild>
                <Input
                  type={InputType.Number}
                  value="90"
                  size={(ComponentSize as Record<string, any>)['Small']}
                />
              </FlexBoxChild>
              <TextBlock
                size={(ComponentSize as Record<string, any>)['Small']}
                text="to"
              />
              <FlexBoxChild>
                <Input
                  type={InputType.Number}
                  value="100"
                  size={(ComponentSize as Record<string, any>)['Small']}
                />
              </FlexBoxChild>
              <TextBlock
                size={(ComponentSize as Record<string, any>)['Small']}
                text="set status to"
              />
              <TextBlock
                size={(ComponentSize as Record<string, any>)['Small']}
                text={'WARN'}
                backgroundColor={`${InfluxColors.Pineapple}`}
              />
            </FlexBox>
          </FlexBox>
        </PanelBody>
      </Panel>
    </div>
  </div>
)

NaturalLanguageForm.story = {
  parameters: {
    readme: {
      content: marked.parse(NaturalLanguageFormReadme),
    },
  },
}
