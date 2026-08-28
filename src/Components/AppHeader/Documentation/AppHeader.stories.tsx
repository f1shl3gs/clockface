// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {AppHeader, AppHeaderLogo} from '../index'
import {PopNav, PopNavItem} from '../../PopNav/index'

// Types
import {
  ComponentSize,
  ComponentColor,
  FlexDirection,
  Alignment,
} from '../../../Types'

// Notes
import AppHeaderReadme from './AppHeader.md?raw'
import AppHeaderLogoReadme from './AppHeaderLogo.md?raw'
import {Button} from '../../Button/Composed/Button'
import {FlexBox} from '../../FlexBox'

export default {title: 'Layout/AppHeader/Family'}

export const _AppHeader = () => {
  const appHeaderRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(appHeaderRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <AppHeader
        ref={appHeaderRef}
        size={(ComponentSize as Record<string, any>)['Small']}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_AppHeader.story = {
  name: 'AppHeader',

  parameters: {
    readme: {
      content: marked.parse(AppHeaderReadme),
    },
  },
}

export const _AppHeaderLogo = () => {
  const appHeaderLogoRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(appHeaderLogoRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <AppHeaderLogo
        ref={appHeaderLogoRef}
        src={'/static/media/.storybook/influxdata-logo.png'}
        size={(ComponentSize as Record<string, any>)['Small']}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_AppHeaderLogo.story = {
  name: 'AppHeaderLogo',

  parameters: {
    readme: {
      content: marked.parse(AppHeaderLogoReadme),
    },
  },
}

export const __AppHeader = () => {
  return (
    <div className="mockPageWrapper">
      <div className="mockPage">
        <AppHeader size={(ComponentSize as Record<string, any>)['Small']}>
          <AppHeaderLogo
            src={'/static/media/.storybook/influxdata-logo.png'}
            size={(ComponentSize as Record<string, any>)['Small']}
          />
          <FlexBox direction={FlexDirection.Row} margin={ComponentSize.Medium}>
            <Button
              size={(ComponentSize as Record<string, any>)['Small']}
              text="Shiny Button"
              color={ComponentColor.Success}
            />
            <PopNav
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
                <div
                  style={{
                    color: '#BEF0FF',
                  }}
                >
                  somewhatlongusername@yourdomain.com
                </div>
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
          </FlexBox>
        </AppHeader>
      </div>
    </div>
  )
}

__AppHeader.story = {
  name: 'AppHeader',

  parameters: {
    readme: {
      content: marked.parse(AppHeaderReadme),
    },
  },
}
