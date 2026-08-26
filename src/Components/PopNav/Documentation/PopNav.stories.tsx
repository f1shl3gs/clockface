// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {PopNav, PopNavRef} from '../index'

// Types
import {ComponentSize, Alignment, ComponentColor} from '../../../Types'

// Notes
import PopNavReadme from './PopNav.md?raw'

export default {title: 'Components/Navigation/PopNav'}

export const _PopNav = () => {
  const popNavRef = createRef<PopNavRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(popNavRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example top">
      <PopNav.PopNav
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
        <PopNav.Item
          titleLink={className => (
            <a className={className} href="#">
              First Item
            </a>
          )}
          active={false}
        />
        <PopNav.Item
          titleLink={className => (
            <a className={className} href="#">
              Second Item
            </a>
          )}
          active={false}
        />
        <PopNav.Item
          titleLink={className => (
            <a className={className} href="#">
              Third Item
            </a>
          )}
          active={false}
        />
      </PopNav.PopNav>
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

export const PopNavItem = () => (
  <div className="story--example">
    <PopNav.Item
      titleLink={className => (
        <a className={className} href="#">
          Menu Item
        </a>
      )}
      active={false}
    />
  </div>
)

PopNavItem.story = {
  name: 'PopNavItem',

  parameters: {
    readme: {
      content: marked.parse(PopNavReadme),
    },
  },
}
