// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface FormHelpTextProps extends StandardFunctionProps {
  /** Input description  or instruction text */
  text: string
  ref?: Ref<HTMLSpanElement>
}

export const FormHelpText: FunctionComponent<FormHelpTextProps> = ({
  text,
  className,
  id,
  style,
  testID = 'form--help-text',
  ref,
}) => {
  const formHelpTextClass = classnames('cf-form--help-text', {
    [`${className}`]: className,
  })

  return (
    <span
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={formHelpTextClass}
    >
      {text}
    </span>
  )
}
