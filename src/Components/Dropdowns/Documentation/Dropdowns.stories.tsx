// Libraries
import {createRef, useState} from 'react'
import {marked} from 'marked'

// Components
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownItemEmpty,
  DropdownLinkItem,
  DropdownMenu,
} from '../'
import {SelectDropdown} from '../Composed/SelectDropdown'
import {MultiSelectDropdown} from '../Composed/MultiSelectDropdown'
import {ColorPickerPreview} from '../../ColorPicker/ColorPickerPreview'

import {TypeAheadDropDown, SelectableItem} from '../Composed/TypeAheadDropDown'

import {CreatableTypeAheadDropdown} from '../Composed/CreatableTypeAheadDropdown'

// Types
import {
  ComponentColor,
  DropdownMenuTheme,
  ComponentSize,
  ComponentStatus,
  IconFont,
  DropdownItemType,
} from '../../../Types'

// Notes
import DropdownReadme from './Dropdown.md?raw'
import DropdownButtonReadme from './DropdownButton.md?raw'
import DropdownDividerReadme from './DropdownDivider.md?raw'
import DropdownItemReadme from './DropdownItem.md?raw'
import DropdownItemEmptyReadme from './DropdownItemEmpty.md?raw'
import DropdownLinkItemReadme from './DropdownLinkItem.md?raw'
import DropdownMenuReadme from './DropdownMenu.md?raw'
import SelectDropdownReadme from './SelectDropdown.md?raw'
import TypeAheadDropdownReadme from './TypeAheadDropdown.md?raw'
import CreatableTypeAheadDropdownReadme from './CreatableTypeAheadDropdown.md?raw'
import MultiSelectDropdownReadme from './MultiSelectDropdown.md?raw'
import {FlexBox} from '../../FlexBox'

export default {title: 'Components/Dropdowns/Family'}

const defaultDropdownStyle = {width: '250px', marginRight: '45px'}

export const _Dropdown = () => {
  const dropdownRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(dropdownRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <Dropdown
        ref={dropdownRef}
        style={defaultDropdownStyle}
        button={(active, onClick) => (
          <DropdownButton
            active={active}
            onClick={onClick}
            status={(ComponentStatus as Record<string, any>)['Default']}
          >
            {'I am a Dropdown!'}
          </DropdownButton>
        )}
        menu={onCollapse => (
          <DropdownMenu onCollapse={onCollapse}>
            <div className="mockComponent dropdownContents">
              <span>Menu Contents</span>
            </div>
          </DropdownMenu>
        )}
        dropUp={false}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Refs</button>
      </div>
    </div>
  )
}

_Dropdown.story = {
  parameters: {
    readme: {
      content: marked.parse(DropdownReadme),
    },
  },
}

export const _DropdownButton = () => {
  const dropdownButtonRef = createRef<HTMLButtonElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(dropdownButtonRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
      <div style={{width: '200px'}}>
        <DropdownButton
          ref={dropdownButtonRef}
          onClick={() => {
            // do nothing
          }}
          status={(ComponentStatus as Record<string, any>)['Default']}
          color={(ComponentColor as Record<string, any>)['Primary']}
          size={(ComponentSize as Record<string, any>)['Small']}
          active={false}
          icon={(IconFont as Record<string, any>)['BarChart']}
          trailingIcon={(IconFont as Record<string, any>)['CaretDown_New']}
          title={'Hover Title Text'}
          disabledTitleText={'Disabled Text'}
        >
          {'I am a button!'}
        </DropdownButton>
      </div>
    </div>
  )
}

_DropdownButton.story = {
  name: 'DropdownButton',

  parameters: {
    readme: {
      content: marked.parse(DropdownButtonReadme),
    },
  },
}

export const _DropdownDivider = () => {
  const dropdownDividerRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(dropdownDividerRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <DropdownDivider text={'Divider Text'} ref={dropdownDividerRef} />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_DropdownDivider.story = {
  name: 'DropdownDivider',

  parameters: {
    readme: {
      content: marked.parse(DropdownDividerReadme),
    },
  },
}

export const _DropdownItem = () => {
  const dropdownItemRef = createRef<HTMLButtonElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(dropdownItemRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <DropdownItem
        ref={dropdownItemRef}
        value={'value'}
        selected={false}
        wrapText={false}
        onClick={value => {
          alert(`onClick returned: ${value}`)
        }}
        type={(DropdownItemType as Record<string, any>)['None']}
        disabled={false}
      >
        {'I am a dropdown item!'}
      </DropdownItem>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_DropdownItem.story = {
  name: 'DropdownItem',

  parameters: {
    readme: {
      content: marked.parse(DropdownItemReadme),
    },
  },
}

export const _DropdownItemEmpty = () => {
  const dropdownItemEmptyRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(dropdownItemEmptyRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <DropdownItemEmpty wrapText={false} ref={dropdownItemEmptyRef}>
        {'No items to display'}
      </DropdownItemEmpty>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_DropdownItemEmpty.story = {
  name: 'DropdownItemEmpty',

  parameters: {
    readme: {
      content: marked.parse(DropdownItemEmptyReadme),
    },
  },
}

export const _DropdownLinkItem = () => {
  const dropdownLinkItemRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(dropdownLinkItemRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <DropdownLinkItem
        ref={dropdownLinkItemRef}
        selected={false}
        wrapText={false}
        type={(DropdownItemType as Record<string, any>)['None']}
        disabled={false}
      >
        <a href={'http://www.influxdata.com'} target="_blank">
          {'Example Link'}
        </a>
      </DropdownLinkItem>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_DropdownLinkItem.story = {
  name: 'DropdownLinkItem',

  parameters: {
    readme: {
      content: marked.parse(DropdownLinkItemReadme),
    },
  },
}

interface ExampleDropdownItem {
  type: 'item' | 'divider'
  text: string
}

export const _DropdownMenu = () => {
  const dropdownMenuRef = createRef<HTMLDivElement>()
  const dropdownMenuContentsRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log('DropdownMenu', dropdownMenuRef.current)
    console.log('DropdownMenuContents', dropdownMenuContentsRef.current)
    /* eslint-enable */
  }

  const exampleItems: ExampleDropdownItem[] = [
    {
      type: 'divider',
      text: 'Domestic Fruits',
    },
    {
      type: 'item',
      text: 'Banana',
    },
    {
      type: 'item',
      text: 'Kiwi',
    },
    {
      type: 'item',
      text: 'Lemon',
    },
    {
      type: 'item',
      text: 'Apple',
    },
    {
      type: 'item',
      text: 'Orange',
    },
    {
      type: 'item',
      text: 'Grapefruit',
    },
    {
      type: 'item',
      text: 'Pear',
    },
    {
      type: 'divider',
      text: 'Imported Fruits',
    },
    {
      type: 'item',
      text: 'Dragonfruit',
    },
    {
      type: 'item',
      text: 'Yuzu',
    },
    {
      type: 'item',
      text: 'Mango',
    },
    {
      type: 'item',
      text: 'Lychee',
    },
    {
      type: 'item',
      text: 'Passionfruit',
    },
    {
      type: 'item',
      text: 'Guava',
    },
    {
      type: 'divider',
      text: 'Testing Only',
    },
    {
      type: 'item',
      text: 'This dropdown item text is much longer to test text wrapping',
    },
  ]

  const selectedItems = ['Yuzu', 'Banana']
  const disabledItems = ['Passionfruit']

  const menuStyle = {width: '250px'}

  return (
    <div className="story--example">
      <DropdownMenu
        ref={dropdownMenuRef}
        style={menuStyle}
        contentsRef={dropdownMenuContentsRef}
        theme={(DropdownMenuTheme as Record<string, any>)['Onyx']}
        maxHeight={250}
        noScrollX={true}
        noScrollY={false}
        scrollToSelected={true}
      >
        {exampleItems.map(item => {
          if (item.type === 'divider') {
            return <DropdownDivider key={item.text} text={item.text} />
          }

          return (
            <DropdownItem
              key={item.text}
              wrapText={false}
              value={item.text}
              selected={selectedItems.includes(item.text)}
              disabled={disabledItems.includes(item.text)}
              type={(DropdownItemType as Record<string, any>)['None']}
            >
              {item.text}
            </DropdownItem>
          )
        })}
      </DropdownMenu>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_DropdownMenu.story = {
  name: 'DropdownMenu',

  parameters: {
    readme: {
      content: marked.parse(DropdownMenuReadme),
    },
  },
}

export const _SelectDropdown = () => {
  const selectDropdownOptions = [
    '---Vegetables',
    'Celery',
    'Carrot',
    'Potato',
    'Corn',
    'Bok Choy',
    '---Fruits',
    'Apple',
    'Peach',
    'Tomato',
    'Grape',
    'Orange',
    'Lemon',
    'Watermelon',
    'Kiwi',
    'Banana',
    'Strawberry',
  ]

  const selectDropdownRef = createRef<HTMLDivElement>()
  const [selected, changeSelected] = useState('Celery')

  const logRef = (): void => {
    /* eslint-disable */
    console.log(selectDropdownRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <SelectDropdown
        ref={selectDropdownRef}
        style={defaultDropdownStyle}
        menuMaxHeight={250}
        dropUp={false}
        indicator={(DropdownItemType as Record<string, any>)['Dot']}
        menuTheme={(DropdownMenuTheme as Record<string, any>)['Onyx']}
        onSelect={changeSelected}
        buttonStatus={(ComponentStatus as Record<string, any>)['Default']}
        buttonColor={(ComponentColor as Record<string, any>)['Primary']}
        buttonSize={(ComponentSize as Record<string, any>)['Small']}
        buttonIcon={(IconFont as Record<string, any>)['BarChart']}
        selectedOption={selected}
        options={selectDropdownOptions}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_SelectDropdown.story = {
  name: 'SelectDropdown',

  parameters: {
    readme: {
      content: marked.parse(SelectDropdownReadme),
    },
  },
}

export const TypeAheadDropdown = () => {
  const selectDropdownOptions = [
    {name: 'Apple', id: '0'},
    {name: 'Peach', id: '5'},
    {name: 'Tomato', id: '10'},
    {name: 'Grape', id: '20'},
    {name: 'Orange', id: '40'},
    {name: 'Lemon', id: '30'},
    {name: 'Watermelon', id: '70'},
    {name: 'Kiwi', id: '8'},
    {name: 'Banana', id: '9'},
    {name: 'Strawberry', id: '1099'},
    {name: 'Strawberry1', id: '123412'},
    {name: 'Strawberry2', id: '2'},
    {name: 'Strawberry3', id: '109'},
    {name: 'Strawberry4', id: '19'},
    {name: 'Strawberry5', id: '1'},
    {name: 'blueberry', id: 'blueberry113'},
    {id: '1234.3.33'},
  ]

  const oneHundredThousandItems = new Array(100000)
  for (let i = 0; i < 100000; i++) {
    const value = (i + 1).toString()
    oneHundredThousandItems[i] = {
      name: value,
      id: value,
    }
  }

  const onSelect = (item: SelectableItem | null) => {
    /* eslint-disable */
    console.log('ooh! selected item: ', item)
    /* eslint-enable */
  }

  const selectedOption = {name: 'Lemon', id: '30'}

  // putting sortNames as a boolean doesn't work because it is a prop,
  // not a state, so it doesn't make the items sort (or unsort)
  // because it happens once at instantiation
  return (
    <div className="story--example">
      <span> with a pre-selected item:</span>
      <TypeAheadDropDown
        style={defaultDropdownStyle}
        onSelect={onSelect}
        testIdSuffix="fooTest"
        items={selectDropdownOptions}
        menuTestID={'menuTest'}
        status={(ComponentStatus as Record<string, any>)['Default']}
        itemTestIdPrefix={'my-prefix'}
        defaultNameText={'default empty name here'}
        menuTheme={(DropdownMenuTheme as Record<string, any>)['Onyx']}
        selectedOption={selectedOption}
        sortNames={true}
      />

      <span> without a pre-selected item:</span>
      <TypeAheadDropDown
        style={defaultDropdownStyle}
        onSelect={onSelect}
        testIdSuffix="fooTest"
        items={selectDropdownOptions}
        menuTestID={'menuTest'}
        itemTestIdPrefix={'my-prefix'}
        defaultNameText={'default empty name here'}
        status={(ComponentStatus as Record<string, any>)['Default']}
        menuTheme={(DropdownMenuTheme as Record<string, any>)['Onyx']}
        sortNames={true}
      />

      <span> Stress test with 100,000 items:</span>
      <TypeAheadDropDown
        style={defaultDropdownStyle}
        onSelect={onSelect}
        testIdSuffix="fooTest"
        items={oneHundredThousandItems}
        menuTestID={'menuTest'}
        itemTestIdPrefix={'my-prefix'}
        defaultNameText={'default empty name here'}
        status={(ComponentStatus as Record<string, any>)['Default']}
        menuTheme={(DropdownMenuTheme as Record<string, any>)['Onyx']}
        sortNames={true}
      />
    </div>
  )
}

TypeAheadDropdown.story = {
  name: 'TypeAheadDropdown',

  parameters: {
    readme: {
      content: marked.parse(TypeAheadDropdownReadme),
    },
  },
}

export const _CreatableTypeAheadDropdown = () => {
  const defaultDropdownOptions = [
    'Celery',
    'Carrot',
    'Potato',
    'Onion',
    'Tomato',
    'Spinach',
  ]
  const [selected, changeSelected] = useState(defaultDropdownOptions[1])
  const defaultColorOptions = [
    '#DC4E58',
    '#FFB94A',
    '#2FA74D',
    '#0098F0',
    '#8E1FC3',
  ]
  const [selectedColor, changeSelectedColor] = useState(defaultColorOptions[1])

  const creatableTypeAheadDropdownReadmeRef = createRef<HTMLDivElement>()
  const logRef = (): void => {
    /* eslint-disable */
    console.log(creatableTypeAheadDropdownReadmeRef.current)
    /* eslint-enable */
  }
  return (
    <div className="story--example">
      <CreatableTypeAheadDropdown
        ref={creatableTypeAheadDropdownReadmeRef}
        style={defaultDropdownStyle}
        options={defaultDropdownOptions}
        selectedOption={selected}
        onSelect={changeSelected}
        placeholder={'Placeholder Text'}
        inputStatus={(ComponentStatus as Record<string, any>)['Default']}
        inputSize={(ComponentSize as Record<string, any>)['Small']}
        inputIcon={(IconFont as Record<string, any>)['None']}
        menuTheme={(DropdownMenuTheme as Record<string, any>)['Onyx']}
        menuMaxHeight={250}
      />
      <span>With customized dropdown item: </span>
      <CreatableTypeAheadDropdown
        ref={creatableTypeAheadDropdownReadmeRef}
        style={defaultDropdownStyle}
        options={defaultColorOptions}
        selectedOption={selectedColor}
        onSelect={changeSelectedColor}
        placeholder={'Placeholder Text'}
        inputStatus={(ComponentStatus as Record<string, any>)['Default']}
        inputSize={(ComponentSize as Record<string, any>)['Small']}
        inputIcon={(IconFont as Record<string, any>)['None']}
        inputColorPreviewOn={true}
        menuTheme={(DropdownMenuTheme as Record<string, any>)['Onyx']}
        menuMaxHeight={250}
        customizedDropdownItem={displayText => (
          <FlexBox>
            <ColorPickerPreview color={displayText} />
            <div style={{paddingLeft: '26px'}}>{displayText}</div>
          </FlexBox>
        )}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_CreatableTypeAheadDropdown.story = {
  name: 'CreatableTypeAheadDropdown',

  parameters: {
    readme: {
      content: marked.parse(CreatableTypeAheadDropdownReadme),
    },
  },
}

export const MultiSelectdropdown = () => {
  const defaultMultiSelectOptions = [
    'Celery',
    'Carrot',
    'Potato',
    '---',
    'Onion',
    'Tomato',
    'Spinach',
  ]
  const [selectedOptions, setSelectedOptions] = useState(['Celery', 'Onion'])

  const multiSelectDropdownRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(multiSelectDropdownRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <MultiSelectDropdown
        ref={multiSelectDropdownRef}
        style={defaultDropdownStyle}
        menuMaxHeight={250}
        dropUp={false}
        indicator={(DropdownItemType as Record<string, any>)['Checkbox']}
        menuTheme={(DropdownMenuTheme as Record<string, any>)['Onyx']}
        onSelect={option => {
          if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(x => x !== option))
          } else {
            setSelectedOptions([...selectedOptions, option])
          }
        }}
        buttonStatus={(ComponentStatus as Record<string, any>)['Default']}
        buttonColor={(ComponentColor as Record<string, any>)['Primary']}
        buttonSize={(ComponentSize as Record<string, any>)['Small']}
        buttonIcon={(IconFont as Record<string, any>)['BarChart']}
        emptyText={'None selected'}
        selectedOptions={selectedOptions}
        options={defaultMultiSelectOptions}
        isSearchable={true}
        searchbarInputPlaceholder={'Search'}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

MultiSelectdropdown.story = {
  name: 'MultiSelectdropdown',

  parameters: {
    readme: {
      content: marked.parse(MultiSelectDropdownReadme),
    },
  },
}

export const Collage = () => {
  const selectDropdownOptions = [
    '---Vegetables',
    'Celery',
    'Carrot',
    'Potato',
    'Corn',
    'Bok Choy',
  ]

  const selectDropdownSelectedOption = 'Celery'

  return (
    <div className="story--example">
      <div>
        <table className="two-axis-table two-axis-table--spaced">
          <tbody>
            <tr>
              <td>
                <code>Size</code>
              </td>
              {[
                {size: ComponentSize.ExtraSmall, children: 'ExtraSmall'},
                {size: ComponentSize.Small, children: 'Small'},
                {size: ComponentSize.Medium, children: 'Medium'},
                {size: ComponentSize.Large, children: 'Large'},
              ].map((props, i) => (
                <td key={i}>
                  <Dropdown
                    button={(active, onClick) => (
                      <DropdownButton
                        active={active}
                        onClick={onClick}
                        {...props}
                      />
                    )}
                    menu={onCollapse => (
                      <DropdownMenu onCollapse={onCollapse}>
                        <div className="mockComponent dropdownContents">
                          <span>Menu Contents</span>
                        </div>
                      </DropdownMenu>
                    )}
                  />
                </td>
              ))}
            </tr>
            <tr>
              <td>
                <code>Color</code>
              </td>
              {[
                {color: ComponentColor.Default},
                {color: ComponentColor.Primary},
                {color: ComponentColor.Tertiary},
                {color: ComponentColor.Danger},
              ].map((props, i) => (
                <td key={i} style={{width: '200px'}}>
                  <Dropdown
                    button={(active, onClick) => (
                      <DropdownButton
                        active={active}
                        onClick={onClick}
                        {...props}
                      >
                        {props.color.toString()}
                      </DropdownButton>
                    )}
                    menu={onCollapse => (
                      <DropdownMenu onCollapse={onCollapse}>
                        <div className="mockComponent dropdownContents">
                          <span>Menu Contents</span>
                        </div>
                      </DropdownMenu>
                    )}
                    {...props}
                  />
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
                <td key={i} style={{width: '200px'}}>
                  <Dropdown
                    button={(active, onClick) => (
                      <DropdownButton
                        active={active}
                        onClick={onClick}
                        {...props}
                      >
                        {props.status.toString()}
                      </DropdownButton>
                    )}
                    menu={onCollapse => (
                      <DropdownMenu onCollapse={onCollapse}>
                        <div className="mockComponent dropdownContents">
                          <span>Menu Contents</span>
                        </div>
                      </DropdownMenu>
                    )}
                    {...props}
                  />
                </td>
              ))}
            </tr>

            <tr>
              <td>
                <code>Select theme</code>
              </td>
              {[
                {menuTheme: DropdownMenuTheme.Onyx},
                {menuTheme: DropdownMenuTheme.Amethyst},
                {menuTheme: DropdownMenuTheme.Malachite},
                {menuTheme: DropdownMenuTheme.Sapphire},
              ].map((props, i) => (
                <td key={i}>
                  <SelectDropdown
                    menuTheme={props.menuTheme}
                    onSelect={option => {
                      alert(option)
                    }}
                    buttonColor={ComponentColor.Primary}
                    buttonSize={ComponentSize.Small}
                    buttonIcon={IconFont.BarChart_New}
                    selectedOption={selectDropdownSelectedOption}
                    options={selectDropdownOptions}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

Collage.story = {
  parameters: {
    readme: {
      content: marked.parse(DropdownReadme),
    },
  },
}
