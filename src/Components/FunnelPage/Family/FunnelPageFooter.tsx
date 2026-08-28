// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../../Types'

export interface FunnelPageFooterProps extends StandardFunctionProps {
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const FunnelPageFooter: FunctionComponent<FunnelPageFooterProps> = ({
  id,
  style,
  testID = 'funnel-page--footer',
  children,
  className,
  ref,
}) => {
  const funnelPageFooterClassName = classnames('cf-funnel-page--footer', {
    [`${className}`]: className,
  })

  return (
    <div
      className={funnelPageFooterClassName}
      data-testid={testID}
      id={id}
      style={style}
      ref={ref}
    >
      {children}
    </div>
  )
}
