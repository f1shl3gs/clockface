// Libraries
import {createRef, useState} from 'react'
import {marked} from 'marked'

// Components
import {ButtonBase, ButtonBaseRef} from '../Base/ButtonBase'
import {ButtonBaseContrastTester} from '../Base/ButtonBaseContrastTester'
import {Button, ButtonRef} from '../Composed/Button'
import {SquareButton, SquareButtonRef} from '../Composed/SquareButton'
import {ConfirmationButton} from '../Composed/ConfirmationButton'
import {DismissButton, DismissButtonRef} from '../Composed/DismissButton'
import {CTAButton, CTAButtonRef} from '../Composed/CTAButton'
import {CTALinkButton, CTALinkButtonRef} from '../Composed/CTALinkButton'
import {LinkButton, LinkButtonRef} from '../Composed/LinkButton'
import {ButtonGroup, ButtonGroupRef} from '../Composed/ButtonGroup'
import {SelectDropdown} from '../../Dropdowns/Composed/SelectDropdown'

// Types
import {
  Appearance,
  ComponentColor,
  ComponentSize,
  IconFont,
  ButtonShape,
  ComponentStatus,
  ButtonType,
  LinkRel,
  LinkTarget,
  Orientation,
} from '../../../Types'

// Notes
import ButtonBaseReadme from './ButtonBase.md?raw'
import ButtonReadme from './Button.md?raw'
import SquareButtonReadme from './SquareButton.md?raw'
import ConfirmationButtonReadme from './ConfirmationButton.md?raw'
import DismissButtonReadme from './DismissButton.md?raw'
import CTAButtonReadme from './CTAButton.md?raw'
import CTALinkButtonReadme from './CTALinkButton.md?raw'
import LinkButtonReadme from './LinkButton.md?raw'
import ButtonGroupReadme from './ButtonGroup.md?raw'
import ButtonBaseContrastTesterReadme from './ButtonBaseContrastTester.md?raw'

export default {title: 'Components/Buttons/Base'}

export const StandardButton = () => {
  const buttonRef = createRef<ButtonRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(buttonRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <Button
        ref={buttonRef}
        text={'Button Text'}
        onClick={() => alert('clicked')}
        icon={(IconFont as Record<string, any>)['None']}
        titleText={'Title Text'}
        disabledTitleText={'Disabled Text'}
        color={(ComponentColor as Record<string, any>)['Default']}
        size={(ComponentSize as Record<string, any>)['Small']}
        shape={(ButtonShape as Record<string, any>)['Default']}
        status={(ComponentStatus as Record<string, any>)['Default']}
        active={false}
        type={(ButtonType as Record<string, any>)['Button']}
        placeIconAfterText={false}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

StandardButton.story = {
  name: 'StandardButton',

  parameters: {
    readme: {
      content: marked.parse(ButtonReadme),
    },
  },
}

export const ContrastTester = () => {
  return (
    <div className="story--example">
      <ButtonBaseContrastTester />
    </div>
  )
}

ContrastTester.story = {
  parameters: {
    readme: {
      content: marked.parse(ButtonBaseContrastTesterReadme),
    },
  },
}

export const _SquareButton = () => {
  const buttonRef = createRef<SquareButtonRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(buttonRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <SquareButton
        ref={buttonRef}
        onClick={() => alert('clicked')}
        icon={(IconFont as Record<string, any>)['Zap']}
        titleText={'Title Text'}
        disabledTitleText={'Disabled Text'}
        color={(ComponentColor as Record<string, any>)['Default']}
        size={(ComponentSize as Record<string, any>)['Small']}
        status={(ComponentStatus as Record<string, any>)['Default']}
        active={false}
        type={(ButtonType as Record<string, any>)['Button']}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_SquareButton.story = {
  name: 'SquareButton',

  parameters: {
    readme: {
      content: marked.parse(SquareButtonReadme),
    },
  },
}

export const _ConfirmationButton = () => {
  const onShow = (): void => {
    /* eslint-disable */
    console.log('calling onShow')
    /* eslint-enable */
  }

  const onHide = (): void => {
    /* eslint-disable */
    console.log('calling onHide')
    /* eslint-enable */
  }

  return (
    <div className="story--example story--example__medium">
      <ConfirmationButton
        confirmationButtonText={'Yes, Delete it'}
        onShow={onShow}
        onHide={onHide}
        confirmationButtonColor={
          (ComponentColor as Record<string, any>)['Danger']
        }
        confirmationLabel={'Really delete your soul?'}
        popoverColor={(ComponentColor as Record<string, any>)['Default']}
        popoverAppearance={(Appearance as Record<string, any>)['Outline']}
        onConfirm={value => alert(`returnValue: ${value}`)}
        returnValue={''}
        icon={(IconFont as Record<string, any>)['Trash_New']}
        disabledTitleText={'Disabled Text'}
        titleText={'Title Text'}
        color={(ComponentColor as Record<string, any>)['Danger']}
        size={(ComponentSize as Record<string, any>)['Small']}
        shape={(ButtonShape as Record<string, any>)['Default']}
        text={'Delete Soul'}
        status={(ComponentStatus as Record<string, any>)['Default']}
      />
    </div>
  )
}

_ConfirmationButton.story = {
  name: 'ConfirmationButton',

  parameters: {
    readme: {
      content: marked.parse(ConfirmationButtonReadme),
    },
  },
}

export const _DismissButton = () => {
  const buttonRef = createRef<DismissButtonRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(buttonRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div
        style={{
          width: '200px',
          height: '100px',
          position: 'relative',
          backgroundColor: '#292933',
        }}
      >
        <DismissButton
          ref={buttonRef}
          onClick={() => alert('Clicked!')}
          disabledTitleText={'Disabled Text'}
          color={(ComponentColor as Record<string, any>)['Danger']}
          size={(ComponentSize as Record<string, any>)['ExtraSmall']}
          status={(ComponentStatus as Record<string, any>)['Default']}
        />
      </div>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_DismissButton.story = {
  name: 'DismissButton',

  parameters: {
    readme: {
      content: marked.parse(DismissButtonReadme),
    },
  },
}

export const CtaButton = () => {
  const buttonRef = createRef<CTAButtonRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(buttonRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
      <CTAButton
        ref={buttonRef}
        onClick={() => alert('Clicked!')}
        disabledTitleText={'Disabled Text'}
        color={(ComponentColor as Record<string, any>)['Success']}
        status={(ComponentStatus as Record<string, any>)['Default']}
        shape={(ButtonShape as Record<string, any>)['Default']}
        text={'Buy Now'}
        icon={(IconFont as Record<string, any>)['None']}
        placeIconAfterText={false}
      />
    </div>
  )
}

CtaButton.story = {
  name: 'CTAButton',

  parameters: {
    readme: {
      content: marked.parse(CTAButtonReadme),
    },
  },
}

export const BaseButton = () => {
  const buttonRef = createRef<ButtonBaseRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(buttonRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <ButtonBase
        ref={buttonRef}
        onClick={() => alert('clicked')}
        titleText={'Title Text'}
        disabledTitleText={'Disabled Text'}
        color={(ComponentColor as Record<string, any>)['Default']}
        size={(ComponentSize as Record<string, any>)['Small']}
        shape={(ButtonShape as Record<string, any>)['Default']}
        status={(ComponentStatus as Record<string, any>)['Default']}
        active={false}
        type={(ButtonType as Record<string, any>)['Button']}
      >
        {'Button Text'}
      </ButtonBase>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

BaseButton.story = {
  parameters: {
    readme: {
      content: marked.parse(ButtonBaseReadme),
    },
  },
}

export const _LinkButton = () => {
  const buttonRef = createRef<LinkButtonRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(buttonRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <LinkButton
        href={'http://www.example.com'}
        target={(LinkTarget as Record<string, any>)['Blank']}
        rel={(LinkRel as Record<string, any>)['None']}
        ref={buttonRef}
        icon={(IconFont as Record<string, any>)['Zap']}
        text={'Yeehaw'}
        titleText={'Title Text'}
        disabledTitleText={'Disabled Text'}
        color={(ComponentColor as Record<string, any>)['Default']}
        size={(ComponentSize as Record<string, any>)['Small']}
        status={(ComponentStatus as Record<string, any>)['Default']}
        shape={(ButtonShape as Record<string, any>)['Default']}
        active={false}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_LinkButton.story = {
  name: 'LinkButton',

  parameters: {
    readme: {
      content: marked.parse(LinkButtonReadme),
    },
  },
}

export const CtaLinkButton = () => {
  const buttonRef = createRef<CTALinkButtonRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(buttonRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <CTALinkButton
        href={'http://www.example.com'}
        target={(LinkTarget as Record<string, any>)['Blank']}
        rel={(LinkRel as Record<string, any>)['None']}
        ref={buttonRef}
        icon={(IconFont as Record<string, any>)['Zap']}
        text={'Yeehaw'}
        titleText={'Title Text'}
        disabledTitleText={'Disabled Text'}
        color={(ComponentColor as Record<string, any>)['Success']}
        status={(ComponentStatus as Record<string, any>)['Default']}
        shape={(ButtonShape as Record<string, any>)['Default']}
        active={false}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

CtaLinkButton.story = {
  name: 'CTALinkButton',

  parameters: {
    readme: {
      content: marked.parse(CTALinkButtonReadme),
    },
  },
}

export const _ButtonGroup = () => {
  const dropdownItems = ['Crawl', 'Walk', 'Run']
  const [selectedOption, selectOption] = useState<string>(dropdownItems[1])
  const buttonGroupRef = createRef<ButtonGroupRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(buttonGroupRef.current)
    /* eslint-enable */
  }

  const handleSelection = (item: string): void => {
    selectOption(item)
  }

  return (
    <div className="story--example">
      <ButtonGroup
        ref={buttonGroupRef}
        orientation={(Orientation as Record<string, any>)['Horizontal']}
      >
        <SelectDropdown
          options={dropdownItems}
          onSelect={handleSelection}
          selectedOption={selectedOption}
          style={{width: '100px'}}
          buttonColor={(ComponentColor as Record<string, any>)['Default']}
          buttonSize={(ComponentSize as Record<string, any>)['Small']}
        />
        <Button
          text="Pineapple"
          color={(ComponentColor as Record<string, any>)['Default']}
          size={(ComponentSize as Record<string, any>)['Small']}
        />
        <Button
          text="Coconut"
          color={(ComponentColor as Record<string, any>)['Default']}
          size={(ComponentSize as Record<string, any>)['Small']}
        />
        <SquareButton
          icon={IconFont.CrownSolid_New}
          color={(ComponentColor as Record<string, any>)['Default']}
          size={(ComponentSize as Record<string, any>)['Small']}
        />
        <SquareButton
          icon={IconFont.Flask}
          color={(ComponentColor as Record<string, any>)['Default']}
          size={(ComponentSize as Record<string, any>)['Small']}
        />
        <ConfirmationButton
          confirmationButtonText={'Yes, Delete it'}
          confirmationButtonColor={
            (ComponentColor as Record<string, any>)['Danger']
          }
          confirmationLabel={'Really delete your soul?'}
          popoverColor={(ComponentColor as Record<string, any>)['Default']}
          popoverAppearance={(Appearance as Record<string, any>)['Outline']}
          onConfirm={value => alert(`returnValue: ${value}`)}
          icon={IconFont.Trash_New}
          titleText={'Title Text'}
          disabledTitleText={'Disabled Text'}
          color={(ComponentColor as Record<string, any>)['Default']}
          size={(ComponentSize as Record<string, any>)['Small']}
          text="Delete"
          returnValue="Piña Colada"
        />
      </ButtonGroup>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_ButtonGroup.story = {
  name: 'ButtonGroup',

  parameters: {
    readme: {
      content: marked.parse(ButtonGroupReadme),
    },
  },
}

export const Collage = () => {
  return (
    <div className="story--example">
      <table className="two-axis-table two-axis-table--spaced">
        <tbody>
          <tr>
            <td>
              <code>Size</code>
            </td>
            {[
              {size: ComponentSize.ExtraSmall, text: 'ExtraSmall'},
              {size: ComponentSize.Small, text: 'Small'},
              {size: ComponentSize.Medium, text: 'Medium'},
              {size: ComponentSize.Large, text: 'Large'},
            ].map((props, i) => (
              <td key={i}>
                <Button {...props} />
              </td>
            ))}
          </tr>
          <tr>
            <td>
              <code>Color</code>
            </td>
            {[
              {color: ComponentColor.Default},
              {color: ComponentColor.Primary},
              {color: ComponentColor.Danger},
              {color: ComponentColor.Tertiary},
              {color: ComponentColor.Colorless},
            ].map((props, i) => (
              <td key={i}>
                <Button text={props.color.toString()} {...props} />
              </td>
            ))}
          </tr>
          <tr>
            <td>
              <code>Shape</code>
            </td>
            {[
              {shape: ButtonShape.Default},
              {shape: ButtonShape.Square, text: ''},
              {shape: ButtonShape.StretchToFit},
            ].map((props, i) => (
              <td key={i}>
                <Button
                  icon={IconFont.Zap}
                  text={props.shape.toString()}
                  {...props}
                />
              </td>
            ))}
          </tr>
          <tr>
            <td>
              <code>Status</code>
            </td>
            {[
              {status: ComponentStatus.Default},
              {status: ComponentStatus.Disabled},
              {status: ComponentStatus.Loading},
              {status: ComponentStatus.Error},
              {status: ComponentStatus.Valid},
            ].map((props, i) => (
              <td key={i}>
                <Button text={props.status.toString()} {...props} />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Collage.story = {
  parameters: {
    readme: {
      content: marked.parse(ButtonReadme),
    },
  },
}
