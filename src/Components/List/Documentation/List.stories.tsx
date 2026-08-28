// Libraries
import {createRef, useRef, useState} from 'react'
import {marked} from 'marked'

// Components
import {
  List,
  ListDivider,
  ListEmptyState,
  ListIcon,
  ListIndicator,
  ListItem,
} from '../'
import {Popover} from '../../Popover'

// Types
import {
  ComponentColor,
  ComponentSize,
  IconFont,
  Appearance,
  InfluxColors,
  Gradients,
} from '../../../Types'

// Notes
import ListReadme from './List.md?raw'
import ListDividerReadme from './ListDivider.md?raw'
import ListItemReadme from './ListItem.md?raw'
import ListEmptyStateReadme from './ListEmptyState.md?raw'
import ListLinkElementReadme from './ListLinkElement.md?raw'
import ListPopoverReadme from './ListPopover.md?raw'

export default {title: 'Components/List/Family'}

const defaultListStyle = {width: '250px', height: '600px'}

interface ExampleDropdownItem {
  type: 'item' | 'divider'
  wrap: boolean
  text: string
  disabled: boolean
  backgroundColor?: InfluxColors
  gradient?: Gradients
  noClick?: boolean
  icon?: IconFont
  noIndicator?: boolean
}

const exampleItems: ExampleDropdownItem[] = [
  {
    type: 'divider',
    wrap: false,
    text: 'Domestic Fruits',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Banana',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Kiwi',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Lemon',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Lime',
    disabled: true,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Apple',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Orange',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Grapefruit',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Pear',
    disabled: false,
  },
  {
    type: 'divider',
    wrap: false,
    text: 'Imported Fruits',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Dragonfruit',
    disabled: false,
    backgroundColor: InfluxColors.Amethyst,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Yuzu',
    disabled: true,
    backgroundColor: InfluxColors.Thunder,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Mango',
    disabled: false,
    backgroundColor: InfluxColors.Tiger,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Lychee',
    disabled: false,
    backgroundColor: InfluxColors.Potassium,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Honeydew Melon',
    disabled: false,
    backgroundColor: InfluxColors.Honeydew,
  },
  {
    type: 'divider',
    wrap: false,
    text: 'Gradients',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'PolarExpress',
    disabled: false,
    gradient: Gradients.PolarExpress,
  },
  {
    type: 'item',
    wrap: false,
    text: 'PastryCafe',
    disabled: false,
    gradient: Gradients.PastryCafe,
  },
  {
    type: 'divider',
    wrap: false,
    text: '',
    disabled: false,
  },
  {
    type: 'item',
    wrap: true,
    text: 'This dropdown item text is much longer to test text wrapping',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Long text that will be truncated if it exceeds the width of the List',
    disabled: false,
  },
  {
    type: 'divider',
    wrap: false,
    text: 'Edge Casees',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Item without click handler',
    disabled: false,
    noClick: true,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Item with Icon',
    disabled: false,
    icon: IconFont.Chat,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Item with Icon + BackgroundColor',
    disabled: false,
    icon: IconFont.Chat,
    backgroundColor: InfluxColors.Pool,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Item with Icon + Gradient',
    disabled: false,
    icon: IconFont.Chat,
    gradient: Gradients.SavannaHeat,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Item without indicator',
    disabled: false,
    noIndicator: true,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Item without indicator + BackgroundColor',
    disabled: false,
    noIndicator: true,
    backgroundColor: InfluxColors.Star,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Item without indicator + Gradient',
    disabled: false,
    noIndicator: true,
    gradient: Gradients.NineteenEightyFour,
  },
]

export const _List = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Grapefruit')
  const listRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(listRef.current)
    /* eslint-enable */
  }

  const handleItemClick = (item: string): void => {
    setSelectedItem(item)
  }

  return (
    <div className="story--example">
      <List
        ref={listRef}
        style={defaultListStyle}
        gradient={(Gradients as Record<string, any>)['None']}
        backgroundColor={(InfluxColors as Record<string, any>)['Grey15']}
      >
        {exampleItems.map(item => {
          if (item.type === 'item') {
            return (
              <ListItem
                key={item.text}
                backgroundColor={item.backgroundColor}
                gradient={item.gradient}
                size={(ComponentSize as Record<string, any>)['Small']}
                value={item.text}
                selected={item.text === selectedItem}
                onClick={item.noClick ? undefined : handleItemClick}
                wrapText={item.wrap}
                disabled={item.disabled}
              >
                {item.icon && <ListIcon glyph={item.icon} />}
                {!item.noIndicator && !item.icon && (
                  <ListIndicator type={'checkbox'} />
                )}
                {item.text}
              </ListItem>
            )
          }

          return (
            <ListDivider
              key={item.text}
              text={item.text}
              size={(ComponentSize as Record<string, any>)['Small']}
            />
          )
        })}
      </List>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Refs</button>
      </div>
    </div>
  )
}

_List.story = {
  parameters: {
    readme: {
      content: marked.parse(ListReadme),
    },
  },
}

export const _ListDivider = () => {
  const dropdownDividerRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(dropdownDividerRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <ListDivider text={'Divider Text'} ref={dropdownDividerRef} />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_ListDivider.story = {
  name: 'ListDivider',

  parameters: {
    readme: {
      content: marked.parse(ListDividerReadme),
    },
  },
}

export const _ListItem = () => {
  const listItemRef = createRef<HTMLButtonElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(listItemRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <ListItem
        ref={listItemRef}
        value={'value'}
        selected={false}
        wrapText={false}
        onClick={value => {
          alert(`onClick returned: ${value}`)
        }}
        backgroundColor={InfluxColors.Pool}
        size={(ComponentSize as Record<string, any>)['Small']}
        disabled={false}
      >
        {'I am a dropdown item!'}
      </ListItem>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_ListItem.story = {
  name: 'ListItem',

  parameters: {
    readme: {
      content: marked.parse(ListItemReadme),
    },
  },
}

export const _ListEmptyState = () => {
  const listEmptyStateRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(listEmptyStateRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <ListEmptyState
        wrapText={false}
        size={(ComponentSize as Record<string, any>)['Small']}
        ref={listEmptyStateRef}
      >
        {'No items to display'}
      </ListEmptyState>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_ListEmptyState.story = {
  name: 'ListEmptyState',

  parameters: {
    readme: {
      content: marked.parse(ListEmptyStateReadme),
    },
  },
}

export const UsingLinkElementProp = () => {
  const linkElementRef = createRef<HTMLAnchorElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(linkElementRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <ListItem
        selected={false}
        wrapText={false}
        disabled={false}
        backgroundColor={InfluxColors.Star}
        size={(ComponentSize as Record<string, any>)['Small']}
        linkElement={
          <a
            href={'http://www.influxdata.com'}
            target="_blank"
            ref={linkElementRef}
          />
        }
      >
        <ListIndicator type={'checkbox'} />
        {'Example Link'}
      </ListItem>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

UsingLinkElementProp.story = {
  name: 'Using LinkElement Prop',

  parameters: {
    readme: {
      content: marked.parse(ListLinkElementReadme),
    },
  },
}

export const IconsIndicators = () => {
  const listItemRef = createRef<HTMLButtonElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(listItemRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example" style={{flexDirection: 'column'}}>
      <ListItem
        ref={listItemRef}
        value={'value'}
        selected={false}
        wrapText={false}
        onClick={value => {
          alert(`onClick returned: ${value}`)
        }}
        backgroundColor={InfluxColors.Pool}
        size={(ComponentSize as Record<string, any>)['Small']}
        disabled={false}
      >
        <ListIndicator type={'checkbox'} />
        {'I am a dropdown item!'}
        <ListIcon glyph={(IconFont as Record<string, any>)['Bell']} />
      </ListItem>
      <ListItem
        ref={listItemRef}
        value={'value'}
        selected={false}
        wrapText={false}
        onClick={value => {
          alert(`onClick returned: ${value}`)
        }}
        backgroundColor={InfluxColors.Pool}
        size={(ComponentSize as Record<string, any>)['Small']}
        disabled={false}
      >
        <ListIcon glyph={(IconFont as Record<string, any>)['Bell']} />
        {'I am a dropdown item!'}
        <ListIndicator type={'checkbox'} />
      </ListItem>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

IconsIndicators.story = {
  name: 'Icons & Indicators',

  parameters: {
    readme: {
      content: marked.parse(ListItemReadme),
    },
  },
}

type onHide = () => void | undefined

export const UsedWithAPopover = () => {
  const [turtleHat, setTurtleHat] = useState<string>('Detective Hat')
  const triggerRef = useRef<HTMLDivElement>(null)

  const handleToggleHat = (onHide: onHide) => (hat: string) => {
    if (onHide) {
      onHide()
    }
    setTurtleHat(hat)
  }

  const noop = (): void => {
    return
  }

  return (
    <div className="story--example">
      <div className="mockComponent mockButton" ref={triggerRef}>
        Pet Turtle
      </div>
      <Popover
        enableDefaultStyles={false}
        appearance={Appearance.Outline}
        color={ComponentColor.Primary}
        triggerRef={triggerRef}
        contents={onHide => (
          <List style={{width: '200px'}} backgroundColor={InfluxColors.White}>
            <ListDivider
              text="Actions"
              size={(ComponentSize as Record<string, any>)['Small']}
            />
            <ListItem
              value=""
              selected={false}
              wrapText={false}
              onClick={onHide}
              backgroundColor={InfluxColors.Pool}
              size={(ComponentSize as Record<string, any>)['Small']}
            >
              <ListIcon glyph={IconFont.Cube} />
              {'Put Turtle in Water'}
            </ListItem>
            <ListItem
              value=""
              selected={false}
              wrapText={false}
              onClick={onHide}
              backgroundColor={InfluxColors.Rainforest}
              size={(ComponentSize as Record<string, any>)['Small']}
            >
              <ListIcon glyph={IconFont.Pencil} />
              {'Feed Turtle'}
            </ListItem>
            <ListItem
              value=""
              selected={false}
              wrapText={false}
              onClick={onHide}
              backgroundColor={InfluxColors.Pineapple}
              size={(ComponentSize as Record<string, any>)['Small']}
            >
              <ListIcon glyph={IconFont.StarSmile} />
              {'Put Turtle Outside'}
            </ListItem>
            <ListItem
              value=""
              selected={false}
              wrapText={false}
              onClick={onHide}
              backgroundColor={InfluxColors.Star}
              size={(ComponentSize as Record<string, any>)['Small']}
            >
              <ListIcon glyph={IconFont.Pencil} />
              {'Teach Turtle a Trick'}
            </ListItem>
            <ListDivider
              text="Hat"
              size={(ComponentSize as Record<string, any>)['Small']}
            />
            <ListItem
              value="Detective Hat"
              selected={turtleHat === 'Detective Hat'}
              wrapText={false}
              onClick={handleToggleHat(onHide || noop)}
              size={(ComponentSize as Record<string, any>)['Small']}
            >
              <ListIndicator type={'checkbox'} />
              {'Detective Hat'}
            </ListItem>
            <ListItem
              value="Party Hat"
              selected={turtleHat === 'Party Hat'}
              wrapText={false}
              onClick={handleToggleHat(onHide || noop)}
              size={(ComponentSize as Record<string, any>)['Small']}
            >
              <ListIndicator type={'checkbox'} />
              {'Party Hat'}
            </ListItem>
            <ListItem
              value="10 Gallon Hat"
              selected={turtleHat === '10 Gallon Hat'}
              wrapText={false}
              onClick={handleToggleHat(onHide || noop)}
              size={(ComponentSize as Record<string, any>)['Small']}
            >
              <ListIndicator type={'checkbox'} />
              {'10 Gallon Hat'}
            </ListItem>
            <ListItem
              value="Half Eaten Grape"
              selected={turtleHat === 'Half Eaten Grape'}
              wrapText={false}
              onClick={handleToggleHat(onHide || noop)}
              size={(ComponentSize as Record<string, any>)['Small']}
            >
              <ListIndicator type={'checkbox'} />
              {'Half Eaten Grape'}
            </ListItem>
          </List>
        )}
      />
    </div>
  )
}

UsedWithAPopover.story = {
  name: 'Used with a Popover',

  parameters: {
    readme: {
      content: marked.parse(ListPopoverReadme),
    },
  },
}
