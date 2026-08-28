// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {NavMenu, NavMenuItem, NavMenuSubItem} from '../'
import {Icon} from '../../Icon'

// Types
import {IconFont} from '../../../Types'

// Notes
import NavMenuReadme from './NavMenu.md?raw'
import NavMenuItemReadme from './NavMenuItem.md?raw'
import NavMenuSubItemReadme from './NavMenuSubItem.md?raw'

export default {title: 'Components/Navigation/NavMenu'}

export const _NavMenu = () => {
  const navMenuRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(navMenuRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <NavMenu ref={navMenuRef}>
        <NavMenuItem
          titleLink={className => (
            <a className={className} href="#">
              {'First Item'}
            </a>
          )}
          iconLink={className => (
            <a className={className} href="#">
              <Icon glyph={(IconFont as Record<string, any>)['Disks']} />
            </a>
          )}
          active={true}
        />
        <NavMenuItem
          titleLink={className => (
            <a className={className} href="#">
              {'Second Item'}
            </a>
          )}
          iconLink={className => (
            <a className={className} href="#">
              <Icon glyph={(IconFont as Record<string, any>)['Zap']} />
            </a>
          )}
          active={false}
        >
          <NavMenuSubItem
            titleLink={className => (
              <a className={className} href="#">
                First Sub-Item
              </a>
            )}
            active={false}
          />
          <NavMenuSubItem
            titleLink={className => (
              <a className={className} href="#">
                Second Sub-Item
              </a>
            )}
            active={false}
          />
          <NavMenuSubItem
            titleLink={className => (
              <a className={className} href="#">
                Third Sub-Item
              </a>
            )}
            active={false}
          />
        </NavMenuItem>
        <NavMenuItem
          titleLink={className => (
            <a className={className} href="#">
              {'Third Item'}
            </a>
          )}
          iconLink={className => (
            <a className={className} href="#">
              <Icon glyph={(IconFont as Record<string, any>)['Group']} />
            </a>
          )}
          active={false}
        />
      </NavMenu>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_NavMenu.story = {
  name: 'NavMenu',

  parameters: {
    readme: {
      content: marked.parse(NavMenuReadme),
    },
  },
}

export const _NavMenuItem = () => {
  const navMenuRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(navMenuRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <NavMenuItem
        ref={navMenuRef}
        titleLink={className => (
          <a className={className} href="#">
            {'Item Title'}
          </a>
        )}
        iconLink={className => (
          <a className={className} href="#">
            <Icon glyph={(IconFont as Record<string, any>)['Star']} />
          </a>
        )}
        active={false}
      >
        <NavMenuSubItem
          titleLink={className => (
            <a className={className} href="#">
              First Sub-Item
            </a>
          )}
          active={false}
        />
        <NavMenuSubItem
          titleLink={className => (
            <a className={className} href="#">
              Second Sub-Item
            </a>
          )}
          active={false}
        />
        <NavMenuSubItem
          titleLink={className => (
            <a className={className} href="#">
              Third Sub-Item
            </a>
          )}
          active={false}
        />
      </NavMenuItem>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_NavMenuItem.story = {
  name: 'NavMenuItem',

  parameters: {
    readme: {
      content: marked.parse(NavMenuItemReadme),
    },
  },
}

export const _NavMenuSubItem = () => (
  <div className="story--example">
    <NavMenuSubItem
      titleLink={className => (
        <a className={className} href="#">
          {'Sub Item Title'}
        </a>
      )}
      active={false}
    />
  </div>
)

_NavMenuSubItem.story = {
  name: 'NavMenuSubItem',

  parameters: {
    readme: {
      content: marked.parse(NavMenuSubItemReadme),
    },
  },
}
