// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Base/Icon'

// Types
import {
  IconFont,
  StandardFunctionProps,
  InfluxColors,
  ComponentSize,
} from '../../../Types'

// Styles
import './Bullet.scss'

export interface BulletProps extends StandardFunctionProps {
  /** Icon to display */
  glyph?: IconFont | string
  /** Text to display */
  text?: string | number
  /** Coloration of bullet circle */
  backgroundColor?: InfluxColors | string
  /** Coloration of bullet text or icon */
  color?: InfluxColors | string
  /** Size of bullet */
  size?: ComponentSize
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLSpanElement>
}

export const Bullet: FunctionComponent<BulletProps> = ({
  id,
  text,
  glyph,
  size = ComponentSize.Small,
  color,
  style,
  testID = 'bullet',
  className,
  backgroundColor,
  ref,
}) => {
  const bulletClassName = classnames('cf-bullet', className, {
    [`cf-bullet__${size}`]: size,
  })

  const bulletStyle = {
    backgroundColor,
    color,
    ...style,
  }

  return (
    <span
      className={bulletClassName}
      data-testid={testID}
      style={bulletStyle}
      ref={ref}
      id={id}
    >
      {glyph ? <Icon glyph={glyph} /> : text}
    </span>
  )
}
