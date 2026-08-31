// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {DateRangePicker} from '../Composed/DateRangePicker'
import {DatePicker} from '../Base/DatePicker'

// Notes
import DatePickerReadme from './DatePicker.md?raw'
import DateRangePickerReadme from './DateRangePicker.md?raw'

export default {title: 'Components/DatePicker/Base'}

export const _DateRangePicker = () => {
  const dateRangePickerRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(dateRangePickerRef.current)
  }

  return (
    <div className="story--example">
      <DateRangePicker
        ref={dateRangePickerRef}
        timeRange={{
          lower: '',
        }}
        onSetTimeRange={() => {
          // do nothing
        }}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_DateRangePicker.story = {
  parameters: {
    readme: {
      content: marked.parse(DateRangePickerReadme),
    },
  },
}

export const _DatePicker = () => {
  const datePickerRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(datePickerRef.current)
  }

  return (
    <div className="story--example">
      <DatePicker
        ref={datePickerRef}
        dateTime={''}
        onSelectDate={() => {
          // do nothing
        }}
        label={'Date Picker'}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_DatePicker.story = {
  parameters: {
    readme: {
      content: marked.parse(DatePickerReadme),
    },
  },
}
