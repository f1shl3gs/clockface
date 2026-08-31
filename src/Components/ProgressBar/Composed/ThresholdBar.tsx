// Libraries
import {FunctionComponent, Ref, useMemo} from 'react'
import classnames from 'classnames'

// Types
import {Gradients, InfluxColors, ComponentSize} from '../../../Types'
import {ProgressBarProps, ProgressBar} from '../ProgressBar'

export type Threshold = {
  floor: number
  color?: InfluxColors | string
  gradient?: Gradients
}

export interface ThresholdBarProps
  extends Omit<ProgressBarProps, 'barGradient' | 'color'> {
  /** The current amount */
  value?: number
  /** The total amount */
  max?: number
  /** Controls the size of the bar & text */
  size?: ComponentSize
  /** Descriptive text for what is being valued */
  label?: string
  /** An array of thresholds and colors to be used at each */
  thresholds?: Threshold[]
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
  const last = useMemo(() => {
    const sorted = [...thresholds].sort((a, b) => a.floor - b.floor)
    return sorted.findLast(threshold => threshold.floor < value)
  }, [thresholds])

  const thresholdBarClass = classnames('cf-threshold-bar', {
    [`${className}`]: className,
  })

  return (
    <ProgressBar
      id={id}
      ref={ref}
      className={thresholdBarClass}
      data-testid={testID}
      style={style}
      color={last?.color}
      barGradient={last?.gradient}
      value={value}
      max={max}
      label={label}
    />
  )
}
