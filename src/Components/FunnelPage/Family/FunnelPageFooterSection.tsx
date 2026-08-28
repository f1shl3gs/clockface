// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../../Types'

export interface FunnelPageFooterSectionProps extends StandardFunctionProps {
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const FunnelPageFooterSection: FunctionComponent<
  FunnelPageFooterSectionProps
> = ({
  id,
  style,
  testID = 'funnel-page--footer-section',
  children,
  className,
  ref,
}) => {
  const funnelPageFooterSectionClassName = classnames(
    'cf-funnel-page--footer-section',
    {
      [`${className}`]: className,
    }
  )

  return (
    <div
      className={funnelPageFooterSectionClassName}
      data-testid={testID}
      id={id}
      style={style}
      ref={ref}
    >
      <div className="cf-funnel-page--footer-container">{children}</div>
    </div>
  )
}
