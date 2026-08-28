// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

// Styles
import './IndexList.scss'

export interface IndexListProps extends StandardFunctionProps {
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLTableElement>
}

export const IndexList: FunctionComponent<IndexListProps> = ({
  children,
  className,
  id,
  style,
  testID = 'index-list',
  ref,
}) => {
  const indexListClass = classnames('cf-index-list', {
    [`${className}`]: className,
  })

  return (
    <table
      ref={ref}
      className={indexListClass}
      data-testid={testID}
      id={id}
      style={style}
    >
      {children}
    </table>
  )
}
