// Libraries
import {createRef, useState} from 'react'
import {marked} from 'marked'

// Components
import {Tabs, Tab, TabContents, TabsContainer} from '../'
import {Icon} from '../../Icon/Base/Icon'

// Types
import {ComponentSize, Orientation, IconFont, Alignment} from '../../../Types'

// Notes
import TabsReadme from './Tabs.md?raw'
import TabReadme from './Tab.md?raw'
import TabContentsReadme from './TabContents.md?raw'
import TabsContainerReadme from './TabsContainer.md?raw'
import TabsExampleReadme from './TabsExample.md?raw'

export default {title: 'Components/Tabs/Family'}

export const _Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>('pomelo')
  const tabsRef = createRef<HTMLElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(tabsRef.current)
    /* eslint-enable */
  }

  const handleTabClick = (id?: string): void => {
    if (id === undefined) {
      return
    }
    setActiveTab(id)
  }

  const exampleTabs = [
    {
      id: 'yuzu',
      label: 'Yuzu',
    },
    {
      id: 'mandarin',
      label: 'Mandarin',
    },
    {
      id: 'citron',
      label: 'Citron',
    },
    {
      id: 'pomelo',
      label: 'Pomelo',
    },
    {
      id: 'kabosu',
      label: 'Kabosu',
    },
    {
      id: 'sudachi',
      label: 'Sudachi',
    },
  ]

  const dropdownLabel =
    exampleTabs.find(tab => tab.id === activeTab)?.label ?? 'No active tab'

  return (
    <div className="story--example">
      <Tabs
        ref={tabsRef}
        size={(ComponentSize as Record<string, any>)['Medium']}
        alignment={(Alignment as Record<string, any>)['Left']}
        dropdownAlignment={(Alignment as Record<string, any>)['Center']}
        dropdownLabel={dropdownLabel}
        orientation={(Orientation as Record<string, any>)['Horizontal']}
        dropdownBreakpoint={750}
      >
        {exampleTabs.map(tab => (
          <Tab
            key={tab.id}
            active={activeTab === tab.id}
            id={tab.id}
            text={tab.label}
            onClick={handleTabClick}
          />
        ))}
      </Tabs>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_Tabs.story = {
  parameters: {
    readme: {
      content: marked.parse(TabsReadme),
    },
  },
}

export const _Tab = () => {
  const tabRef = createRef<HTMLButtonElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(tabRef.current)
    /* eslint-enable */
  }

  return (
    <div
      className={`story--example cf-tabs__md cf-tabs__${
        (Orientation as Record<string, any>)['Horizontal']
      }`}
    >
      <Tab
        ref={tabRef}
        icon={<Icon glyph={(IconFont as Record<string, any>)['Star']} />}
        active={true}
        id={'fruits'}
        text={'Fruits'}
        onClick={id => alert(`Tab clicked, id: ${id}`)}
        onDismiss={id => alert(`Tab dismissed, id: ${id}`)}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_Tab.story = {
  parameters: {
    readme: {
      content: marked.parse(TabReadme),
    },
  },
}

export const _TabContents = () => {
  const tabContentsRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(tabContentsRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <TabContents ref={tabContentsRef}>
        <p>Contents go here</p>
      </TabContents>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_TabContents.story = {
  name: 'TabContents',

  parameters: {
    readme: {
      content: marked.parse(TabContentsReadme),
    },
  },
}

export const _TabsContainer = () => {
  const tabContainerRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(tabContainerRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <TabsContainer
        ref={tabContainerRef}
        orientation={(Orientation as Record<string, any>)['Horizontal']}
        stretchToFitWidth={false}
        stretchToFitHeight={false}
      >
        <Tabs
          size={(ComponentSize as Record<string, any>)['Large']}
          orientation={(Orientation as Record<string, any>)['Horizontal']}
        >
          <Tab
            active={false}
            id="tab1"
            text={'Fruits'}
            onClick={id => alert(`Tab1 clicked, id: ${id}`)}
          />
          <Tab
            active={true}
            id="tab2"
            text={'Vegetables'}
            onClick={id => alert(`Tab2 clicked, id: ${id}`)}
          />
          <Tab
            active={false}
            id="tab3"
            text={'Animals'}
            onClick={id => alert(`Tab3 clicked, id: ${id}`)}
          />
        </Tabs>
        <TabContents>TabContents</TabContents>
      </TabsContainer>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_TabsContainer.story = {
  name: 'TabsContainer',

  parameters: {
    readme: {
      content: marked.parse(TabsContainerReadme),
    },
  },
}

export const TabsWithLinks = () => {
  const [activeTab, setActiveTab] = useState<string>('triangles')
  const tabsRef = createRef<HTMLElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(tabsRef.current)
    /* eslint-enable */
  }

  const handleTabClick = (id?: string): void => {
    if (id === undefined) {
      return
    }
    setActiveTab(id)
  }

  const handleTabDismiss = (id?: string): void => {
    /* eslint-disable */
    console.log('dismissed tab: ', id)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <Tabs
        ref={tabsRef}
        size={(ComponentSize as Record<string, any>)['Large']}
        orientation={(Orientation as Record<string, any>)['Horizontal']}
        alignment={(Alignment as Record<string, any>)['Left']}
        dropdownAlignment={(Alignment as Record<string, any>)['Center']}
        dropdownBreakpoint={700}
      >
        <Tab
          active={activeTab === 'circles'}
          id="circles"
          text="Circles"
          onClick={handleTabClick}
        />
        <Tab
          active={activeTab === 'triangles'}
          id="triangles"
          text="Triangles"
          onClick={handleTabClick}
        />
        <Tab
          active={activeTab === 'squares'}
          id="squares"
          text="Squares"
          onClick={handleTabClick}
          onDismiss={handleTabDismiss}
        />
        <Tab
          active={activeTab === 'pentagons'}
          id="pentagons"
          text="Pentagons"
          onClick={handleTabClick}
        />
        <Tab
          active={activeTab === 'hexagons'}
          id="hexagons"
          text="Hexagons (Link)"
          linkElement={className => <a href="#" className={className} />}
        />
        <Tab
          active={activeTab === 'septagons'}
          id="septagons"
          text="Septagons (Link)"
          linkElement={className => <a href="#" className={className} />}
          onDismiss={handleTabDismiss}
        />
      </Tabs>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

TabsWithLinks.story = {
  name: 'Tabs with Links',

  parameters: {
    readme: {
      content: marked.parse(TabsExampleReadme),
    },
  },
}
