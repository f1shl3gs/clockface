// Libraries
import {createRef, useState} from 'react'
import {marked} from 'marked'

// Components
import {Overlay, OverlayProps} from '../Overlay'
import {OverlayContainer, OverlayContainerProps} from '../OverlayContainer'
import {OverlayMask, OverlayMaskProps} from '../OverlayMask'
import {OverlayHeader, OverlayHeaderProps} from '../OverlayHeader'
import {OverlayBody} from '../OverlayBody'
import {OverlayFooter, OverlayFooterProps} from '../OverlayFooter'
import {Button} from '../../Button/Composed/Button'

// Types
import {ComponentColor, Gradients} from '../../../Types'

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

export const _Overlay = (
  args: Partial<OverlayProps> & Partial<OverlayContainerProps>,
) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="story--example">
      {instructionsElement}
      <Button text="Toggle Overlay" onClick={() => setVisible(!visible)} />
      <Overlay visible={visible} transitionDuration={args.transitionDuration}>
        <OverlayContainer
          fullScreen={args.fullScreen}
          maxWidth={args.maxWidth}
          margin={args.margin}
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
}

_Overlay.args = {
  transitionDuration: 360,
  fullScreen: false,
  maxWidth: 400,
  margin: 'md',
}
_Overlay.argTypes = {
  transitionDuration: {control: 'number'},
  fullScreen: {control: 'boolean'},
  maxWidth: {control: 'number'},
  margin: {
    control: 'inline-radio',
    options: {ExtraSmall: 'xs', Small: 'sm', Medium: 'md', Large: 'lg'},
  },
}

_Overlay.story = {
  parameters: {
    readme: {
      content: marked.parse(OverlayReadme),
    },
  },
}

export const _OverlayContainer = (args: Partial<OverlayContainerProps>) => {
  const overlayContainerRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(overlayContainerRef.current)
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
      <OverlayContainer
        fullScreen={args.fullScreen}
        maxWidth={args.maxWidth}
        margin={args.margin}
        ref={overlayContainerRef}
      >
        <div className="mockComponent" style={{width: '100%', height: '400px'}}>
          Header, Body, or Footer go here
        </div>
      </OverlayContainer>
    </div>
  )
}

_OverlayContainer.args = {
  fullScreen: false,
  maxWidth: 800,
  margin: 'md',
}
_OverlayContainer.argTypes = {
  fullScreen: {control: 'boolean'},
  maxWidth: {control: 'number'},
  margin: {
    control: 'inline-radio',
    options: {ExtraSmall: 'xs', Small: 'sm', Medium: 'md', Large: 'lg'},
  },
}

_OverlayContainer.story = {
  name: 'OverlayContainer',

  parameters: {
    readme: {
      content: marked.parse(OverlayContainerReadme),
    },
  },
}

export const _OverlayMask = (args: Partial<OverlayMaskProps>) => {
  const overlayMaskRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(overlayMaskRef.current)
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
      {instructionsElement}
      <OverlayMask
        ref={overlayMaskRef}
        gradient={args.gradient}
        backgroundColor={args.backgroundColor}
      />
    </div>
  )
}

_OverlayMask.args = {
  gradient: Gradients.GundamPilot,
  backgroundColor: '',
}
_OverlayMask.argTypes = {
  gradient: {control: 'select', options: Gradients},
  backgroundColor: {control: 'text'},
}

_OverlayMask.story = {
  name: 'OverlayMask',

  parameters: {
    readme: {
      content: marked.parse(OverlayMaskReadme),
    },
  },
}

export const _OverlayHeader = (args: Partial<OverlayHeaderProps>) => {
  const overlayHeaderRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(overlayHeaderRef.current)
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
      <OverlayHeader
        ref={overlayHeaderRef}
        title={args.title ?? 'Are you sure?'}
        wrapText={args.wrapText}
        onDismiss={() => {
          alert('Dismissed')
        }}
      >
        <div className="mockComponent mockButton">Child Element</div>
      </OverlayHeader>
    </div>
  )
}

_OverlayHeader.args = {
  title: 'Are you sure?',
  wrapText: false,
}
_OverlayHeader.argTypes = {
  title: {control: 'text'},
  wrapText: {control: 'boolean'},
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
    console.log(overlayBodyRef.current)
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

export const _OverlayFooter = (args: Partial<OverlayFooterProps>) => {
  const overlayFooterRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(overlayFooterRef.current)
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
      <OverlayFooter
        ref={overlayFooterRef}
        justifyContent={args.justifyContent}
      >
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

_OverlayFooter.args = {
  justifyContent: 'flex-end',
}
_OverlayFooter.argTypes = {
  justifyContent: {
    control: 'select',
    options: [
      'flex-start',
      'center',
      'flex-end',
      'space-between',
      'space-around',
    ],
  },
}

_OverlayFooter.story = {
  name: 'OverlayFooter',

  parameters: {
    readme: {
      content: marked.parse(OverlayFooterReadme),
    },
  },
}

export const ConfirmationOverlay = (
  args: Partial<OverlayProps> & Partial<OverlayContainerProps>,
) => {
  const [visible, setVisible] = useState(true)

  return (
    <div className="story--example">
      {instructionsElement}
      <Button text="Toggle Overlay" onClick={() => setVisible(!visible)} />
      <Overlay visible={visible} transitionDuration={args.transitionDuration}>
        <OverlayContainer
          maxWidth={args.maxWidth}
          margin={args.margin}
          fullScreen={args.fullScreen}
        >
          <OverlayHeader
            title="Are you sure?"
            onDismiss={() => {
              alert('Dismissed')
            }}
          />
          <OverlayBody>
            <p>
              This action could cause a lot of things to break unexpectedly.
              We're pretty sure you don't want to do this accidentally. What
              will it be?
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
}

ConfirmationOverlay.args = {
  transitionDuration: 360,
  maxWidth: 400,
  margin: 'md',
  fullScreen: false,
}
ConfirmationOverlay.argTypes = {
  transitionDuration: {control: 'number'},
  maxWidth: {control: 'number'},
  margin: {
    control: 'inline-radio',
    options: {ExtraSmall: 'xs', Small: 'sm', Medium: 'md', Large: 'lg'},
  },
  fullScreen: {control: 'boolean'},
}

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
