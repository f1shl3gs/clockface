// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../../Types'

export interface RightClickDividerProps extends StandardFunctionProps {
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLLIElement>
}

export const RightClickDivider: FunctionComponent<RightClickDividerProps> = ({
  id,
  style,
  testID = 'right-click-divider',
  children,
  className,
  ref,
}) => {
  const rightClickDividerClassName = classnames('cf-right-click--divider', {
    [`${className}`]: className,
  })

  return (
    <li
      id={id}
      ref={ref}
      style={style}
      className={rightClickDividerClassName}
      data-testid={testID}
    >
      {children}
    </li>
  )
}
