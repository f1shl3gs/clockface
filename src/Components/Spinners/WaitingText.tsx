// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Styles
import './WaitingText.scss'

// Types
import {StandardFunctionProps} from '../../Types'

export interface WaitingTextProps extends StandardFunctionProps {
  /** Text to be displayed */
  text: string
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const WaitingText: FunctionComponent<WaitingTextProps> = ({
  id,
  text,
  style,
  testID = 'waiting-text',
  className,
  ref,
}) => {
  const waitingTextClass = classnames('cf-waiting-text', {
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={waitingTextClass}
    >
      {text}
    </div>
  )
}
