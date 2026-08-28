// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {InfluxColors, StandardFunctionProps} from '../../Types'

export interface FormDividerProps extends StandardFunctionProps {
  /** Optional coloration for horizontal rule in divider */
  lineColor?: InfluxColors | string
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const FormDivider: FunctionComponent<FormDividerProps> = ({
  id,
  style,
  className,
  lineColor,
  testID = 'form--divider',
  ref,
}) => {
  const formDividerClass = classnames('cf-form--divider', {
    [`${className}`]: className,
    'cf-form--divider-line': lineColor,
  })

  const formDividerStyle = lineColor
    ? {
        backgroundColor: lineColor,
        ...style,
      }
    : style

  return (
    <div
      id={id}
      ref={ref}
      data-testid={testID}
      style={formDividerStyle}
      className={formDividerClass}
    />
  )
}
