// Libraries
import {useRef} from 'react'
import {marked} from 'marked'

// Components
import {RightClick, RightClickDivider, RightClickMenuItem} from '../'

// Types
import {ComponentColor} from '../../../Types'

// Notes
import RightClickReadme from './RightClick.md?raw'

export default {title: 'Components/RightClick/Base'}

export const _RightClick = () => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const rightClickMenuRef = useRef<HTMLUListElement>(null)

  const logRef = (): void => {
    console.log(rightClickMenuRef.current)
  }

  return (
    <div className="story--example">
      <div className="clickTestZone" ref={triggerRef}>
        Right Click Me
      </div>
      <RightClick
        ref={rightClickMenuRef}
        triggerRef={triggerRef}
        disabled={false}
        className={''}
        style={{}}
        color={(ComponentColor as Record<string, any>)['Primary']}
      >
        <RightClickMenuItem
          onClick={value => {
            alert(value)
          }}
          value="Cabbage"
        >
          Cabbage
        </RightClickMenuItem>
        <RightClickMenuItem
          onClick={value => {
            alert(value)
          }}
          value="Carrot"
        >
          Carrot
        </RightClickMenuItem>
        <RightClickDivider />
        <RightClickMenuItem
          onClick={value => {
            alert(value)
          }}
          value="Turnip"
        >
          Turnip
        </RightClickMenuItem>
        <RightClickMenuItem
          onClick={value => {
            alert(value)
          }}
          value="Radish"
          disabled={true}
        >
          Radish
        </RightClickMenuItem>
        <RightClickMenuItem onClick={logRef} value="Turnip">
          Log Ref
        </RightClickMenuItem>
      </RightClick>
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
