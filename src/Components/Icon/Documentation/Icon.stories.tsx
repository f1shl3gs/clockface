// Libraries
import {CSSProperties, RefObject, createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, object, number} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {Icon, IconRef} from '../'
import {Bullet, BulletRef} from '../'

// Types
import {IconFont, ComponentSize, InfluxColors} from '../../../Types'

// Notes
import IconReadme from './Icon.md'
import BulletReadme from './Bullet.md'

const iconBaseStories = storiesOf('Components/Icon/Base', module).addDecorator(
  withKnobs
)
const iconComposedStories = storiesOf(
  'Components/Icon/Composed',
  module
).addDecorator(withKnobs)

iconBaseStories.add(
  'Base Icon',
  () => {
    const iconStyleExample: CSSProperties = {color: '#6BDFFF', fontSize: '60px'}
    const iconRef: RefObject<IconRef | null> = createRef()

    const logIconRef = (): void => {
      /* eslint-disable */
      console.log(iconRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Icon
          ref={iconRef}
          glyph={
            (IconFont as Record<string, any>)[
              select('glyph', mapEnumKeys(IconFont), 'Bell')
            ]
          }
          style={object('style', iconStyleExample)}
        />
        <div className="story--test-buttons">
          <button onClick={logIconRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(IconReadme),
    },
  }
)

iconComposedStories.add(
  'Bullet',
  () => {
    const bulletRef: RefObject<BulletRef | null> = createRef()

    const logbulletRef = (): void => {
      /* eslint-disable */
      console.log(bulletRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story-spacer" style={{width: '100px'}}>
          <Bullet
            ref={bulletRef}
            glyph={
              (IconFont as Record<string, any>)[
                select('glyph', mapEnumKeys(IconFont), 'Checkmark_New')
              ]
            }
            size={
              (ComponentSize as Record<string, any>)[
                select('size', mapEnumKeys(ComponentSize), 'Medium')
              ]
            }
            backgroundColor={
              (InfluxColors as Record<string, any>)[
                select('backgroundColor', mapEnumKeys(InfluxColors), 'Pool')
              ]
            }
            color={
              (InfluxColors as Record<string, any>)[
                select('color', mapEnumKeys(InfluxColors), 'Raven')
              ]
            }
          />
          <Bullet
            ref={bulletRef}
            text={number('number', 1)}
            size={
              (ComponentSize as Record<string, any>)[
                select('size', mapEnumKeys(ComponentSize), 'Medium')
              ]
            }
            backgroundColor={
              (InfluxColors as Record<string, any>)[
                select('backgroundColor', mapEnumKeys(InfluxColors), 'Pool')
              ]
            }
            color={
              (InfluxColors as Record<string, any>)[
                select('color', mapEnumKeys(InfluxColors), 'Raven')
              ]
            }
          />
        </div>
        <div className="story--test-buttons">
          <button onClick={logbulletRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(BulletReadme),
    },
  }
)
