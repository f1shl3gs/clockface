// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {PopNav, PopNavItem} from '../index'

// Types
import {ComponentSize, Alignment, ComponentColor} from '../../../Types'

// Notes
import PopNavReadme from './PopNav.md?raw'

export default {title: 'Components/Navigation/PopNav'}

export const _PopNav = () => {
  const popNavRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(popNavRef.current)
  }

  return (
    <div className="story--example top">
      <PopNav
        ref={popNavRef}
        size={(ComponentSize as Record<string, any>)['Small']}
        buttonColor={(ComponentColor as Record<string, any>)['none']}
        align={(Alignment as Record<string, any>)['Right']}
      >
        <div
          style={{
            margin: '0 16px',
          }}
        >
          <div
            style={{
              color: 'white',
            }}
          >
            Signed in as
          </div>
          <div>somewhatlongusername@yourdomain.com</div>
        </div>
        <PopNavItem
          titleLink={className => (
            <a className={className} href="#">
              First Item
            </a>
          )}
          active={false}
        />
        <PopNavItem
          titleLink={className => (
            <a className={className} href="#">
              Second Item
            </a>
          )}
          active={false}
        />
        <PopNavItem
          titleLink={className => (
            <a className={className} href="#">
              Third Item
            </a>
          )}
          active={false}
        />
      </PopNav>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_PopNav.story = {
  name: 'PopNav',

  parameters: {
    readme: {
      content: marked.parse(PopNavReadme),
    },
  },
}

export const _PopNavItem = () => (
  <div className="story--example">
    <PopNavItem
      titleLink={className => (
        <a className={className} href="#">
          Menu Item
        </a>
      )}
      active={false}
    />
  </div>
)

_PopNavItem.story = {
  name: 'PopNavItem',

  parameters: {
    readme: {
      content: marked.parse(PopNavReadme),
    },
  },
}
