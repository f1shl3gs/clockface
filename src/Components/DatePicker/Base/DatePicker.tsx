// Libraries
import {forwardRef, ChangeEvent, useState, useEffect, useRef} from 'react'
import dayjs, {Dayjs} from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import classnames from 'classnames'

// Components
import {Input} from '../../Inputs/Input'
import {Form} from '../../Form/index'

// Styles
import '../DatePicker.scss'

// Types
import {
  ComponentSize,
  ComponentStatus,
  StandardFunctionProps,
} from '../../../Types'

dayjs.extend(customParseFormat)

interface DatePickerProps extends StandardFunctionProps {
  /** Label for input field */
  label: string
  /** Date value */
  dateTime?: string | null
  /** Function called once a date is selected */
  onSelectDate: (date: string) => void
}

export type DatePickerRef = HTMLDivElement

const INPUT_FORMATS = [
  'YYYY-MM-DD',
  'YYYY-MM-DD HH:mm',
  'YYYY-MM-DD HH:mm:ss',
  'YYYY-MM-DD HH:mm:ss.SSS',
]
const DEFAULT_DISPLAY_FORMAT = 'YYYY-MM-DD HH:mm:ss.SSS'

const typedFormat = (d: string): string | undefined =>
  INPUT_FORMATS.find(format => dayjs(d, format, true).isValid())

export const DatePicker = forwardRef<DatePickerRef, DatePickerProps>(
  ({dateTime, label, style, onSelectDate, testID = 'date-picker'}, ref) => {
    const [inputValue, setInputValue] = useState('')
    const [inputFormat, setInputFormat] = useState('')
    const [viewMonth, setViewMonth] = useState<Dayjs>(() =>
      dayjs(dateTime || Date.now()).startOf('month')
    )
    const timeListRef = useRef<HTMLUListElement>(null)

    const date = dayjs(dateTime || Date.now())
    const today = dayjs()
    const selectedHour = date.minute() === 0 ? date.hour() : -1

    // The UI can only express hour/minute precision, so anything below the
    // minute is normalized away on every explicit selection
    const selectAt = (d: Dayjs, hour: number, minute: number): string =>
      d.startOf('minute').hour(hour).minute(minute).toISOString()

    const handleSelectDate = (d: Dayjs): void => {
      onSelectDate(selectAt(d, date.hour(), date.minute()))
    }

    const handleSelectTime = (hour: number): void => {
      onSelectDate(selectAt(date, hour, 0))
    }

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
      const value = e.target.value
      const format = typedFormat(value)
      setInputValue(value)
      setInputFormat(format || '')
      if (format) {
        onSelectDate(dayjs(value).toISOString())
      }
    }

    const inputIsInvalid =
      inputValue !== '' && typedFormat(inputValue) === undefined

    const displayValue = inputIsInvalid
      ? inputValue
      : dateTime
        ? dayjs(dateTime).format(inputFormat || DEFAULT_DISPLAY_FORMAT)
        : inputValue

    const firstCell = viewMonth.startOf('week')
    const cells = Array.from({length: 42}, (_, i) => firstCell.add(i, 'day'))

    useEffect(() => {
      const parsed = dateTime ? dayjs(dateTime) : null
      if (parsed?.isValid()) {
        setViewMonth(parsed.startOf('month'))
      }

      const list = timeListRef.current
      if (list) {
        const selected = list.querySelector(
          '[data-selected="true"]'
        ) as HTMLElement | null
        if (selected) {
          list.scrollTop =
            selected.offsetTop -
            list.clientHeight / 2 +
            selected.clientHeight / 2
        }
      }
    }, [dateTime])

    return (
      <div
        ref={ref}
        className="cf-date-picker"
        data-testid={testID}
        style={style}
      >
        <Form.Element
          label={label}
          errorMessage={
            inputIsInvalid
              ? 'Format must be YYYY-MM-DD [HH:mm:ss.SSS]'
              : '\u00a0\u00a0'
          }
        >
          <Input
            size={ComponentSize.Medium}
            titleText={label}
            value={displayValue}
            onChange={handleChangeInput}
            status={
              inputIsInvalid ? ComponentStatus.Error : ComponentStatus.Default
            }
          />
        </Form.Element>
        <div className="cf-date-picker--calendar">
          <div className="cf-date-picker--month">
            <div className="cf-date-picker--header">
              <button
                type="button"
                className="cf-date-picker--navigation cf-date-picker--navigation--previous"
                aria-label="Previous month"
                onClick={() => setViewMonth(m => m.subtract(1, 'month'))}
              />
              <span className="cf-date-picker--current-month">
                {viewMonth.format('MMMM YYYY')}
              </span>
              <button
                type="button"
                className="cf-date-picker--navigation cf-date-picker--navigation--next"
                aria-label="Next month"
                onClick={() => setViewMonth(m => m.add(1, 'month'))}
              />
            </div>
            <div className="cf-date-picker--body">
              <div className="cf-date-picker--day-names">
                {Array.from({length: 7}, (_, i) =>
                  viewMonth.day(i).format('dd')
                ).map(name => (
                  <span key={name} className="cf-date-picker--day-name">
                    {name}
                  </span>
                ))}
              </div>
              <div className="cf-date-picker--days">
                {cells.map(c => (
                  <button
                    type="button"
                    key={c.format('YYYY-MM-DD')}
                    className={classnames(
                      c.isSame(viewMonth, 'month')
                        ? 'cf-date-picker--day-in-month'
                        : 'cf-date-picker--day',
                      {
                        'cf-date-picker--day--selected': c.isSame(date, 'day'),
                        'cf-date-picker--day--today': c.isSame(today, 'day'),
                      }
                    )}
                    onClick={() => handleSelectDate(c)}
                  >
                    {c.date()}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="cf-date-picker--time">
            <div className="cf-date-picker--time-header">Time</div>
            <ul ref={timeListRef} className="cf-date-picker--time-list">
              {Array.from({length: 24}, (_, h) => (
                <li
                  key={h}
                  data-selected={h === selectedHour}
                  className={classnames('cf-date-picker--time-item', {
                    'cf-date-picker--time-item--selected': h === selectedHour,
                  })}
                  onClick={() => handleSelectTime(h)}
                >
                  {`${String(h).padStart(2, '0')}:00`}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
)

DatePicker.displayName = 'DatePicker'
