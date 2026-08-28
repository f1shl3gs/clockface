// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface PageSubTitleProps extends StandardFunctionProps {
  /** Text to display in title */
  title: string
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLHeadingElement>
}

export const PageSubTitle: FunctionComponent<PageSubTitleProps> = ({
  title,
  id,
  style,
  className,
  testID = 'page-sub-title',
  ref,
}) => {
  const pageSubTitleClass = classnames('cf-page--sub-title', {
    [`${className}`]: className,
  })

  return (
    <h2
      ref={ref}
      className={pageSubTitleClass}
      data-testid={testID}
      id={id}
      style={style}
    >
      {title}
    </h2>
  )
}
