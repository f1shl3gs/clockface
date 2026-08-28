// Libraries
import {createRef, useState} from 'react'
import {marked} from 'marked'

// Components
import {
  TreeNav,
  TreeNavHeader,
  TreeNavItem,
  TreeNavSubHeading,
  TreeNavSubItem,
  TreeNavSubMenu,
  TreeNavUser,
  TreeNavUserItem,
} from '../'
import {Icon} from '../../Icon'
import {AppWrapper} from '../../AppWrapper/AppWrapper'
import {Page, PageContents, PageHeader, PageTitle} from '../../Page/index'

// Types
import {IconFont} from '../../../Types'

// Notes
import TreeNavReadme from './TreeNav.md?raw'
import {InfluxDBCloudLogo} from '../../Logo'

export default {title: 'Components/Navigation/TreeNav'}

export const _TreeNav = () => {
  const [activeItem, setActiveItem] = useState<string>('item-1')
  const [activeSubItem, setActiveSubItem] = useState<string>('data-buckets')
  const [expanded, setExpanded] = useState<boolean>(true)
  const navMenuRef = createRef<HTMLElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(navMenuRef.current)
    /* eslint-enable */
  }

  const handleItemClick = (id: string): void => {
    setActiveItem(id)
  }

  const handleSubItemClick = (id: string): void => {
    setActiveSubItem(id)
  }

  const handleToggleExpanded = (): void => {
    setExpanded(!expanded)
  }

  return (
    <div className="mockPageWrapper">
      <div className="mockPage">
        <AppWrapper>
          <TreeNav
            ref={navMenuRef}
            expanded={expanded}
            onToggleClick={handleToggleExpanded}
            headerElement={
              <TreeNavHeader
                id="home"
                label={<InfluxDBCloudLogo cloud={true} />}
                onClick={
                  /* eslint-disable */
                  () => {}
                  /* eslint-enable */
                }
                icon={<Icon glyph={IconFont.CuboSolid} />}
              />
            }
            userElement={
              <TreeNavUser username="Captain Milkshake" team="Dairy Desperados">
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
                <TreeNavSubHeading label="Dkim@Influxdata.com" lowercase />
                <TreeNavUserItem id="switch" label="Switch workspace" />
                <TreeNavUserItem id="logout" label="Logout" />
              </TreeNavUser>
            }
          >
            <TreeNavItem
              id="item-1"
              label="Ingest"
              icon={<Icon glyph={IconFont.Download_New} />}
              active={activeItem === 'item-1'}
              onClick={handleItemClick}
            >
              <TreeNavSubMenu>
                <TreeNavSubHeading label="Ingest" />
                <TreeNavSubItem
                  id="data-buckets"
                  label="Buckets"
                  active={activeSubItem === 'data-buckets'}
                  onClick={handleSubItemClick}
                />
                <TreeNavSubItem
                  id="data-sources"
                  label="Sources"
                  active={activeSubItem === 'data-sources'}
                  onClick={handleSubItemClick}
                />
                <TreeNavSubItem
                  id="data-telegraf"
                  label="Telegraf"
                  active={activeSubItem === 'data-telegraf'}
                  onClick={handleSubItemClick}
                />
                <TreeNavSubItem
                  id="data-tokens"
                  label="API Tokens"
                  active={activeSubItem === 'data-tokens'}
                  onClick={handleSubItemClick}
                />
              </TreeNavSubMenu>
            </TreeNavItem>
            <TreeNavItem
              id="item-2"
              label={'Build'}
              icon={<Icon glyph={IconFont.Braces} />}
              onClick={handleItemClick}
              active={activeItem === 'item-2'}
            />
            <TreeNavItem
              id="item-3"
              label="Monitor & Alert"
              icon={<Icon glyph={IconFont.GraphLine_New} />}
              onClick={handleItemClick}
              active={activeItem === 'item-3'}
            />
            <TreeNavItem
              id="item-4"
              label="Access"
              icon={<Icon glyph={IconFont.Lock} />}
              onClick={handleItemClick}
              active={activeItem === 'item-4'}
            />
            <TreeNavItem
              id="item-5"
              label="Settings"
              icon={<Icon glyph={IconFont.CogOutline_New} />}
              onClick={handleItemClick}
              active={activeItem === 'item-5'}
            >
              <TreeNavSubMenu>
                <TreeNavSubHeading label="Settings" />
                <TreeNavSubItem
                  id="item-5-sub-1"
                  label="Banana"
                  linkElement={className => (
                    <a href="#" className={className} />
                  )}
                />
                <TreeNavSubItem
                  id="item-5-sub-2"
                  label="Dragonfruit"
                  linkElement={className => (
                    <a href="#" className={className} />
                  )}
                />
                <TreeNavSubItem
                  id="item-5-sub-3"
                  label="Apple"
                  linkElement={className => (
                    <a href="#" className={className} />
                  )}
                />
                <TreeNavSubItem
                  id="item-5-sub-4"
                  label="Pineapple"
                  linkElement={className => (
                    <a href="#" className={className} />
                  )}
                />
              </TreeNavSubMenu>
            </TreeNavItem>
          </TreeNav>
          <Page>
            <PageHeader fullWidth={false}>
              <PageTitle title="I am a page" />
            </PageHeader>
            <PageContents fullWidth={false}>
              <p>sfsds</p>
            </PageContents>
          </Page>
        </AppWrapper>
        <div className="story--test-buttons story--test-buttons--bottom">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    </div>
  )
}

_TreeNav.story = {
  name: 'TreeNav',

  parameters: {
    readme: {
      content: marked.parse(TreeNavReadme),
    },
  },
}
