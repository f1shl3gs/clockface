// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface FormElementErrorProps extends StandardFunctionProps {
  /** Text to be displayed on error */
  message?: string
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLSpanElement>
}

export const FormElementError: FunctionComponent<FormElementErrorProps> = ({
  id,
  style,
  className,
  message = '\u00a0\u00a0',
  testID = 'form--element-error',
  ref,
}) => {
  const formElementErrorClass = classnames('cf-form--element-error', {
    [`${className}`]: className,
  })

  return (
    <span
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={formElementErrorClass}
    >
      {message}
    </span>
  )
}
