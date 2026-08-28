// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {
  ComponentColor,
  ComponentSize,
  ButtonShape,
  StandardFunctionProps,
} from '../../Types'

// Styles
import './SelectGroup.scss'

export interface SelectGroupProps extends StandardFunctionProps {
  /** SelectGroup color */
  color?: ComponentColor
  /** SelectGroup size */
  size?: ComponentSize
  /** Shape... */
  shape?: ButtonShape
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const SelectGroup: FunctionComponent<SelectGroupProps> = ({
  id,
  size = ComponentSize.Small,
  style,
  shape = ButtonShape.Default,
  color = ComponentColor.Primary,
  testID = 'select-group',
  children,
  className,
  ref,
}) => {
  const radioClassName = classnames('cf-select-group', {
    [`cf-select-group__${color}`]: color,
    [`cf-select-group__${size}`]: size,
    'cf-select-group__square': shape === ButtonShape.Square,
    'cf-select-group__stretch': shape === ButtonShape.StretchToFit,
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={radioClassName}
    >
      {children}
    </div>
  )
}
