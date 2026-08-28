// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Components
import {FlexBox} from '../FlexBox'

// Types
import {
  FlexDirection,
  JustifyContent,
  AlignItems,
  ComponentSize,
  StandardFunctionProps,
} from '../../Types'

export interface OverlayFooterProps extends StandardFunctionProps {
  justifyContent?: JustifyContent
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const OverlayFooter: FunctionComponent<OverlayFooterProps> = ({
  id,
  style,
  testID = 'overlay--footer',
  children,
  className,
  justifyContent = JustifyContent.FlexEnd,
  ref,
}) => {
  const overlayFooterClass = classnames('cf-overlay--footer', {
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      className={overlayFooterClass}
      data-testid={testID}
    >
      <FlexBox
        margin={ComponentSize.Small}
        direction={FlexDirection.Row}
        justifyContent={justifyContent}
        alignItems={AlignItems.Center}
        stretchToFitWidth={true}
      >
        {children}
      </FlexBox>
    </div>
  )
}
