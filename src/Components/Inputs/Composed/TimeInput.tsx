// Libraries
import {ChangeEvent, FunctionComponent, Ref} from 'react'

// Components
import {Input, InputProps} from '../Input'
import {ButtonGroup} from '../../Button/Composed/ButtonGroup'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownButton,
} from '../../Dropdowns'

// Types
import {
  Omit,
  ComponentSize,
  ComponentStatus,
  InputType,
  AutoComplete,
} from '../../../Types'

const TIME_INPUT_DROPDOWN_SIZE = {
  xs: '98px',
  sm: '100px',
  md: '115px',
  lg: '130px',
}

const TIME_INPUT_DEFAULT_UNITS = ['s', 'm', 'h', 'd', 'w', 'mo']

export interface TimeInputProps extends Omit<
  InputProps,
  | 'type'
  | 'checked'
  | 'spellCheck'
  | 'step'
  | 'min'
  | 'max'
  | 'pattern'
  | 'onChange'
  | 'autocomplete'
  | 'monospace'
> {
  /** Callback for input changes */
  onChange: (value: string, e?: ChangeEvent<HTMLInputElement>) => void
  /** Currently selected unit */
  selectedUnit: string
  /** Available units (in Dropdown) */
  units?: string[]
  /** Callback for when time unit is changed */
  onSelectUnit: (unit: string) => void
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLInputElement>
}

export const TimeInput: FunctionComponent<TimeInputProps> = ({
  id,
  icon,
  size = ComponentSize.Small,
  name = '',
  units = TIME_INPUT_DEFAULT_UNITS,
  style = {width: '100%'},
  value = '',
  status = ComponentStatus.Default,
  onBlur,
  testID = 'time-input',
  onFocus,
  onKeyUp,
  required = false,
  tabIndex,
  onChange,
  maxLength,
  titleText = '',
  className,
  autoFocus = false,
  onKeyDown,
  inputStyle,
  placeholder = '',
  onSelectUnit,
  containerRef,
  selectedUnit,
  disabledTitleText = 'This input is disabled',
  ref,
}) => {
  const numbersOnly = (value: string): string => {
    return value.replace(/[\D]+/g, '')
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const timeValue = numbersOnly(e.target.value)
    onChange(timeValue, e)
  }

  const dropdownStyle = {
    flex: `0 0 ${TIME_INPUT_DROPDOWN_SIZE[size]}`,
    width: TIME_INPUT_DROPDOWN_SIZE[size],
  }

  const dropdownStatus =
    status === ComponentStatus.Disabled || status === ComponentStatus.Loading
      ? ComponentStatus.Disabled
      : ComponentStatus.Default

  return (
    <ButtonGroup style={style} testID={`${testID}--container`}>
      <Input
        id={id}
        ref={ref}
        icon={icon}
        type={InputType.Text}
        size={size}
        name={name}
        style={{flex: '1 0 0'}}
        value={numbersOnly(`${value}`)}
        status={status}
        onBlur={onBlur}
        testID={testID}
        onFocus={onFocus}
        onKeyUp={onKeyUp}
        required={required}
        tabIndex={tabIndex}
        onChange={handleInputChange}
        maxLength={maxLength}
        monospace={true}
        titleText={titleText}
        className={className}
        autoFocus={autoFocus}
        onKeyDown={onKeyDown}
        spellCheck={false}
        inputStyle={inputStyle}
        placeholder={placeholder}
        autocomplete={AutoComplete.Off}
        containerRef={containerRef}
        disabledTitleText={disabledTitleText}
      />
      <Dropdown
        style={dropdownStyle}
        testID={`${testID}--dropdown`}
        button={(active, onClick) => (
          <DropdownButton
            active={active}
            size={size}
            onClick={onClick}
            status={dropdownStatus}
            testID={`${testID}--dropdown-button`}
          >
            {`${selectedUnit}`}
          </DropdownButton>
        )}
        menu={onCollapse => (
          <TimeInputMenu
            testID={testID}
            onCollapse={onCollapse}
            selectedUnit={selectedUnit}
            onSelect={onSelectUnit}
            units={units}
          />
        )}
      />
    </ButtonGroup>
  )
}

interface TimeInputMenuProps {
  testID: string
  onCollapse?: () => void
  selectedUnit: string
  onSelect: (unit: string) => void
  units: string[]
}

const TimeInputMenu: FunctionComponent<TimeInputMenuProps> = ({
  testID,
  onCollapse,
  selectedUnit,
  onSelect,
  units,
}) => {
  return (
    <DropdownMenu onCollapse={onCollapse} testID={`${testID}--dropdown-menu`}>
      {units.map(unit => (
        <DropdownItem
          testID={`${testID}--dropdown-item ${unit}`}
          key={unit}
          selected={unit === selectedUnit}
          value={unit}
          onClick={onSelect}
        >
          {unit}
        </DropdownItem>
      ))}
    </DropdownMenu>
  )
}
