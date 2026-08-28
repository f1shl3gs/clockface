// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../../Types'

// Styles
import './ResourceList.scss'

export interface ResourceListProps extends StandardFunctionProps {
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const ResourceList: FunctionComponent<ResourceListProps> = ({
  id,
  style,
  testID = 'resource-list',
  children,
  className,
  ref,
}) => {
  const resourceListClass = classnames('cf-resource-list', {
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      className={resourceListClass}
      data-testid={testID}
    >
      {children}
    </div>
  )
}
