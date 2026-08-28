// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface SquareGridCardProps extends StandardFunctionProps {
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const SquareGridCard: FunctionComponent<SquareGridCardProps> = ({
  id,
  style,
  testID = 'square-grid--card',
  children,
  className,
  ref,
}) => {
  const gridRowClass = classnames('cf-square-grid--card', {
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      className={gridRowClass}
      data-testid={testID}
    >
      {children}
    </div>
  )
}
