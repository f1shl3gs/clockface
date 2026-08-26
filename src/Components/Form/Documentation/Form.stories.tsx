// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {
  Form,
  FormRef,
  FormBoxRef,
  FormLabelRef,
  FormFooterRef,
  FormDividerRef,
  FormElementRef,
  FormHelpTextRef,
  FormElementErrorRef,
  FormValidationElementRef,
} from '../index'

import {Grid} from '../../Grid'
import {Button} from '../../Button/Composed/Button'
import {Input} from '../../Inputs/Input'
import {FlexBox} from '../../FlexBox'
import {SlideToggle} from '../../SlideToggle'
import {InputLabel} from '../../Inputs/InputLabel'
import {Panel} from '../../Panel'
import {TextBlock} from '../../TextBlock/TextBlock'
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
  const formRef = createRef<FormRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(formRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--form-example">
        <Form.Form ref={formRef} />
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

export const FormBox = () => {
  const formBoxRef = createRef<FormBoxRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(formBoxRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--form-example">
        <Form.Box ref={formBoxRef} />
      </div>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

FormBox.story = {
  name: 'FormBox',

  parameters: {
    readme: {
      content: marked.parse(FormReadme),
    },
  },
}

export const FormDivider = () => {
  const formDividerRef = createRef<FormDividerRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(formDividerRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--form-example">
        <Form.Divider ref={formDividerRef} lineColor={''} />
      </div>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

FormDivider.story = {
  name: 'FormDivider',

  parameters: {
    readme: {
      content: marked.parse(FormReadme),
    },
  },
}

export const FormElement = () => {
  const formElementRef = createRef<FormElementRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(formElementRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--form-example">
        <Form.Element
          ref={formElementRef}
          label={'Element Label'}
          helpText={'Help Text'}
          errorMessage={'Error Message'}
          required={true}
        >
          <div className="mockComponent mockInput">Input Goes Here</div>
        </Form.Element>
      </div>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

FormElement.story = {
  name: 'FormElement',

  parameters: {
    readme: {
      content: marked.parse(FormElementReadme),
    },
  },
}

export const FormElementError = () => {
  const formElementErrorRef = createRef<FormElementErrorRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(formElementErrorRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <Form.ElementError ref={formElementErrorRef} message={'Error Message'} />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

FormElementError.story = {
  name: 'FormElementError',

  parameters: {
    readme: {
      content: marked.parse(FormReadme),
    },
  },
}

export const FormFooter = () => {
  const formFooterRef = createRef<FormFooterRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(formFooterRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <Form.Footer ref={formFooterRef}>
        <Button text="Cancel" />
        <Button text="Confirm" color={ComponentColor.Primary} />
      </Form.Footer>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

FormFooter.story = {
  name: 'FormFooter',

  parameters: {
    readme: {
      content: marked.parse(FormReadme),
    },
  },
}

export const FormHelpText = () => {
  const formHelpTextRef = createRef<FormHelpTextRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(formHelpTextRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--form-example">
        <Form.HelpText ref={formHelpTextRef} text={'Help Text'} />
      </div>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

FormHelpText.story = {
  name: 'FormHelpText',

  parameters: {
    readme: {
      content: marked.parse(FormReadme),
    },
  },
}

export const FormLabel = () => {
  const formLabelRef = createRef<FormLabelRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(formLabelRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--form-example">
        <Form.Label
          ref={formLabelRef}
          label={'Element Label'}
          required={true}
        />
      </div>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

FormLabel.story = {
  name: 'FormLabel',

  parameters: {
    readme: {
      content: marked.parse(FormReadme),
    },
  },
}

export const FormValidationElement = () => {
  const formValidationElementRef = createRef<FormValidationElementRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(formValidationElementRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--form-example">
        <Form.ValidationElement
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
        </Form.ValidationElement>
      </div>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

FormValidationElement.story = {
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
            <Grid.Row>
              <Grid.Column widthXS={Columns.Six}>
                <Form.ValidationElement
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
                </Form.ValidationElement>
              </Grid.Column>
              <Grid.Column widthXS={Columns.Six}>
                <Form.ValidationElement
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
                </Form.ValidationElement>
              </Grid.Column>
              <Grid.Column widthXS={Columns.Twelve}>
                <Form.Element label="Title or Description" required={false}>
                  <Input
                    size={ComponentSize.Small}
                    placeholder="What role does this user play?"
                    value={''}
                    onChange={() => {
                      // do nothing
                    }}
                  />
                </Form.Element>
              </Grid.Column>
              <Grid.Column widthXS={Columns.Twelve}>
                <Form.Element label="Team" required={false}>
                  <Form.Box>
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
                  </Form.Box>
                </Form.Element>
              </Grid.Column>
              <Grid.Column widthXS={Columns.Twelve}>
                <Form.Footer>
                  <Button
                    text="Create User"
                    color={ComponentColor.Primary}
                    size={ComponentSize.Small}
                    status={submitStatus()}
                  />
                </Form.Footer>
              </Grid.Column>
            </Grid.Row>
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
        <Panel.Body size={(ComponentSize as Record<string, any>)['Small']}>
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
              <FlexBox.Child grow={1}>
                <SelectDropdown
                  options={['any value', 'all values']}
                  selectedOption="any value"
                  onSelect={() => {
                    // do nothing
                  }}
                  buttonSize={(ComponentSize as Record<string, any>)['Small']}
                />
              </FlexBox.Child>
              <FlexBox.Child grow={2}>
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
              </FlexBox.Child>
            </FlexBox>
            <FlexBox
              stretchToFitWidth={true}
              direction={FlexDirection.Row}
              margin={(ComponentSize as Record<string, any>)['Small']}
            >
              <FlexBox.Child>
                <Input
                  type={InputType.Number}
                  value="90"
                  size={(ComponentSize as Record<string, any>)['Small']}
                />
              </FlexBox.Child>
              <TextBlock
                size={(ComponentSize as Record<string, any>)['Small']}
                text="to"
              />
              <FlexBox.Child>
                <Input
                  type={InputType.Number}
                  value="100"
                  size={(ComponentSize as Record<string, any>)['Small']}
                />
              </FlexBox.Child>
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
        </Panel.Body>
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
