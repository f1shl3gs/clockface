// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Components
import {FlexBox, FlexBoxProps} from '../../FlexBox'

// Types
import {ComponentSize, JustifyContent} from '../../../Types'

export interface PanelFooterProps extends Omit<
  FlexBoxProps,
  'stretchToFitWidth' | 'stretchToFitHeight'
> {
  /** Controls padding */
  size?: ComponentSize
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const PanelFooter: FunctionComponent<PanelFooterProps> = ({
  id,
  size = ComponentSize.Small,
  style,
  testID = 'panel--footer',
  margin,
  children,
  className,
  direction,
  alignItems,
  justifyContent = JustifyContent.Center,
  ref,
}) => {
  const panelFooterClass = classnames('cf-panel--footer', {
    [`cf-panel--footer__${size}`]: size,
    [`${className}`]: className,
  })

  return (
    <FlexBox
      id={id}
      ref={ref}
      style={style}
      margin={margin}
      direction={direction}
      className={panelFooterClass}
      alignItems={alignItems}
      testID={testID}
      justifyContent={justifyContent}
      stretchToFitWidth={true}
    >
      {children}
    </FlexBox>
  )
}
