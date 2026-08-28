// Libraries
import React, {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../../Types'

export interface ResourceListBodyProps extends StandardFunctionProps {
  /** Element to show when no children are passed in, useful for implementing filtering */
  emptyState: React.ReactElement
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const ResourceListBody: FunctionComponent<ResourceListBodyProps> = ({
  id,
  style,
  testID = 'resource-list--body',
  children,
  className,
  emptyState,
  ref,
}) => {
  const resourceListBodyClass = classnames('cf-resource-list--body', {
    [`${className}`]: className,
  })

  let childElement = children

  if (
    React.Children.count(children) === 0 ||
    children === undefined ||
    children === null ||
    children === false
  ) {
    childElement = emptyState
  }

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      className={resourceListBodyClass}
      data-testid={testID}
    >
      {childElement}
    </div>
  )
}
