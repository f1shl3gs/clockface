// Libraries
import {createRef, useState} from 'react'
import {marked} from 'marked'

// Components
import {
  Page,
  PageRef,
  PageControlBarRef,
  PageControlBarCenterRef,
  PageControlBarLeftRef,
  PageControlBarRightRef,
  PageContentsRef,
} from '../index'
import {SelectGroup} from '../../SelectGroup/index'
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
import {PageTitleRef} from '../PageTitle'

export default {title: 'Layout/Page/Family'}

export const _Page = () => {
  const pageRef = createRef<PageRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(pageRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <Page.Page ref={pageRef} />
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

export const PageControlBar = () => {
  const pageControlBarRef = createRef<PageControlBarRef>()
  const pageControlBarLeftRef = createRef<PageControlBarLeftRef>()
  const pageControlBarCenterRef = createRef<PageControlBarCenterRef>()
  const pageControlBarRightRef = createRef<PageControlBarRightRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(pageControlBarRef.current)
    console.log(pageControlBarLeftRef.current)
    console.log(pageControlBarCenterRef.current)
    console.log(pageControlBarRightRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <Page.ControlBar
        ref={pageControlBarRef}
        fullWidth={false}
        gutters={(ComponentSize as Record<string, any>)['Small']}
      >
        <Page.ControlBarLeft ref={pageControlBarLeftRef}>
          <div className="mockComponent" style={{width: '100%'}}>
            Left
          </div>
        </Page.ControlBarLeft>
        <Page.ControlBarCenter ref={pageControlBarCenterRef}>
          <div className="mockComponent" style={{width: '100%'}}>
            Center
          </div>
        </Page.ControlBarCenter>
        <Page.ControlBarRight ref={pageControlBarRightRef}>
          <div className="mockComponent" style={{width: '100%'}}>
            Right
          </div>
        </Page.ControlBarRight>
      </Page.ControlBar>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Refs</button>
      </div>
    </div>
  )
}

PageControlBar.story = {
  name: 'PageControlBar',

  parameters: {
    readme: {
      content: marked.parse(PageControlBarReadme),
    },
  },
}

export const PageContents = () => {
  const pageContentsRef = createRef<PageContentsRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(pageContentsRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <Page.Contents
        ref={pageContentsRef}
        fullWidth={false}
        scrollable={false}
        gutters={(ComponentSize as Record<string, any>)['Small']}
      >
        <div
          className="mockComponent pageContents"
          style={{height: `${1200}px`}}
        />
      </Page.Contents>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

PageContents.story = {
  name: 'PageContents',

  parameters: {
    readme: {
      content: marked.parse(PageContentsReadme),
    },
  },
}

export const PageTitle = () => {
  const pageTitleRef = createRef<PageTitleRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(pageTitleRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <Page.Title ref={pageTitleRef} title={'I am a page title!'} />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

PageTitle.story = {
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
        <Page.Header
          fullWidth={false}
          gutters={(ComponentSize as Record<string, any>)['Small']}
        >
          <h1>Title</h1>
          <div className="mockComponent mockButton">Bloob</div>
        </Page.Header>
        <Page.ControlBar
          fullWidth={false}
          gutters={(ComponentSize as Record<string, any>)['Small']}
        >
          <Page.ControlBarLeft>
            <SelectDropdown
              options={dummyDropdownOptions}
              selectedOption={dropdownActiveItem}
              onSelect={handleDropdownToggle}
              style={{width: '300px'}}
            />
          </Page.ControlBarLeft>
          <Page.ControlBarCenter>
            <SelectGroup
              shape={ButtonShape.StretchToFit}
              style={{width: '240px'}}
            >
              <SelectGroup.Option
                id="mode--write"
                titleText="Write Mode"
                active={true}
                value="write"
                onClick={() => {
                  // do nothing
                }}
              >
                Write
              </SelectGroup.Option>
              <SelectGroup.Option
                id="mode--preview"
                titleText="Preview Mode"
                active={false}
                value="preview"
                onClick={() => {
                  // do nothing
                }}
              >
                Preview
              </SelectGroup.Option>
            </SelectGroup>
          </Page.ControlBarCenter>
          <Page.ControlBarRight>
            <QuestionMarkTooltip tooltipContents="Yeehaw I'm a tooltip" />
            <Button text="Export Data" icon={IconFont.Export_New} />
            <SquareButton icon={IconFont.Remove_New} />
            <SquareButton
              icon={IconFont.CheckMark_New}
              color={ComponentColor.Success}
            />
          </Page.ControlBarRight>
        </Page.ControlBar>
        <Page.Contents
          fullWidth={false}
          scrollable={false}
          autoHideScrollbar={false}
          gutters={(ComponentSize as Record<string, any>)['Small']}
        >
          <div
            className="mockComponent stretch"
            style={{height: `${'100%'}`}}
          />
        </Page.Contents>
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
