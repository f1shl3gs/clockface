// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {Gradients, InfluxColors, StandardFunctionProps} from '../../Types'

// Styles
import './GradientBox.scss'
import {generateBackgroundStyle} from '../../Utils'

export interface GradientBoxProps extends StandardFunctionProps {
  /** Controls the border gradient color */
  borderGradient?: Gradients
  /** Controls the border gradient color */
  borderColor?: InfluxColors | string
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const GradientBox: FunctionComponent<GradientBoxProps> = ({
  id,
  style,
  testID = 'gradient-box',
  children,
  className,
  borderColor = 'none',
  borderGradient,
  ref,
}) => {
  const gradientBoxClass = classnames('cf-gradient-box', {
    [`${className}`]: className,
  })

  const gradientBoxStyle = {
    ...generateBackgroundStyle(borderColor, borderGradient),
    ...style,
  }

  return (
    <div
      id={id}
      ref={ref}
      className={gradientBoxClass}
      data-testid={testID}
      style={gradientBoxStyle}
    >
      {children}
    </div>
  )
}
