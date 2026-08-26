// Libraries
import {CSSProperties} from 'react'
import {colord} from './colord'

// Types
import {Gradients, Gradient, DropdownMenuTheme} from '../Types'

// Constants
import {dropdownScrollColors, influxGradients} from '../Constants/colors'

export const getColorsFromGradient = (
  gradient: Gradients | DropdownMenuTheme | string
): Gradient => {
  const dropdownColors = dropdownScrollColors as Record<string, Gradient>
  const gradients = influxGradients as Record<string, Gradient>

  return dropdownColors[gradient] || gradients[gradient]
}

export interface CSSGradientColor {
  position: number
  color: string
}

export const generateInlineCSSGradient = (
  angle: number,
  colors: CSSGradientColor[]
): CSSProperties => {
  const angleText = `${angle}deg`

  const colorsText = colors.map(color => {
    return `${color.color} ${color.position}%`
  })

  const joinedProperties = [angleText, ...colorsText].join(', ')

  return {background: `linear-gradient(${joinedProperties})`}
}

export const getAverageColorFromLinearGradient = (
  linearGradient: string
): string => {
  const rgbColors = linearGradient.match(
    /[rR][gG][bB][(]\d+[,]\s\d+[,]\s\d+[)]/g
  )

  // This function could fail if a linear gradient string is passed in using hexcodes
  // Didn't seem worth the time to make it more resilient since it is only
  // used within the button contrast tester widget

  if (rgbColors && rgbColors.length === 2) {
    return colord(rgbColors[0]).mix(rgbColors[1]).toRgbString()
  }

  return 'fail'
}
