// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {IconFont, StandardFunctionProps} from '../../../Types'

export interface IconProps extends StandardFunctionProps {
  /** Icon to display */
  glyph: IconFont | string
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLSpanElement>
}

export const Icon: FunctionComponent<IconProps> = ({
  id,
  glyph,
  style,
  testID = 'icon',
  className,
  ref,
}) => {
  const iconClassName = classnames('cf-icon', {
    [`${glyph}`]: glyph,
    [`${className}`]: className,
  })

  return (
    <span
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={iconClassName}
    />
  )
}
