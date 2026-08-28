// Libraries
import React, {useState, useEffect, FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {Direction, StandardFunctionProps} from '../../Types'

// Styles
import './Accordion.scss'

export interface AccordionProps extends StandardFunctionProps {
  /** Determines whether the expand Icon is at the left, right or doesn't exist. If there is no accordionBody, no icons are shown*/
  iconPlacement?: Direction
  /** Determines whether the accordion is expanded by default or not */
  expanded?: boolean
  /** Prevents any interaction with this element, including the onClick function */
  disabled?: boolean
  /** Function to be called when the accordion is expanded or collapsed */
  onChange?: () => void
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const AccordionContext = React.createContext<
  | {
      isExpanded: boolean
      setExpanded: (param: boolean) => void
      iconPlacementPosition: Direction
      isDisabled: boolean
      onChange: () => void
      hasBody: boolean
    }
  | undefined
>(undefined)

export const useAccordionContext = () => {
  const context = React.useContext(AccordionContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export const Accordion: FunctionComponent<AccordionProps> = ({
  id,
  style,
  testID = 'accordion',
  children,
  iconPlacement = Direction.Left,
  className,
  expanded = false,
  disabled = false,
  onChange,
  ref,
}) => {
  const accordionClassName = classnames('cf-accordion', {
    [`${className}`]: className,
  })

  const [isExpanded, setExpanded] = useState(expanded)
  const [animation, setAnimation] = useState(false)
  const [isDisabled, setDisabled] = useState(disabled)
  const [iconPlacementPosition, setIconPlacementPosition] =
    useState(iconPlacement)

  useEffect(() => {
    setExpanded(expanded)
  }, [expanded])

  useEffect(() => {
    setDisabled(disabled)
  }, [disabled])

  useEffect(() => {
    if (isExpanded && !animation) {
      setAnimation(true)
    }
  }, [isExpanded])

  useEffect(() => {
    setIconPlacementPosition(iconPlacement)
  }, [iconPlacement])

  const accordionBodyContainerClassName = classnames(
    'cf-accordion--body-container',
    {
      [`cf-accordion--body-container--expanded`]: isExpanded,
      [`cf-accordion--body-container--collapsed`]: !isExpanded,
      [`cf-accordion--body-container--disable-animation`]: !animation,
    }
  )

  const [header, ...body] = React.Children.toArray(children)
  const hasBody = body.length ? true : false

  /* eslint-disable */
  const onChangeFunction = () => {
    if (onChange) {
      onChange()
    } else {
      return
    }
  }
  const contextState = {
    isExpanded,
    setExpanded,
    iconPlacementPosition: hasBody ? iconPlacementPosition : Direction.None,
    isDisabled,
    onChange: onChangeFunction,
    hasBody,
  }

  return (
    <div
      ref={ref}
      className={accordionClassName}
      data-testid={testID}
      id={id}
      style={style}
    >
      <AccordionContext.Provider value={contextState}>
        {header}
        <div className={accordionBodyContainerClassName}>{body}</div>
      </AccordionContext.Provider>
    </div>
  )
}
