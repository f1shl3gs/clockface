// Libraries
import {forwardRef, useState} from 'react'
import dayjs from 'dayjs'

// Components
import {DatePicker} from '../Base/DatePicker'
import {Button} from '../../Button/Composed/Button'
import {FlexBox, FlexBoxRef} from '../../FlexBox/index'

// Types
import {
  TimeRange,
  ComponentColor,
  ComponentSize,
  ComponentStatus,
  StandardFunctionProps,
  FlexDirection,
  AlignItems,
} from '../../../Types'

export interface DateRangePickerProps extends StandardFunctionProps {
  /** Object of {upper: string, lower: string | null, seconds: number, format: string, label: string, duration: string} */
  timeRange: TimeRange
  /** Function called when time range is set */
  onSetTimeRange: (timeRange: TimeRange) => void
}

export type DateRangePickerRef = FlexBoxRef

export const DateRangePicker = forwardRef<
  DateRangePickerRef,
  DateRangePickerProps
>(({style, timeRange, onSetTimeRange, testID = 'date-range-picker'}, ref) => {
  const [lower, setLower] = useState<string>(timeRange.lower)
  const [upper, setUpper] = useState<string | null | undefined>(timeRange.upper)

  const handleSetTimeRange = (): void => {
    onSetTimeRange({...timeRange, lower, upper})
  }

  const lowerDate = dayjs(lower)
  const upperDate = upper == null ? null : dayjs(upper)
  const isInvalidRange =
    !lowerDate.isValid() ||
    (upperDate !== null &&
      (!upperDate.isValid() || !upperDate.isAfter(lowerDate)))

  return (
    <FlexBox.FlexBox
      ref={ref}
      direction={FlexDirection.Column}
      style={style}
      margin={ComponentSize.Large}
      alignItems={AlignItems.FlexEnd}
    >
      <FlexBox direction={FlexDirection.Row} testID={testID}>
        <DatePicker dateTime={lower} onSelectDate={setLower} label="Start" />
        <DatePicker dateTime={upper} onSelectDate={setUpper} label="Stop" />
      </FlexBox>
      <Button
        className="range-picker--submit"
        color={ComponentColor.Primary}
        size={ComponentSize.ExtraSmall}
        onClick={handleSetTimeRange}
        text="Apply Time Range"
        status={
          isInvalidRange ? ComponentStatus.Disabled : ComponentStatus.Default
        }
      />
    </FlexBox.FlexBox>
  )
})

DateRangePicker.displayName = 'DateRangePicker'
