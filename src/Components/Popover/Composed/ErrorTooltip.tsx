// Libraries
import React, {useRef, CSSProperties, FunctionComponent, Ref} from 'react'
import classnames from 'classnames'
import {Icon} from '../../Icon'

// Components
import {Popover} from '../'

// Types
import {
  StandardFunctionProps,
  ComponentColor,
  PopoverInteraction,
  Appearance,
  IconFont,
  PopoverPosition,
} from '../../../Types'

// Styles
import './ErrorTooltip.scss'

export interface ErrorTooltipProps extends StandardFunctionProps {
  /** Controls the size of the question mark circle */
  diameter?: number
  /** Contents to display in tooltip */
  tooltipContents: React.ReactElement | string
  /** Useful for customizing the tooltip itself */
  tooltipStyle?: CSSProperties
  /** Useful for defining where tooltip should appear relative to the icon */
  position?: PopoverPosition
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLSpanElement>
}

export const ErrorTooltip: FunctionComponent<ErrorTooltipProps> = ({
  id,
  style,
  className,
  tooltipStyle,
  diameter = 17,
  tooltipContents,
  position = PopoverPosition.Above,
  testID = 'error-tooltip',
  ref,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const color = ComponentColor.Danger
  const circleClassName = classnames('cf-error-tooltip', {
    [`${className}`]: className,
  })

  const iconStyle = {
    lineHeight: `${diameter}px`,
    fontSize: `${diameter}px`,
    ...style,
  }

  return (
    <span ref={ref}>
      <div
        className={circleClassName}
        ref={triggerRef}
        style={iconStyle}
        data-testid={testID}
      >
        <Icon glyph={IconFont.AlertTriangle} />
      </div>
      <Popover
        distanceFromTrigger={8}
        triggerRef={triggerRef}
        showEvent={PopoverInteraction.Hover}
        hideEvent={PopoverInteraction.Hover}
        contents={() => <>{tooltipContents}</>}
        testID={`${testID}--tooltip`}
        style={tooltipStyle}
        color={color}
        appearance={Appearance.Outline}
        id={id}
        position={position}
        caretSize={8}
      />
    </span>
  )
}
