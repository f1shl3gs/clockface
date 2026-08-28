// Libraries
import {createRef, useState} from 'react'
import {marked} from 'marked'

// Components
import {AppWrapper} from '../AppWrapper'
import {AppHeader, AppHeaderLogo} from '../../AppHeader'
import {NavMenu, NavMenuItem, NavMenuSubItem} from '../../NavMenu'
import {FlexBox} from '../../FlexBox'
import {Button} from '../../Button/Composed/Button'
import {PopNav, PopNavItem} from '../../PopNav'
import {
  Page,
  PageContents,
  PageControlBar,
  PageControlBarCenter,
  PageControlBarLeft,
  PageControlBarRight,
  PageHeader,
  PageTitle,
} from '../../Page/index'
import {Icon} from '../../Icon/Base/Icon'
import {
  TreeNav,
  TreeNavHeader,
  TreeNavItem,
  TreeNavSubHeading,
  TreeNavSubItem,
  TreeNavSubMenu,
  TreeNavUser,
  TreeNavUserItem,
} from '../../TreeNav'
import {InfluxDataLogo} from '../../Logo'

// Types
import {
  IconFont,
  ComponentSize,
  FlexDirection,
  ComponentColor,
} from '../../../Types'

// Notes
import AppWrapperReadme from './AppWrapper.md?raw'

export default {title: 'Layout/AppWrapper'}

export const _AppWrapper = () => {
  const appWrapperRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(appWrapperRef.current)
    /* eslint-enable */
  }

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
        <AppWrapper ref={appWrapperRef} presentationMode={false}>
          <NavMenu>
            <NavMenuItem
              titleLink={(className: string) => (
                <a className={className} href="#">
                  JohnDoe (OrgName)
                </a>
              )}
              iconLink={(className: string) => (
                <a className={className} href="#">
                  <Icon glyph={IconFont.CuboUniform} />
                </a>
              )}
              active={false}
            >
              <NavMenuSubItem
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Switch Organizations
                  </a>
                )}
                active={false}
              />
              <NavMenuSubItem
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Create Organization
                  </a>
                )}
                active={false}
              />
              <NavMenuSubItem
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Logout
                  </a>
                )}
                active={false}
              />
            </NavMenuItem>
            <NavMenuItem
              titleLink={(className: string) => (
                <a className={className} href="#">
                  Queries
                </a>
              )}
              iconLink={(className: string) => (
                <a className={className} href="#">
                  <Icon glyph={IconFont.GraphLine_New} />
                </a>
              )}
              active={false}
            />
            <NavMenuItem
              titleLink={(className: string) => (
                <a className={className} href="#">
                  Dashboards
                </a>
              )}
              iconLink={(className: string) => (
                <a className={className} href="#">
                  <Icon glyph={IconFont.DashH} />
                </a>
              )}
              active={false}
            />
            <NavMenuItem
              titleLink={(className: string) => (
                <a className={className} href="#">
                  Tasks
                </a>
              )}
              iconLink={(className: string) => (
                <a className={className} href="#">
                  <Icon glyph={IconFont.Calendar} />
                </a>
              )}
              active={true}
            />
            <NavMenuItem
              titleLink={(className: string) => (
                <a className={className} href="#">
                  Monitoring & Alerts
                </a>
              )}
              iconLink={(className: string) => (
                <a className={className} href="#">
                  <Icon glyph={IconFont.Bell} />
                </a>
              )}
              active={false}
            >
              <NavMenuSubItem
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    History
                  </a>
                )}
                active={false}
              />
            </NavMenuItem>
            <NavMenuItem
              titleLink={(className: string) => (
                <a className={className} href="#">
                  Load Data
                </a>
              )}
              iconLink={(className: string) => (
                <a className={className} href="#">
                  <Icon glyph={IconFont.Layers} />
                </a>
              )}
              active={false}
            >
              <NavMenuSubItem
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Buckets
                  </a>
                )}
                active={false}
              />
              <NavMenuSubItem
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Telegraf
                  </a>
                )}
                active={false}
              />
              <NavMenuSubItem
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Scrapers
                  </a>
                )}
                active={false}
              />
              <NavMenuSubItem
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Tokens
                  </a>
                )}
                active={false}
              />
              <NavMenuSubItem
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Client Libraries
                  </a>
                )}
                active={false}
              />
            </NavMenuItem>
            <NavMenuItem
              titleLink={(className: string) => (
                <a className={className} href="#">
                  Settings
                </a>
              )}
              iconLink={(className: string) => (
                <a className={className} href="#">
                  <Icon glyph={IconFont.CogOutline_New} />
                </a>
              )}
              active={false}
            >
              <NavMenuSubItem
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Members
                  </a>
                )}
                active={false}
              />
              <NavMenuSubItem
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Variables
                  </a>
                )}
                active={false}
              />
              <NavMenuSubItem
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Templates
                  </a>
                )}
                active={false}
              />
              <NavMenuSubItem
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Labels
                  </a>
                )}
                active={false}
              />
              <NavMenuSubItem
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Profile
                  </a>
                )}
                active={false}
              />
            </NavMenuItem>
            <NavMenuItem
              titleLink={(className: string) => (
                <a className={className} href="#">
                  Cloud
                </a>
              )}
              iconLink={(className: string) => (
                <a className={className} href="#">
                  <Icon glyph={IconFont.Cloud} />
                </a>
              )}
              active={false}
            >
              <NavMenuSubItem
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Billing
                  </a>
                )}
                active={false}
              />
              <NavMenuSubItem
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Usage
                  </a>
                )}
                active={false}
              />
            </NavMenuItem>
            <NavMenuItem
              titleLink={(className: string) => (
                <a className={className} href="#">
                  Feedback
                </a>
              )}
              iconLink={(className: string) => (
                <a className={className} href="#">
                  <Icon glyph={IconFont.Chat} />
                </a>
              )}
              active={false}
            />
          </NavMenu>
          <Page titleTag="bloop">
            <PageHeader
              fullWidth={false}
              gutters={(ComponentSize as Record<string, any>)['Small']}
            >
              <PageTitle title={'Page head, feet, and toes'} />
            </PageHeader>
            <PageControlBar
              fullWidth={false}
              gutters={(ComponentSize as Record<string, any>)['Small']}
            >
              <PageControlBarLeft>
                <div className="mockComponent mockButton">Left Button</div>
              </PageControlBarLeft>
              <PageControlBarCenter>
                <div className="mockComponent mockButton">Center Button</div>
              </PageControlBarCenter>
              <PageControlBarRight>
                <div className="mockComponent mockButton">Right Button</div>
              </PageControlBarRight>
            </PageControlBar>
            <PageContents
              fullWidth={false}
              scrollable={true}
              gutters={(ComponentSize as Record<string, any>)['Small']}
            >
              <div
                className="mockComponent pageContents"
                style={{height: `${1200}px`}}
              >
                <h4>
                  Here's some dummy text to help show where page contents are
                  and for scrolling
                </h4>
              </div>
            </PageContents>
          </Page>
        </AppWrapper>
      </div>
      <div className="story--test-buttons relative">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_AppWrapper.story = {
  name: 'AppWrapper',

  parameters: {
    readme: {
      content: marked.parse(AppWrapperReadme),
    },
  },
}

export const AppWrapperTreeNav = () => {
  const [navState, setNavState] = useState<boolean>(true)
  const [navActiveItem, setNavActiveItem] = useState<string>('data')
  const appWrapperRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(appWrapperRef.current)
    /* eslint-enable */
  }

  const handleToggleNavState = (): void => {
    const newState = !navState

    setNavState(newState)
  }

  const handleNavClick = (id: string): void => {
    setNavActiveItem(id)
  }

  const isItemActive = (id: string): boolean => {
    return id === navActiveItem || navActiveItem.startsWith(id)
  }

  const navItems = [
    {id: 'home', label: 'Getting Started'},
    {id: 'user', label: 'JohnDoe (OrgName)'},
    {id: 'data', label: 'Data'},
    {id: 'data-buckets', label: 'Buckets'},
    {id: 'data-sources', label: 'Data Sources'},
    {id: 'explore', label: 'Data Explorer'},
    {id: 'boards', label: 'Dashboards'},
    {id: 'org', label: 'Organization'},
    {id: 'tasks', label: 'Tasks'},
    {id: 'alerts', label: 'Alerts'},
    {id: 'settings', label: 'Settings'},
    {id: 'settings-members', label: 'Members'},
    {id: 'settings-variables', label: 'Variables'},
    {id: 'settings-templates', label: 'Templates'},
    {id: 'settings-labels', label: 'Labels'},
    {id: 'settings-profile', label: 'Profile'},
  ]

  const lookupPageTitle = (): string => {
    const activeItem = navItems.find(item => item.id === navActiveItem)

    if (activeItem) {
      return activeItem.label
    }

    return 'I am a page title!'
  }

  const banner = (
    <div
      style={{
        width: '100%',
        height: '100px',
        backgroundColor: '#333',
        borderRadius: '4px',
      }}
    >
      Banner
    </div>
  )

  return (
    <div className="mockPageWrapper">
      <div className="mockPage">
        <AppWrapper ref={appWrapperRef} presentationMode={false}>
          <TreeNav
            headerElement={
              <TreeNavHeader
                id="home"
                label={<InfluxDataLogo simplified />}
                onClick={handleNavClick}
                active={isItemActive('home')}
                icon={<Icon glyph={IconFont.CuboUniform} />}
                color={(ComponentColor as Record<string, any>)['Primary']}
              />
            }
            bannerElement={banner}
            hideBannerWhenCollapsed={false}
            expanded={navState}
            onToggleClick={handleToggleNavState}
            userElement={
              <TreeNavUser id="user" username="Company Name" team="Team Name">
                <TreeNavSubHeading label="Company" />
                <TreeNavUserItem id="billing" label="Billing" />
                <TreeNavUserItem
                  id="members"
                  label="Members"
                  linkElement={className => (
                    <a href="#" className={className} />
                  )}
                />
                <TreeNavUserItem id="about" label="About" />
                <TreeNavSubHeading label="Team" />
                <TreeNavUserItem id="members" label="Members" />
                <TreeNavUserItem id="about" label="About" />
                <TreeNavSubHeading label="somebody@somewhere.com" lowercase />
                <TreeNavUserItem id="switch" label="Switch workspace" />
                <TreeNavUserItem id="logout" label="Logout" />
              </TreeNavUser>
            }
          >
            <TreeNavItem
              id="data"
              label="Ingest"
              icon={<Icon glyph={IconFont.Download_New} />}
              active={isItemActive('data')}
              onClick={handleNavClick}
            >
              <TreeNavSubMenu>
                <TreeNavSubHeading label="Ingest" />
                <TreeNavSubItem
                  id="data-buckets"
                  label="Buckets"
                  active={isItemActive('data-buckets')}
                  onClick={handleNavClick}
                />
                <TreeNavSubItem
                  id="data-sources"
                  label="Sources"
                  active={isItemActive('data-sources')}
                  onClick={handleNavClick}
                />
              </TreeNavSubMenu>
            </TreeNavItem>
            <TreeNavItem
              id="build"
              label="Build"
              icon={<Icon glyph={IconFont.Braces} />}
              active={isItemActive('build')}
              onClick={handleNavClick}
            />
            <TreeNavItem
              id="monitor"
              label="Monitor & Alert"
              icon={<Icon glyph={IconFont.GraphLine_New} />}
              active={isItemActive('boards')}
              onClick={handleNavClick}
            />
            <TreeNavItem
              id="access"
              label="Access"
              icon={<Icon glyph={IconFont.Lock} />}
              active={isItemActive('access')}
              onClick={handleNavClick}
            />
            <TreeNavItem
              id="settings"
              label="Settings"
              icon={<Icon glyph={IconFont.CogOutline_New} />}
              active={isItemActive('settings')}
              onClick={handleNavClick}
            >
              <TreeNavSubMenu>
                <TreeNavSubHeading label="Settings" />
                <TreeNavSubItem
                  id="settings-members"
                  label="Members"
                  active={isItemActive('settings-members')}
                  onClick={handleNavClick}
                />
                <TreeNavSubItem
                  id="settings-variables"
                  label="Variables"
                  active={isItemActive('settings-variables')}
                  onClick={handleNavClick}
                />
                <TreeNavSubItem
                  id="settings-templates"
                  label="Templates"
                  active={isItemActive('settings-templates')}
                  onClick={handleNavClick}
                />
                <TreeNavSubItem
                  id="settings-labels"
                  label="Labels"
                  active={isItemActive('settings-labels')}
                  onClick={handleNavClick}
                />
                <TreeNavSubItem
                  id="settings-profile"
                  label="Profile"
                  active={isItemActive('settings-profile')}
                  onClick={handleNavClick}
                />
              </TreeNavSubMenu>
            </TreeNavItem>
          </TreeNav>
          <Page titleTag="bloop">
            <PageHeader
              fullWidth={false}
              gutters={(ComponentSize as Record<string, any>)['Small']}
            >
              <PageTitle title={lookupPageTitle()} />
            </PageHeader>
            <PageControlBar
              fullWidth={false}
              gutters={(ComponentSize as Record<string, any>)['Small']}
            >
              <PageControlBarLeft>
                <div className="mockComponent mockButton">Left Button</div>
              </PageControlBarLeft>
              <PageControlBarCenter>
                <div className="mockComponent mockButton">Center Button</div>
              </PageControlBarCenter>
              <PageControlBarRight>
                <div className="mockComponent mockButton">Right Button</div>
              </PageControlBarRight>
            </PageControlBar>
            <PageContents
              fullWidth={false}
              scrollable={true}
              gutters={(ComponentSize as Record<string, any>)['Small']}
            >
              <div
                className="mockComponent pageContents"
                style={{height: `${1200}px`}}
              >
                <h4>
                  Here's some dummy text to help show where page contents are
                  and for scrolling
                </h4>
              </div>
            </PageContents>
          </Page>
        </AppWrapper>
      </div>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

AppWrapperTreeNav.story = {
  name: 'AppWrapper + TreeNav',

  parameters: {
    readme: {
      content: marked.parse(AppWrapperReadme),
    },
  },
}
