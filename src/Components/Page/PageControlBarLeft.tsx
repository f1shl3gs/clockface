// Libraries
import React, {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface PageControlBarLeftProps extends StandardFunctionProps {
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const PageControlBarLeft: FunctionComponent<PageControlBarLeftProps> = ({
  id,
  style,
  children,
  className,
  testID = 'page-control-bar--left',
  ref,
}) => {
  const noChildren = React.Children.count(children) === 0

  const pageControlBarLeftClass = classnames('cf-page-control-bar--left', {
    'cf-page-control-bar__no-children': noChildren,
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={pageControlBarLeftClass}
    >
      {children}
    </div>
  )
}
