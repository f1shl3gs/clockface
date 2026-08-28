// Libraries
import {CSSProperties, FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {InfluxColors, Gradients, StandardFunctionProps} from '../../Types'

// Constants
import {getColorsFromGradient} from '../../Utils/colors'

export interface OverlayMaskProps extends StandardFunctionProps {
  /** Optional gradient theme of panel*/
  gradient?: Gradients
  /** Optional background color of panel, supercedes gradient prop  */
  backgroundColor?: InfluxColors | string
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const OverlayMask: FunctionComponent<OverlayMaskProps> = ({
  id,
  style,
  testID = 'overlay--mask',
  gradient,
  className,
  backgroundColor,
  ref,
}) => {
  const overlayMaskClass = classnames('cf-overlay--mask', {
    [`${className}`]: className,
  })

  const overlayMaskStyle = (): CSSProperties => {
    if (backgroundColor) {
      return {backgroundColor, ...style}
    }

    let cssGradient =
      'var(--default-overlay-gradient) var(--default-overlay-background)'
    if (gradient) {
      const colors = getColorsFromGradient(gradient)
      cssGradient = `linear-gradient(45deg,  ${colors.start} 0%,${colors.stop} 100%)`
    }

    return {
      background: cssGradient,
      ...style,
    }
  }

  return (
    <div
      id={id}
      ref={ref}
      style={overlayMaskStyle()}
      className={overlayMaskClass}
      data-testid={testID}
    />
  )
}
