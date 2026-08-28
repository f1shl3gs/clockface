// Libraries
import {createRef, KeyboardEvent, useEffect, useState} from 'react'
import {marked} from 'marked'

// Components
import {Accordion} from '../'

// Types
// Notes
import AccordionReadme from './Accordion.md?raw'
import {InputLabel, Toggle} from '../../Inputs'
import {
  AlignItems,
  ComponentSize,
  Direction,
  FlexDirection,
  HeadingElement,
  InputToggleType,
  JustifyContent,
} from '../../../Types'
import {FlexBox, FlexBoxChild} from '../../FlexBox'
import {AccordionBodyItem} from '../AccordionBodyItem'
import {Heading} from '../../Typography'
import {AccordionHeader} from '../AccordionHeader'

export default {title: 'Components / Accordion / Examples'}

export const AccordionWithToggles = () => {
  const accordionRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(accordionRef.current)
    /* eslint-enable */
  }

  const margin = {marginRight: '10px'}
  const states = {
    telegraf1: {
      read: false,
      write: false,
    },
    telegraf2: {
      read: false,
      write: false,
    },
  }

  const states2 = {
    bucket1: {
      read: false,
      write: false,
    },
    bucket2: {
      read: false,
      write: false,
    },
  }

  const [readAccss, setReadAccess] = useState(false)
  const [writeAccess, setWriteAccess] = useState(false)
  const [individualAccessStates, setIndividualAccessStates] = useState(states)

  const [readAccss2, setReadAccess2] = useState(false)
  const [writeAccess2, setWriteAccess2] = useState(false)
  const [individualAccessStates2, setIndividualAccessStates2] =
    useState(states2)

  const disabled = false

  useEffect(() => {
    toggleAllIndividualAccessStates(
      'read',
      readAccss,
      individualAccessStates,
      setIndividualAccessStates
    )
  }, [readAccss])

  useEffect(() => {
    toggleAllIndividualAccessStates(
      'write',
      writeAccess,
      individualAccessStates,
      setIndividualAccessStates
    )
  }, [writeAccess])

  useEffect(() => {
    toggleAllIndividualAccessStates(
      'read',
      readAccss2,
      individualAccessStates2,
      setIndividualAccessStates2
    )
  }, [readAccss2])

  useEffect(() => {
    toggleAllIndividualAccessStates(
      'write',
      writeAccess2,
      individualAccessStates2,
      setIndividualAccessStates2
    )
  }, [writeAccess2])

  const handleToggleChange = (checked: boolean, setChecked: Function): void => {
    setChecked(!checked)
  }

  type AccessStates = Record<string, Record<string, boolean>>

  const handleArrayToggleChange = (
    name: string,
    actionType: string,
    stateObject: AccessStates,
    setter: Function
  ): void => {
    const object = Object.assign({}, stateObject) as AccessStates
    const newState = {
      [name]: {
        [actionType]: !object[name][`${actionType}`],
      },
    }
    const newerObject = {[name]: {...object[name], ...newState[name]}}
    const newObject = {...object, ...newerObject}
    setter(newObject)
  }

  const toggleAllIndividualAccessStates = (
    actionType: string,
    state: boolean,
    stateObject: AccessStates,
    setter: Function
  ): void => {
    const object = Object.assign({}, stateObject) as AccessStates
    Object.keys(object).forEach(element => {
      const newState = {[actionType]: state}
      const value = object[element]

      object[element] = {...value, ...newState}
    })
    setter(object)
  }

  const accordionHeader = (
    id: string,
    title: string,
    states: boolean[],
    setters: Function[]
  ) => (
    <FlexBox
      margin={ComponentSize.Small}
      justifyContent={JustifyContent.SpaceBetween}
      direction={FlexDirection.Row}
      stretchToFitWidth={true}
      alignItems={AlignItems.Center}
      style={{textAlign: 'start'}}
    >
      <FlexBoxChild basis={40} grow={8}>
        <InputLabel size={ComponentSize.Medium}>{title}</InputLabel>
      </FlexBoxChild>
      <FlexBoxChild grow={1}>
        <Toggle
          id={id}
          type={InputToggleType.Checkbox}
          onChange={() => handleToggleChange(states[0], setters[0])}
          size={ComponentSize.ExtraSmall}
          checked={states[0]}
          style={margin}
          tabIndex={0}
          onKeyUp={(e: KeyboardEvent) => {
            e.stopPropagation()
          }}
          disabled={disabled}
        />
      </FlexBoxChild>
      <FlexBoxChild grow={1}>
        <Toggle
          id={id + '1'}
          type={InputToggleType.Checkbox}
          onChange={() => handleToggleChange(states[1], setters[1])}
          onKeyUp={(e: KeyboardEvent) => {
            e.stopPropagation()
          }}
          size={ComponentSize.ExtraSmall}
          checked={states[1]}
          style={margin}
          tabIndex={0}
          disabled={disabled}
        />
      </FlexBoxChild>
    </FlexBox>
  )
  const accordionBody = (
    id: string,
    title: string,
    name: string,
    setter: Function,
    stateObject: AccessStates
  ) => (
    <FlexBox
      margin={ComponentSize.Small}
      justifyContent={JustifyContent.SpaceBetween}
      direction={FlexDirection.Row}
      stretchToFitWidth={true}
      alignItems={AlignItems.Center}
      /* onClick={(e: MouseEvent<HTMLElement>) => {
        e.stopPropagation()
      }} */
      style={{textAlign: 'start'}}
    >
      <FlexBoxChild basis={40} grow={8}>
        <InputLabel size={ComponentSize.Medium}>{title}</InputLabel>
      </FlexBoxChild>
      <FlexBoxChild grow={1}>
        <Toggle
          id={id}
          type={InputToggleType.Checkbox}
          onChange={() =>
            handleArrayToggleChange(
              name,
              'read',
              individualAccessStates,
              setter
            )
          }
          size={ComponentSize.ExtraSmall}
          checked={stateObject[name]['read']}
          style={margin}
          tabIndex={0}
          onKeyUp={(e: KeyboardEvent) => {
            e.stopPropagation()
          }}
          disabled={disabled}
        />
      </FlexBoxChild>
      <FlexBoxChild grow={1}>
        <Toggle
          id={id + '1'}
          type={InputToggleType.Checkbox}
          onChange={() =>
            handleArrayToggleChange(
              name,
              'write',
              individualAccessStates,
              setter
            )
          }
          onKeyUp={(e: KeyboardEvent) => {
            e.stopPropagation()
          }}
          size={ComponentSize.ExtraSmall}
          checked={stateObject[name]['write']}
          style={margin}
          tabIndex={0}
          disabled={disabled}
        />
      </FlexBoxChild>
    </FlexBox>
  )

  return (
    <div
      className="story--example"
      style={{justifyContent: 'none', alignItems: 'start', display: 'block'}}
    >
      <Accordion
        iconDirection={(Direction as Record<string, any>)['Left']}
        expanded={false}
        disabled={disabled}
        style={{}}
        onChange={() => {
          /* eslint-disable */
          console.log('hello')
          /* eslint-disable */
        }}
      >
        <AccordionHeader>
          {accordionHeader(
            '0',
            'Telegraf Configurations',
            [readAccss, writeAccess],
            [setReadAccess, setWriteAccess]
          )}
        </AccordionHeader>
        <AccordionBodyItem>
          <InputLabel size={ComponentSize.Medium}>
            {'Individual Telegraf Configurations'}
          </InputLabel>
        </AccordionBodyItem>
        <AccordionBodyItem>
          {accordionBody(
            '1',
            'Telegraf Configuration 1',
            'telegraf1',
            setIndividualAccessStates,
            individualAccessStates
          )}
        </AccordionBodyItem>
        <AccordionBodyItem>
          {accordionBody(
            '2',
            'Telegraf Configuration 2',
            'telegraf2',
            setIndividualAccessStates,
            individualAccessStates
          )}
        </AccordionBodyItem>
      </Accordion>
      <Accordion
        iconDirection={(Direction as Record<string, any>)['Left']}
        expanded={false}
        disabled={disabled}
        style={{}}
      >
        <AccordionHeader>
          {accordionHeader(
            '5',
            'Bucket',
            [readAccss2, writeAccess2],
            [setReadAccess2, setWriteAccess2]
          )}
        </AccordionHeader>
        <AccordionBodyItem>
          <InputLabel size={ComponentSize.Medium}>
            {'Individual Telegraf Configurations'}
          </InputLabel>
        </AccordionBodyItem>
        <AccordionBodyItem>
          {accordionBody(
            '6',
            'Bucket 1',
            'bucket1',
            setIndividualAccessStates2,
            individualAccessStates2
          )}
        </AccordionBodyItem>
        <AccordionBodyItem>
          {accordionBody(
            '7',
            'Bucket 2',
            'bucket2',
            setIndividualAccessStates2,
            individualAccessStates2
          )}
        </AccordionBodyItem>
      </Accordion>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

AccordionWithToggles.story = {
  name: 'Accordion with Toggles',

  parameters: {
    readme: {
      content: marked.parse(AccordionReadme),
    },
  },
}

export const AccordionWithPlainTexts = () => {
  const accordionRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(accordionRef.current)
    /* eslint-enable */
  }
  const disabled = false

  return (
    <div
      className="story--example"
      style={{justifyContent: 'none', alignItems: 'start', display: 'block'}}
    >
      {' '}
      <Accordion
        iconDirection={(Direction as Record<string, any>)['Left']}
        expanded={false}
        disabled={disabled}
        style={{}}
        ref={accordionRef}
      >
        <AccordionHeader>
          <span>Cheese Ipsum</span>
        </AccordionHeader>
        <AccordionBodyItem>
          <span>
            This is your detailed body. This is your detailed body. This is your
            detailed body. This is your detailed body. This is your detailed
            body. This is your detailed body.
          </span>
        </AccordionBodyItem>
      </Accordion>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

AccordionWithPlainTexts.story = {
  name: 'Accordion with plain texts',

  parameters: {
    readme: {
      content: marked.parse(AccordionReadme),
    },
  },
}

export const _Accordion = () => {
  const accordionRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(accordionRef.current)
    /* eslint-enable */
  }
  const disabled = false

  return (
    <div
      className="story--example"
      style={{justifyContent: 'none', alignItems: 'start', display: 'block'}}
    >
      <Accordion
        iconDirection={(Direction as Record<string, any>)['Left']}
        expanded={false}
        disabled={disabled}
        style={{}}
        ref={accordionRef}
      >
        <AccordionHeader>
          <Heading element={HeadingElement.H6} appearance={HeadingElement.Div}>
            Cheese Ipsum
          </Heading>
        </AccordionHeader>
        <AccordionBodyItem>
          <span>
            This is your detailed body. This is your detailed body. This is your
            detailed body. This is your detailed body. This is your detailed
            body. This is your detailed body.This is your detailed body. This is
            your detailed body. This is your detailed body. This is your
            detailed body. This is your detailed body. This is your detailed
            body.This is your detailed body. This is your detailed body. This is
            your detailed body. This is your detailed body. This is your
            detailed body. This is your detailed body.
          </span>
        </AccordionBodyItem>
      </Accordion>
      <Accordion disabled={disabled}>
        <AccordionHeader>
          <Heading element={HeadingElement.H6} appearance={HeadingElement.Div}>
            Accordion with No Body Item
          </Heading>
        </AccordionHeader>
      </Accordion>

      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_Accordion.story = {
  parameters: {
    readme: {
      content: marked.parse(AccordionReadme),
    },
  },
}
