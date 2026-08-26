// Libraries
import {Colord, colord, extend} from 'colord'
import labPlugin from 'colord/plugins/lab'
import mixPlugin from 'colord/plugins/mix'

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

export {colord}
