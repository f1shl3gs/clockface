// Libraries
import {useEffect, FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

// Styles
import './Page.scss'

export interface PageProps extends StandardFunctionProps {
  /** Use this prop to update document.title when the page first renders &  on subsequent updates */
  titleTag?: string
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const Page: FunctionComponent<PageProps> = ({
  id,
  style,
  titleTag,
  children,
  className,
  testID = 'page',
  ref,
}) => {
  useEffect(() => {
    if (titleTag) {
      document.title = `${titleTag}`
    }
  }, [titleTag])

  const pageClass = classnames('cf-page', {
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={pageClass}
    >
      {children}
    </div>
  )
}
