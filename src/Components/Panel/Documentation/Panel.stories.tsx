// Libraries
import {RefObject, createRef} from 'react'
import {marked} from 'marked'

// Components
import {
  Panel,
  PanelRef,
  PanelHeaderRef,
  PanelBodyRef,
  PanelFooterRef,
  PanelSymbolHeaderRef,
} from '../'
import {BannerPanel, BannerPanelRef} from '../Composed/BannerPanel'
import {Grid} from '../../Grid'
import {Bullet} from '../../Icon'
import {Heading} from '../../Typography'
import {GradientBox} from '../../GradientBox/GradientBox'

// Types
import {
  Gradients,
  ComponentSize,
  InfluxColors,
  Columns,
  JustifyContent,
  FlexDirection,
  AlignItems,
  IconFont,
  HeadingElement,
  Typeface,
  FontWeight,
} from '../../../Types'

// Notes
import PanelReadme from './Panel.md?raw'
import PanelHeaderReadme from './PanelHeader.md?raw'
import PanelSymbolHeaderReadme from './PanelSymbolHeader.md?raw'
import BannerPanelReadme from './BannerPanel.md?raw'
import PanelBodyReadme from './PanelBody.md?raw'
import PanelFooterReadme from './PanelFooter.md?raw'
import ExampleAReadme from './PanelExampleA.md?raw'
import ExampleBReadme from './PanelExampleB.md?raw'
import ExampleCReadme from './PanelExampleC.md?raw'
import ExampleDReadme from './PanelExampleD.md?raw'
import PanelPlaygroundReadme from './PanelPlayground.md?raw'

export default {title: 'Components/Panels/Family'}

export const _Panel = () => {
  const panelRef: RefObject<PanelRef | null> = createRef()

  const logPanelRef = (): void => {
    /* eslint-disable */
    console.log(panelRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <Panel.Panel
        ref={panelRef}
        gradient={(Gradients as Record<string, any>)['None']}
        backgroundColor={`${InfluxColors.Castle}`}
      />
      <div className="story--test-buttons">
        <button onClick={logPanelRef}>Log Ref</button>
      </div>
    </div>
  )
}

_Panel.story = {
  parameters: {
    readme: {
      content: marked.parse(PanelReadme),
    },
  },
}

export const PanelHeader = () => {
  const panelHeaderRef: RefObject<PanelHeaderRef | null> = createRef()

  const logPanelRefs = (): void => {
    /* eslint-disable */
    console.log('PanelHeader', panelHeaderRef.current)
    /* eslint-enable */
  }

  const headerTypes = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']

  return (
    <div className="story--example">
      <Panel.Header
        ref={panelHeaderRef}
        size={(ComponentSize as Record<string, any>)['Small']}
        direction={(FlexDirection as Record<string, any>)['Row']}
        alignItems={(AlignItems as Record<string, any>)['Center']}
        justifyContent={(JustifyContent as Record<string, any>)['SpaceBetween']}
        margin={(ComponentSize as Record<string, any>)['None']}
      >
        {headerTypes[3] === headerTypes[0] && <h1>{'I am a cool Panel'}</h1>}
        {headerTypes[3] === headerTypes[1] && <h2>{'I am a cool Panel'}</h2>}
        {headerTypes[3] === headerTypes[2] && <h3>{'I am a cool Panel'}</h3>}
        {headerTypes[3] === headerTypes[3] && <h4>{'I am a cool Panel'}</h4>}
        {headerTypes[3] === headerTypes[4] && <h5>{'I am a cool Panel'}</h5>}
        {headerTypes[3] === headerTypes[5] && <h6>{'I am a cool Panel'}</h6>}
      </Panel.Header>
      <div className="story--test-buttons">
        <button onClick={logPanelRefs}>Log Refs</button>
      </div>
    </div>
  )
}

PanelHeader.story = {
  name: 'PanelHeader',

  parameters: {
    readme: {
      content: marked.parse(PanelHeaderReadme),
    },
  },
}

export const PanelBody = () => {
  const panelBodyRef: RefObject<PanelBodyRef | null> = createRef()

  const logPanelRef = (): void => {
    /* eslint-disable */
    console.log(panelBodyRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <Panel.Body
        ref={panelBodyRef}
        size={(ComponentSize as Record<string, any>)['Small']}
        direction={(FlexDirection as Record<string, any>)['Column']}
        alignItems={(AlignItems as Record<string, any>)['Stretch']}
        justifyContent={(JustifyContent as Record<string, any>)['FlexStart']}
        margin={(ComponentSize as Record<string, any>)['None']}
      >
        <p>
          {
            'Lorem ipsum dolor amet aesthetic quinoa small batch crucifix snackwave pabst typewriter kinfolk craft beer wolf unicorn activated charcoal chambray tattooed. Pok pok everyday carry tattooed etsy, small batch photo booth paleo cray prism fanny pack cred. Beard vinyl affogato leggings. Cold-pressed selfies pinterest crucifix freegan cronut glossier vegan drinking vinegar food truck quinoa lumbersexual.'
          }
        </p>
      </Panel.Body>
      <div className="story--test-buttons">
        <button onClick={logPanelRef}>Log Ref</button>
      </div>
    </div>
  )
}

PanelBody.story = {
  name: 'PanelBody',

  parameters: {
    readme: {
      content: marked.parse(PanelBodyReadme),
    },
  },
}

export const PanelFooter = () => {
  const panelFooterRef: RefObject<PanelFooterRef | null> = createRef()

  const logPanelRef = (): void => {
    /* eslint-disable */
    console.log(panelFooterRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <Panel.Footer
        ref={panelFooterRef}
        size={(ComponentSize as Record<string, any>)['Small']}
        direction={(FlexDirection as Record<string, any>)['Row']}
        alignItems={(AlignItems as Record<string, any>)['Center']}
        justifyContent={(JustifyContent as Record<string, any>)['Center']}
        margin={(ComponentSize as Record<string, any>)['None']}
      >
        <div className="mockComponent mockButton">Button</div>
        <div className="mockComponent mockButton">Button</div>
      </Panel.Footer>
      <div className="story--test-buttons">
        <button onClick={logPanelRef}>Log Ref</button>
      </div>
    </div>
  )
}

PanelFooter.story = {
  name: 'PanelFooter',

  parameters: {
    readme: {
      content: marked.parse(PanelFooterReadme),
    },
  },
}

export const PanelSymbolHeader = () => {
  const panelSymbolHeaderRef: RefObject<PanelSymbolHeaderRef | null> =
    createRef()

  const logPanelSymbolHeaderRef = (): void => {
    /* eslint-disable */
    console.log(panelSymbolHeaderRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <Panel.SymbolHeader
        ref={panelSymbolHeaderRef}
        symbol={<Bullet text={1} />}
        title={<h4>Panel Title</h4>}
      />
      <div className="story--test-buttons">
        <button onClick={logPanelSymbolHeaderRef}>Log Ref</button>
      </div>
    </div>
  )
}

PanelSymbolHeader.story = {
  name: 'PanelSymbolHeader',

  parameters: {
    readme: {
      content: marked.parse(PanelSymbolHeaderReadme),
    },
  },
}

export const _BannerPanel = () => {
  const bannerPanelRef: RefObject<BannerPanelRef | null> = createRef()

  const logBannerPanelRef = (): void => {
    /* eslint-disable */
    console.log(bannerPanelRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <BannerPanel
        ref={bannerPanelRef}
        hideMobileIcon={true}
        size={(ComponentSize as Record<string, any>)['ExtraSmall']}
        icon={(IconFont as Record<string, any>)['Cloud']}
        gradient={(Gradients as Record<string, any>)['BeijingEclipse']}
        textColor={`${InfluxColors.Twilight}`}
      >
        <div
          style={{
            width: '100%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            Is some text with <a href="#">a link to nowhere</a>
          </div>
          <div>
            <div className="mockComponent mockButton">This is not a button</div>
          </div>
        </div>
      </BannerPanel>
      <div className="story--test-buttons">
        <button onClick={logBannerPanelRef}>Log Ref</button>
      </div>
    </div>
  )
}

_BannerPanel.story = {
  name: 'BannerPanel',

  parameters: {
    readme: {
      content: marked.parse(BannerPanelReadme),
    },
  },
}

export const DismissablePanel = () => (
  <div className="story--example">
    <Panel
      gradient={(Gradients as Record<string, any>)['GundamPilot']}
      onDismiss={() => alert('onDismiss clicked!')}
      border={false}
    >
      <Panel.Header size={(ComponentSize as Record<string, any>)['Small']}>
        <h4>Welcome!</h4>
      </Panel.Header>
      <Panel.Body size={(ComponentSize as Record<string, any>)['Small']}>
        <p>We've built a lot of cool new things to make your life easier</p>
        <p>
          <a href="#">Click Here</a> to take the tour
        </p>
      </Panel.Body>
    </Panel>
  </div>
)

DismissablePanel.story = {
  parameters: {
    readme: {
      content: marked.parse(ExampleAReadme),
    },
  },
}

export const GettingStartedPanel = () => (
  <div className="story--example">
    <Panel>
      <Panel.Header size={(ComponentSize as Record<string, any>)['Small']}>
        <h5>Getting started with InfluxDB 2.0</h5>
      </Panel.Header>
      <Panel.Body size={(ComponentSize as Record<string, any>)['Small']}>
        <Grid>
          <Grid.Row>
            <Grid.Column widthSM={Columns.Four}>
              <Panel backgroundColor={InfluxColors.Pepper}>
                <Panel.Body>
                  <p>Configure a Data Collector</p>
                </Panel.Body>
              </Panel>
            </Grid.Column>
            <Grid.Column widthSM={Columns.Four}>
              <Panel backgroundColor={InfluxColors.Pepper}>
                <Panel.Body>
                  <p>Build a Monitoring Dashboard</p>
                </Panel.Body>
              </Panel>
            </Grid.Column>
            <Grid.Column widthSM={Columns.Four}>
              <Panel backgroundColor={InfluxColors.Pepper}>
                <Panel.Body>
                  <p>Explore Data with Flux</p>
                </Panel.Body>
              </Panel>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Panel.Body>
      <Panel.Footer size={(ComponentSize as Record<string, any>)['Small']}>
        <p>
          Check our <a href="#">Documentation Site</a> for more tutorials
        </p>
      </Panel.Footer>
    </Panel>
  </div>
)

GettingStartedPanel.story = {
  parameters: {
    readme: {
      content: marked.parse(ExampleBReadme),
    },
  },
}

export const DangerZonePanel = () => (
  <div className="story--example">
    <Panel gradient={Gradients.DocScott}>
      <Panel.Header size={(ComponentSize as Record<string, any>)['Small']}>
        <h3>Danger Zone!</h3>
      </Panel.Header>
      <Panel.Body size={(ComponentSize as Record<string, any>)['Small']}>
        <p>These actions can have unintended wide-reaching consequences</p>
      </Panel.Body>
    </Panel>
  </div>
)

DangerZonePanel.story = {
  parameters: {
    readme: {
      content: marked.parse(ExampleCReadme),
    },
  },
}

export const NumberedPanel = () => (
  <div className="story--example">
    <Panel style={{width: '100%'}}>
      <Panel.SymbolHeader
        symbol={
          <Bullet
            text={1}
            size={(ComponentSize as Record<string, any>)['Medium']}
          />
        }
        title={<h5>Panel Title</h5>}
        size={(ComponentSize as Record<string, any>)['Small']}
      >
        Panel Header Content
      </Panel.SymbolHeader>
      <Panel.Body size={(ComponentSize as Record<string, any>)['Small']}>
        Panel Body Content
      </Panel.Body>
      <Panel.Footer
        size={(ComponentSize as Record<string, any>)['Small']}
        justifyContent={JustifyContent.FlexStart}
      >
        <p>Panel Footer Content</p>
      </Panel.Footer>
    </Panel>
  </div>
)

NumberedPanel.story = {
  parameters: {
    readme: {
      content: marked.parse(ExampleDReadme),
    },
  },
}

export const PanelPlayground = () => (
  <div className="story--example">
    <GradientBox
      borderGradient={(Gradients as Record<string, any>)['MiyazakiSky']}
      borderColor={`${InfluxColors.Raven}`}
    >
      <Panel
        gradient={(Gradients as Record<string, any>)['None']}
        style={{width: '500px'}}
        backgroundColor={`${InfluxColors.Raven}`}
      >
        <Panel.Header size={(ComponentSize as Record<string, any>)['Small']}>
          <Heading
            element={(HeadingElement as Record<string, any>)['H3']}
            appearance={(HeadingElement as Record<string, any>)['Inherit']}
            type={(Typeface as Record<string, any>)['ProximaNova']}
            weight={(FontWeight as Record<string, any>)['Medium']}
            underline={false}
            selectable={false}
          >
            {'Heads up'}
          </Heading>
        </Panel.Header>
        <Panel.Body size={(ComponentSize as Record<string, any>)['Small']}>
          <p>{'Body rock'}</p>
        </Panel.Body>
        <Panel.Footer>
          <div className="mockComponent mockButton">Not a button</div>
        </Panel.Footer>
      </Panel>
    </GradientBox>
  </div>
)

PanelPlayground.story = {
  parameters: {
    readme: {
      content: marked.parse(PanelPlaygroundReadme),
    },
  },
}
