// Libraries
import {MouseEvent, FunctionComponent, Ref} from 'react'

// Components
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
  DropdownButton,
} from '../'

// Constants
import {DROPDOWN_DIVIDER_SHORTCODE} from '../../../Constants'

// Types
import {
  ComponentColor,
  ComponentSize,
  IconFont,
  DropdownMenuTheme,
  DropdownItemType,
  ComponentStatus,
  StandardFunctionProps,
} from '../../../Types'

export interface SelectDropdownProps extends StandardFunctionProps {
  /** Text to render in button as currently selected option */
  selectedOption: string
  /** List of options to render in menu */
  options: string[]
  /** Fires when an option is clicked, used to update state */
  onSelect: (option: string) => void
  /** Optional status of button */
  buttonStatus?: ComponentStatus
  /** Optional color of button */
  buttonColor?: ComponentColor
  /** Optional size of button */
  buttonSize?: ComponentSize
  /** Optional icon to render in button */
  buttonIcon?: IconFont
  /** Optional choice of item indicator */
  indicator?: DropdownItemType
  /** Optional theme of menu */
  menuTheme?: DropdownMenuTheme
  /** Optional maximum pixel height menu */
  menuMaxHeight?: number
  /** Renders the menu element above the button instead of below */
  dropUp?: boolean
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const SelectDropdown: FunctionComponent<SelectDropdownProps> = ({
  id,
  style = {width: '100%'},
  testID = 'select-dropdown',
  dropUp = false,
  options,
  onSelect,
  className,
  menuTheme = DropdownMenuTheme.Onyx,
  buttonSize = ComponentSize.Small,
  buttonIcon,
  indicator = DropdownItemType.Dot,
  buttonColor = ComponentColor.Default,
  buttonStatus = ComponentStatus.Default,
  menuMaxHeight,
  selectedOption,
  ref,
}) => {
  const button = (
    active: boolean,
    onClick: (e?: MouseEvent<HTMLElement>) => void
  ) => (
    <DropdownButton
      active={active}
      onClick={onClick}
      status={buttonStatus}
      color={buttonColor}
      size={buttonSize}
      icon={buttonIcon}
    >
      {selectedOption}
    </DropdownButton>
  )

  const menu = (onCollapse?: () => void) => (
    <DropdownMenu
      theme={menuTheme}
      maxHeight={menuMaxHeight}
      onCollapse={onCollapse}
    >
      {options.map(o => {
        if (o === DROPDOWN_DIVIDER_SHORTCODE) {
          return <DropdownDivider key={o} />
        }

        if (o.includes(DROPDOWN_DIVIDER_SHORTCODE)) {
          const dividerText = o.replace(DROPDOWN_DIVIDER_SHORTCODE, '')
          return <DropdownDivider key={o} text={dividerText} />
        }

        return (
          <DropdownItem
            key={o}
            type={indicator}
            value={o}
            title={o}
            selected={o === selectedOption}
            onClick={onSelect}
          >
            {o}
          </DropdownItem>
        )
      })}
    </DropdownMenu>
  )

  return (
    <Dropdown
      id={id}
      ref={ref}
      style={style}
      testID={testID}
      dropUp={dropUp}
      className={className}
      button={button}
      menu={menu}
    />
  )
}
