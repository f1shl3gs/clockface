// Libraries
import {CSSProperties, createRef} from 'react'
import {marked} from 'marked'

// Components
import {Icon} from '../'
import {Bullet} from '../'

// Types
import {IconFont, ComponentSize, InfluxColors} from '../../../Types'

// Notes
import IconReadme from './Icon.md?raw'
import BulletReadme from './Bullet.md?raw'

export default {title: 'Components/Icon/Base'}

export const BaseIcon = () => {
  const iconStyleExample: CSSProperties = {color: '#6BDFFF', fontSize: '60px'}
  const iconRef = createRef<HTMLSpanElement>()

  const logIconRef = (): void => {
    console.log(iconRef.current)
  }

  return (
    <div className="story--example">
      <Icon
        ref={iconRef}
        glyph={(IconFont as Record<string, any>)['Bell']}
        style={iconStyleExample}
      />
      <div className="story--test-buttons">
        <button onClick={logIconRef}>Log Ref</button>
      </div>
    </div>
  )
}

BaseIcon.story = {
  parameters: {
    readme: {
      content: marked.parse(IconReadme),
    },
  },
}

export const _Bullet = () => {
  const bulletRef = createRef<HTMLSpanElement>()

  const logbulletRef = (): void => {
    console.log(bulletRef.current)
  }

  return (
    <div className="story--example">
      <div className="story-spacer" style={{width: '100px'}}>
        <Bullet
          ref={bulletRef}
          glyph={(IconFont as Record<string, any>)['Checkmark_New']}
          size={(ComponentSize as Record<string, any>)['Medium']}
          backgroundColor={(InfluxColors as Record<string, any>)['Pool']}
          color={(InfluxColors as Record<string, any>)['Raven']}
        />
        <Bullet
          ref={bulletRef}
          text={1}
          size={(ComponentSize as Record<string, any>)['Medium']}
          backgroundColor={(InfluxColors as Record<string, any>)['Pool']}
          color={(InfluxColors as Record<string, any>)['Raven']}
        />
      </div>
      <div className="story--test-buttons">
        <button onClick={logbulletRef}>Log Ref</button>
      </div>
    </div>
  )
}

_Bullet.story = {
  parameters: {
    readme: {
      content: marked.parse(BulletReadme),
    },
  },
}
