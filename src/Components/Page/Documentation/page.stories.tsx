// Libraries
import {createRef, useState} from 'react'
import {marked} from 'marked'

// Components
import {
  Page,
  PageContents,
  PageControlBar,
  PageControlBarCenter,
  PageControlBarLeft,
  PageControlBarRight,
  PageHeader,
  PageTitle,
} from '../index'
import {SelectGroup, SelectGroupOption} from '../../SelectGroup/index'
import {Button} from '../../Button/Composed/Button'
import {SquareButton} from '../../Button/Composed/SquareButton'
import {SelectDropdown} from '../../Dropdowns/Composed/SelectDropdown'
import {QuestionMarkTooltip} from '../../Popover/Composed/QuestionMarkTooltip'

// Types
import {
  IconFont,
  ComponentColor,
  ComponentSize,
  ButtonShape,
} from '../../../Types'

// Notes
import FullPageReadme from './FullPage.md?raw'
import PageReadme from './Page.md?raw'
import PageControlBarReadme from './PageControlBar.md?raw'
import PageContentsReadme from './PageContents.md?raw'
import PageTitleReadme from './PageTitle.md?raw'

export default {title: 'Layout/Page/Family'}

export const _Page = () => {
  const pageRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(pageRef.current)
  }

  return (
    <div className="story--example">
      <Page ref={pageRef} />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_Page.story = {
  parameters: {
    readme: {
      content: marked.parse(PageReadme),
    },
  },
}

export const _PageControlBar = () => {
  const pageControlBarRef = createRef<HTMLDivElement>()
  const pageControlBarLeftRef = createRef<HTMLDivElement>()
  const pageControlBarCenterRef = createRef<HTMLDivElement>()
  const pageControlBarRightRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(pageControlBarRef.current)
    console.log(pageControlBarLeftRef.current)
    console.log(pageControlBarCenterRef.current)
    console.log(pageControlBarRightRef.current)
  }

  return (
    <div className="story--example">
      <PageControlBar
        ref={pageControlBarRef}
        fullWidth={false}
        gutters={(ComponentSize as Record<string, any>)['Small']}
      >
        <PageControlBarLeft ref={pageControlBarLeftRef}>
          <div className="mockComponent" style={{width: '100%'}}>
            Left
          </div>
        </PageControlBarLeft>
        <PageControlBarCenter ref={pageControlBarCenterRef}>
          <div className="mockComponent" style={{width: '100%'}}>
            Center
          </div>
        </PageControlBarCenter>
        <PageControlBarRight ref={pageControlBarRightRef}>
          <div className="mockComponent" style={{width: '100%'}}>
            Right
          </div>
        </PageControlBarRight>
      </PageControlBar>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Refs</button>
      </div>
    </div>
  )
}

_PageControlBar.story = {
  name: 'PageControlBar',

  parameters: {
    readme: {
      content: marked.parse(PageControlBarReadme),
    },
  },
}

export const _PageContents = () => {
  const pageContentsRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(pageContentsRef.current)
  }

  return (
    <div className="story--example">
      <PageContents
        ref={pageContentsRef}
        fullWidth={false}
        scrollable={false}
        gutters={(ComponentSize as Record<string, any>)['Small']}
      >
        <div
          className="mockComponent pageContents"
          style={{height: `${1200}px`}}
        />
      </PageContents>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_PageContents.story = {
  name: 'PageContents',

  parameters: {
    readme: {
      content: marked.parse(PageContentsReadme),
    },
  },
}

export const _PageTitle = () => {
  const pageTitleRef = createRef<HTMLHeadingElement>()

  const logRef = (): void => {
    console.log(pageTitleRef.current)
  }

  return (
    <div className="story--example">
      <PageTitle ref={pageTitleRef} title={'I am a page title!'} />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_PageTitle.story = {
  name: 'PageTitle',

  parameters: {
    readme: {
      content: marked.parse(PageTitleReadme),
    },
  },
}

export const FullPage = () => {
  const [dropdownActiveItem, setDropdownActiveItem] = useState<string>('Square')
  const dummyDropdownOptions = [
    'Circle',
    'Triangle',
    'Square',
    'Pentagon',
    'Hexagon',
  ]

  const handleDropdownToggle = (item: string): void => {
    setDropdownActiveItem(item)
  }

  return (
    <div className="mockPage appWrapper">
      <Page>
        <PageHeader
          fullWidth={false}
          gutters={(ComponentSize as Record<string, any>)['Small']}
        >
          <h1>Title</h1>
          <div className="mockComponent mockButton">Bloob</div>
        </PageHeader>
        <PageControlBar
          fullWidth={false}
          gutters={(ComponentSize as Record<string, any>)['Small']}
        >
          <PageControlBarLeft>
            <SelectDropdown
              options={dummyDropdownOptions}
              selectedOption={dropdownActiveItem}
              onSelect={handleDropdownToggle}
              style={{width: '300px'}}
            />
          </PageControlBarLeft>
          <PageControlBarCenter>
            <SelectGroup
              shape={ButtonShape.StretchToFit}
              style={{width: '240px'}}
            >
              <SelectGroupOption
                id="mode--write"
                titleText="Write Mode"
                active={true}
                value="write"
                onClick={() => {
                  // do nothing
                }}
              >
                Write
              </SelectGroupOption>
              <SelectGroupOption
                id="mode--preview"
                titleText="Preview Mode"
                active={false}
                value="preview"
                onClick={() => {
                  // do nothing
                }}
              >
                Preview
              </SelectGroupOption>
            </SelectGroup>
          </PageControlBarCenter>
          <PageControlBarRight>
            <QuestionMarkTooltip tooltipContents="Yeehaw I'm a tooltip" />
            <Button text="Export Data" icon={IconFont.Export_New} />
            <SquareButton icon={IconFont.Remove_New} />
            <SquareButton
              icon={IconFont.CheckMark_New}
              color={ComponentColor.Success}
            />
          </PageControlBarRight>
        </PageControlBar>
        <PageContents
          fullWidth={false}
          scrollable={false}
          autoHideScrollbar={false}
          gutters={(ComponentSize as Record<string, any>)['Small']}
        >
          <div
            className="mockComponent stretch"
            style={{height: `${'100%'}`}}
          />
        </PageContents>
      </Page>
    </div>
  )
}

FullPage.story = {
  parameters: {
    readme: {
      content: marked.parse(FullPageReadme),
    },
  },
}
