// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface GridRowProps extends StandardFunctionProps {
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const GridRow: FunctionComponent<GridRowProps> = ({
  id,
  style,
  testID = 'grid--row',
  children,
  className,
  ref,
}) => {
  const gridRowClass = classnames('cf-grid--row', {
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
