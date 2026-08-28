// Libraries
import {FunctionComponent, Ref} from 'react'

// Types
import {StandardFunctionProps} from '../../Types'

export interface FormBoxProps extends StandardFunctionProps {
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const FormBox: FunctionComponent<FormBoxProps> = ({
  children,
  id,
  style,
  className = '',
  testID = 'form--box',
  ref,
}) => {
  return (
    <div
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={`cf-form--box ${className}`}
    >
      {children}
    </div>
  )
}
