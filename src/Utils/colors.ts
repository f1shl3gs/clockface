// Libraries
import {CSSProperties} from 'react'
import {Colord, colord, extend} from 'colord'
import labPlugin from 'colord/plugins/lab'
import mixPlugin from 'colord/plugins/mix'

// Types
import {Gradients, Gradient, DropdownMenuTheme} from '../Types'

// Constants
import {dropdownScrollColors, influxGradients} from '../Constants/colors'

extend([labPlugin, mixPlugin])

// WCAG 2.x relative luminance, unrounded
export const relativeLuminance = (color: string): number => {
  const linearize = (channel: number): number => {
    const s = channel / 255
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
  }
  const {r, g, b} = colord(color).toRgb()
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b)
}

export const contrastRatio = (a: string, b: string): number => {
  const la = relativeLuminance(a)
  const lb = relativeLuminance(b)
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05)
}

// Equivalent of chroma-js color.brighten(): raises CIE lightness by 18
export const brighten = (color: string): Colord => {
  const {l, a, b} = colord(color).toLab()
  return colord({l: Math.min(l + 18, 100), a, b})
}

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
