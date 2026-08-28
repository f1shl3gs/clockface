// Libraries
import {useEffect, useState, FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {Gradients, InfluxColors, Omit, ComponentSize} from '../../../Types'
import {ProgressBarProps, ProgressBar} from '../ProgressBar'

export type threshold = {
  floor: number
  color?: InfluxColors | string
  gradient?: Gradients
}

export interface ThresholdBarProps extends Omit<
  ProgressBarProps,
  'barGradient' | 'color'
> {
  /** The current amount */
  value?: number
  /** The total amount */
  max?: number
  /** Controls the size of the bar & text */
  size?: ComponentSize
  /** Descriptive text for what is being valueed */
  label?: string
  /** An array of thresholds and colors to be used at each */
  thresholds?: threshold[]
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const ThresholdBar: FunctionComponent<ThresholdBarProps> = ({
  id,
  style = {width: '300px'},
  testID = 'threshold-bar',
  value = 0,
  max = 100,
  label,
  className,
  thresholds = [
    {
      floor: 0,
      color: InfluxColors.Honeydew,
      gradient: Gradients.HotelBreakfast,
    },
    {
      floor: max * 0.7,
      color: InfluxColors.Thunder,
      gradient: Gradients.CaliforniaCampfire,
    },
    {
      floor: max * 0.9,
      color: InfluxColors.Curacao,
      gradient: Gradients.SavannaHeat,
    },
  ],
  ref,
}) => {
  const [sortedThresholds, setSortedThresholds] =
    useState<threshold[]>(thresholds)

  useEffect(() => {
    const sorted = [...thresholds].sort((a, b) => a.floor - b.floor)
    setSortedThresholds(sorted)
  }, [])

  const thresholdBarClass = classnames('cf-threshold-bar', {
    [`${className}`]: className,
  })

  const thresholdColor = () => {
    const index = sortedThresholds.findLastIndex(thresh => thresh.floor < value)
    if (index < 0) {
      return
    }
    return sortedThresholds[index].color
  }

  const thresholdGradient = () => {
    const index = sortedThresholds.findLastIndex(thresh => thresh.floor < value)
    if (index < 0) {
      return
    }

    return sortedThresholds[index].gradient
  }

  return (
    <ProgressBar
      id={id}
      ref={ref}
      className={thresholdBarClass}
      data-testid={testID}
      style={style}
      color={thresholdColor()}
      barGradient={thresholdGradient()}
      value={value}
      max={max}
      label={label}
    />
  )
}
