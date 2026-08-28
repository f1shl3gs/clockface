// Libraries
import {useRef, useState} from 'react'
import {marked} from 'marked'

// Components
import {Popover} from '../Components/Popover'
import {
  Overlay,
  OverlayBody,
  OverlayContainer,
  OverlayHeader,
} from '../Components/Overlay'
import {Notification} from '../Components/Notification'
import {RightClick, RightClickMenuItem} from '../Components/RightClick'
import {Icon} from '../Components/Icon'
import {
  Page,
  PageContents,
  PageControlBar,
  PageControlBarCenter,
  PageControlBarLeft,
  PageControlBarRight,
  PageHeader,
  PageTitle,
} from '../Components/Page'
import {
  TreeNav,
  TreeNavHeader,
  TreeNavItem,
  TreeNavSubItem,
  TreeNavSubMenu,
  TreeNavUser,
} from '../Components/TreeNav'
import {InfluxDBCloudLogo} from '../Components/Logo'
import {AppWrapper} from '../Components/AppWrapper/AppWrapper'

// Types
import {
  ComponentColor,
  IconFont,
  ComponentSize,
  Gradients,
  Appearance,
} from '../Types'

// Notes
import PortalsReadme from './Portals.md?raw'

export default {title: 'Sandbox/Portal Elements'}

export const InterplayOfAllPortals = () => {
  const [navState, setNavState] = useState<boolean>(true)
  const [navActiveItem, setNavActiveItem] = useState<string>('boards')
  const triggerRefA = useRef<HTMLDivElement>(null)
  const triggerRefB = useRef<HTMLDivElement>(null)
  const triggerRefC = useRef<HTMLDivElement>(null)
  const [firstOverlayState, setFirstOverlayState] = useState<boolean>(false)
  const [secondOverlayState, setSecondOverlayState] = useState<boolean>(false)

  const handleDismissFirstOverlay = (): void => {
    setFirstOverlayState(false)
  }

  const handleShowFirstOverlay = (): void => {
    setFirstOverlayState(true)
  }

  const handleDismissSecondOverlay = (): void => {
    setSecondOverlayState(false)
  }

  const handleShowSecondOverlay = (): void => {
    setSecondOverlayState(true)
  }

  const handleToggleNavState = (): void => {
    const newState = !navState

    setNavState(newState)
  }

  const handleNavClick = (id: string): void => {
    setNavActiveItem(id)
  }

  const isItemActive = (id: string): boolean => {
    if (id === navActiveItem || navActiveItem.startsWith(id)) {
      return true
    }

    return false
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
        <AppWrapper presentationMode={false}>
          <TreeNav
            headerElement={
              <TreeNavHeader
                id="home"
                icon={<Icon glyph={IconFont.CuboUniform} />}
                label={<InfluxDBCloudLogo cloud={true} />}
                onClick={handleNavClick}
                active={isItemActive('home')}
                color={ComponentColor.Primary}
              />
            }
            bannerElement={banner}
            hideBannerWhenCollapsed={false}
            expanded={navState}
            onToggleClick={handleToggleNavState}
            userElement={
              <TreeNavUser
                id="user"
                username="john.doe123456@supercool.com"
                team="USAF 101st Airborne Division"
              />
            }
          >
            <TreeNavItem
              id="data"
              label="Data"
              icon={<Icon glyph={IconFont.Layers} />}
              active={isItemActive('data')}
              onClick={handleNavClick}
            >
              <TreeNavSubMenu>
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
              id="explore"
              label="Data Explorer"
              shortLabel="Explore"
              icon={<Icon glyph={IconFont.GraphLine_New} />}
              active={isItemActive('explore')}
              onClick={handleNavClick}
            />
            <TreeNavItem
              id="boards"
              label="Dashboards"
              shortLabel="Boards"
              icon={<Icon glyph={IconFont.DashH} />}
              active={isItemActive('boards')}
              onClick={handleNavClick}
            />
            <TreeNavItem
              id="org"
              label="Organization"
              shortLabel="Org"
              icon={<Icon glyph={IconFont.User} />}
              active={isItemActive('org')}
              onClick={handleNavClick}
            />
            <TreeNavItem
              id="tasks"
              label="Tasks"
              icon={<Icon glyph={IconFont.Calendar} />}
              active={isItemActive('tasks')}
              onClick={handleNavClick}
            />
            <TreeNavItem
              id="alerts"
              label="Alerts"
              icon={<Icon glyph={IconFont.Bell} />}
              active={isItemActive('alerts')}
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
            <PageHeader fullWidth={false} gutters={ComponentSize.Small}>
              <PageTitle title={lookupPageTitle()} />
            </PageHeader>
            <PageControlBar fullWidth={false} gutters={ComponentSize.Small}>
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
              gutters={ComponentSize.Small}
            >
              <div className="mockComponent mockButton" ref={triggerRefA}>
                Click Me
              </div>
              <Popover
                triggerRef={triggerRefA}
                appearance={Appearance.Outline}
                color={ComponentColor.Primary}
                contents={() => (
                  <div
                    className="mockComponent mockButton"
                    onClick={handleShowFirstOverlay}
                  >
                    Show Overlay
                  </div>
                )}
              />
              <Notification
                icon={IconFont.CrownSolid_New}
                size={ComponentSize.Small}
                gradient={Gradients.PolarExpress}
              >
                I am notifying you!
              </Notification>
              <Overlay
                visible={firstOverlayState}
                onEscape={handleDismissFirstOverlay}
              >
                <OverlayContainer maxWidth={500}>
                  <OverlayHeader
                    title="Overlay Example"
                    onDismiss={handleDismissFirstOverlay}
                  />
                  <OverlayBody>
                    <p>I should be below the Notification</p>
                    <div className="mockComponent mockButton" ref={triggerRefB}>
                      Another Popover
                    </div>
                    <div className="mockComponent mockButton" ref={triggerRefC}>
                      Right Click Me
                    </div>
                    <Popover
                      triggerRef={triggerRefB}
                      appearance={Appearance.Solid}
                      color={ComponentColor.Success}
                      contents={() => <>I'm a nested popover!</>}
                    />
                    <RightClick triggerRef={triggerRefC}>
                      <RightClickMenuItem onClick={handleShowSecondOverlay}>
                        Show another overlay
                      </RightClickMenuItem>
                    </RightClick>
                  </OverlayBody>
                </OverlayContainer>
              </Overlay>
              <Overlay
                visible={secondOverlayState}
                onEscape={handleDismissSecondOverlay}
              >
                <OverlayContainer maxWidth={300}>
                  <OverlayHeader
                    title="Another Overlay"
                    onDismiss={handleDismissSecondOverlay}
                  />
                  <OverlayBody>
                    <p>
                      I should be on top of the previous Overlay but still
                      underneath the Notification
                    </p>
                  </OverlayBody>
                </OverlayContainer>
              </Overlay>
            </PageContents>
          </Page>
        </AppWrapper>
      </div>
    </div>
  )
}

InterplayOfAllPortals.story = {
  name: 'Interplay of all portals',

  parameters: {
    readme: {
      content: marked.parse(PortalsReadme),
    },
  },
}
