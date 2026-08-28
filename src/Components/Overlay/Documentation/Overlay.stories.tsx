// Libraries
import {createRef, useState} from 'react'
import {marked} from 'marked'

// Components
import {Overlay} from '../Overlay'
import {OverlayContainer} from '../OverlayContainer'
import {OverlayMask} from '../OverlayMask'
import {OverlayHeader} from '../OverlayHeader'
import {OverlayBody} from '../OverlayBody'
import {OverlayFooter} from '../OverlayFooter'
import {Button} from '../../Button/Composed/Button'

// Types
import {ComponentColor, ComponentSize, Gradients} from '../../../Types'

// Notes
import OverlayReadme from './Overlay.md?raw'
import OverlayContainerReadme from './OverlayContainer.md?raw'
import OverlayMaskReadme from './OverlayMask.md?raw'
import OverlayHeaderReadme from './OverlayHeader.md?raw'
import OverlayBodyReadme from './OverlayBody.md?raw'
import OverlayFooterReadme from './OverlayFooter.md?raw'
import ConfirmationOverlayReadme from './ConfirmationOverlay.md?raw'

export default {title: 'Components/Overlays/Family'}

const instructionsElement = (
  <p>
    Look in the <strong>Knobs</strong> panel to toggle the overlay
  </p>
)

export const _Overlay = () => (
  <div className="story--example">
    {instructionsElement}
    <Overlay transitionDuration={360} visible={false}>
      <OverlayContainer
        fullScreen={false}
        maxWidth={400}
        margin={(ComponentSize as Record<string, any>)['Medium']}
      >
        <OverlayHeader
          wrapText={false}
          title={'Howdy partner!'}
          onDismiss={() => {
            alert('Overlay dismiss clicked')
          }}
        />
        <OverlayBody>
          <p>
            Before you go riding off into the sunset make sure you really want
            to do this. Deleting all your data cannot be undone and can have
            dangerous and permanent side effects.
          </p>
        </OverlayBody>
        <OverlayFooter>
          <Button text="Cancel" />
          <Button text="Yes, burn it all!" color={ComponentColor.Danger} />
        </OverlayFooter>
      </OverlayContainer>
    </Overlay>
  </div>
)

_Overlay.story = {
  parameters: {
    readme: {
      content: marked.parse(OverlayReadme),
    },
  },
}

export const _OverlayContainer = () => {
  const overlayContainerRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(overlayContainerRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
      <OverlayContainer
        fullScreen={false}
        maxWidth={800}
        ref={overlayContainerRef}
      >
        <div className="mockComponent" style={{width: '100%', height: '400px'}}>
          Header, Body, or Footer go here
        </div>
      </OverlayContainer>
    </div>
  )
}

_OverlayContainer.story = {
  name: 'OverlayContainer',

  parameters: {
    readme: {
      content: marked.parse(OverlayContainerReadme),
    },
  },
}

export const _OverlayMask = () => {
  const overlayMaskRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(overlayMaskRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
      {instructionsElement}
      <OverlayMask
        ref={overlayMaskRef}
        gradient={
          (Gradients as Record<string, any>)[
            (Gradients as Record<string, any>)['GundamPilot']
          ]
        }
        backgroundColor={''}
      />
    </div>
  )
}

_OverlayMask.story = {
  name: 'OverlayMask',

  parameters: {
    readme: {
      content: marked.parse(OverlayMaskReadme),
    },
  },
}

export const _OverlayHeader = () => {
  const overlayHeaderRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(overlayHeaderRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
      <OverlayHeader
        ref={overlayHeaderRef}
        title={'Are you sure?'}
        onDismiss={() => {
          alert('Dismissed')
        }}
      >
        <div className="mockComponent mockButton">Child Element</div>
      </OverlayHeader>
    </div>
  )
}

_OverlayHeader.story = {
  name: 'OverlayHeader',

  parameters: {
    readme: {
      content: marked.parse(OverlayHeaderReadme),
    },
  },
}

export const _OverlayBody = () => {
  const overlayBodyRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(overlayBodyRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
      <OverlayBody ref={overlayBodyRef}>
        <div className="mockComponent" style={{width: '100%', height: '300px'}}>
          This is a great place to stick a form or important text
        </div>
      </OverlayBody>
    </div>
  )
}

_OverlayBody.story = {
  name: 'OverlayBody',

  parameters: {
    readme: {
      content: marked.parse(OverlayBodyReadme),
    },
  },
}

export const _OverlayFooter = () => {
  const overlayFooterRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(overlayFooterRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
      <OverlayFooter ref={overlayFooterRef}>
        <div className="mockComponent" style={{width: '120px'}}>
          Action Button
        </div>
        <div className="mockComponent" style={{width: '120px'}}>
          Action Button
        </div>
      </OverlayFooter>
    </div>
  )
}

_OverlayFooter.story = {
  name: 'OverlayFooter',

  parameters: {
    readme: {
      content: marked.parse(OverlayFooterReadme),
    },
  },
}

export const ConfirmationOverlay = () => (
  <div className="story--example">
    {instructionsElement}
    <Overlay visible={true}>
      <OverlayContainer maxWidth={400}>
        <OverlayHeader
          title="Are you sure?"
          onDismiss={() => {
            alert('Dismissed')
          }}
        />
        <OverlayBody>
          <p>
            This action could cause a lot of things to break unexpectedly. We're
            pretty sure you don't want to do this accidentally. What will it be?
          </p>
        </OverlayBody>
        <OverlayFooter>
          <Button text="Cancel" />
          <Button text="Pull the Lever!" color={ComponentColor.Danger} />
        </OverlayFooter>
      </OverlayContainer>
    </Overlay>
  </div>
)

ConfirmationOverlay.story = {
  parameters: {
    readme: {
      content: marked.parse(ConfirmationOverlayReadme),
    },
  },
}

export const OverlayWithEscapeHandler = () => {
  const [visible, setVisibility] = useState<boolean>(false)

  const handleDismiss = (): void => {
    setVisibility(false)
  }

  const handleShow = (): void => {
    setVisibility(true)
  }

  return (
    <div className="story--example">
      <div className="mockComponent mockButton" onClick={handleShow}>
        Click Me
      </div>
      <Overlay visible={visible} onEscape={handleDismiss}>
        <OverlayContainer maxWidth={400}>
          <OverlayHeader title="Are you sure?" onDismiss={handleDismiss} />
          <OverlayBody>
            <p>
              This action could cause a lot of things to break unexpectedly.
              We're pretty sure you don't want to do this accidentally. What
              will it be?
            </p>
          </OverlayBody>
          <OverlayFooter>
            <Button text="Cancel" onClick={handleDismiss} />
            <Button text="Pull the Lever!" color={ComponentColor.Danger} />
          </OverlayFooter>
        </OverlayContainer>
      </Overlay>
    </div>
  )
}

OverlayWithEscapeHandler.story = {
  name: 'Overlay with Escape Handler',

  parameters: {
    readme: {
      content: marked.parse(ConfirmationOverlayReadme),
    },
  },
}
