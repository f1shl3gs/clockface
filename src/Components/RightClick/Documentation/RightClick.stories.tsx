// Libraries
import {useRef} from 'react'
import {marked} from 'marked'

// Components
import {RightClick, RightClickRef} from '../'

// Types
import {ComponentColor} from '../../../Types'

// Notes
import RightClickReadme from './RightClick.md?raw'

export default {title: 'Components/RightClick/Base'}

export const _RightClick = () => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const rightClickMenuRef = useRef<RightClickRef>(null)

  const logRef = (): void => {
    /* eslint-disable */
    console.log(rightClickMenuRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="clickTestZone" ref={triggerRef}>
        Right Click Me
      </div>
      <RightClick.RightClick
        ref={rightClickMenuRef}
        triggerRef={triggerRef}
        disabled={false}
        className={''}
        style={{}}
        color={(ComponentColor as Record<string, any>)['Primary']}
      >
        <RightClick.MenuItem
          onClick={value => {
            alert(value)
          }}
          value="Cabbage"
        >
          Cabbage
        </RightClick.MenuItem>
        <RightClick.MenuItem
          onClick={value => {
            alert(value)
          }}
          value="Carrot"
        >
          Carrot
        </RightClick.MenuItem>
        <RightClick.Divider />
        <RightClick.MenuItem
          onClick={value => {
            alert(value)
          }}
          value="Turnip"
        >
          Turnip
        </RightClick.MenuItem>
        <RightClick.MenuItem
          onClick={value => {
            alert(value)
          }}
          value="Radish"
          disabled={true}
        >
          Radish
        </RightClick.MenuItem>
        <RightClick.MenuItem onClick={logRef} value="Turnip">
          Log Ref
        </RightClick.MenuItem>
      </RightClick.RightClick>
    </div>
  )
}

_RightClick.story = {
  name: 'RightClick',

  parameters: {
    readme: {
      content: marked.parse(RightClickReadme),
    },
  },
}
