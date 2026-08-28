// Libraries
import React, {RefObject, FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Components
import {SelectGroup, SelectGroupOption} from '../../SelectGroup/index'

// Types
import {
  StandardFunctionProps,
  ButtonShape,
  ComponentColor,
  ComponentSize,
  AutoInputMode,
} from '../../../Types'

// Styles
import './AutoInput.scss'

export interface AutoInputProps extends StandardFunctionProps {
  /** Pass in a component of type "Input" */
  inputComponent: React.ReactElement
  /** Fires when the radio is toggled and the mode changes */
  onChangeMode: (mode: AutoInputMode) => void
  /** Modality of radio, either "Auto" or "Custom" */
  mode: AutoInputMode
  /** SelectGroup color */
  color?: ComponentColor
  /** Controls size of SelectGroup & Input sub-components */
  size?: ComponentSize
  /** Pass through ref for SelectGroup */
  radioRef?: RefObject<HTMLDivElement | null>
  /** Pass through ref for "Auto" SelectGroupOption */
  radioButtonAutoRef?: RefObject<HTMLInputElement | null>
  /** Pass through ref for "Custom" SelectGroupOption */
  radioButtonCustomRef?: RefObject<HTMLInputElement | null>
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const AutoInput: FunctionComponent<AutoInputProps> = ({
  id = 'auto-input',
  mode,
  size = ComponentSize.Small,
  color = ComponentColor.Primary,
  style,
  testID = 'auto-input',
  radioRef,
  className,
  onChangeMode,
  inputComponent,
  radioButtonAutoRef,
  radioButtonCustomRef,
  ref,
}) => {
  const autoInputClass = classnames('cf-auto-input', {
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={autoInputClass}
    >
      <div className="cf-auto-input--radio">
        <SelectGroup
          ref={radioRef}
          shape={ButtonShape.StretchToFit}
          size={size}
          color={color}
        >
          <SelectGroupOption
            active={mode === AutoInputMode.Auto}
            id={`${id}--${AutoInputMode.Auto}`}
            testID={`${testID}--${AutoInputMode.Auto}`}
            titleText="Decide for me"
            value={AutoInputMode.Auto}
            onClick={onChangeMode}
            ref={radioButtonAutoRef}
          >
            Auto
          </SelectGroupOption>
          <SelectGroupOption
            active={mode === AutoInputMode.Custom}
            id={`${id}--${AutoInputMode.Custom}`}
            testID={`${testID}--${AutoInputMode.Custom}`}
            titleText="I want to specify my own value"
            value={AutoInputMode.Custom}
            onClick={onChangeMode}
            ref={radioButtonCustomRef}
          >
            Custom
          </SelectGroupOption>
        </SelectGroup>
      </div>
      {mode === AutoInputMode.Custom && (
        <div
          className="auto-input--input"
          data-testid={`${testID}--input`}
          id={`${id}--input`}
        >
          {inputComponent}
        </div>
      )}
    </div>
  )
}
