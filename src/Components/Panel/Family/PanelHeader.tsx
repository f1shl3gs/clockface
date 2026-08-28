// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Components
import {FlexBox, FlexBoxProps} from '../../FlexBox'

// Types
import {
  Omit,
  FlexDirection,
  JustifyContent,
  AlignItems,
  ComponentSize,
} from '../../../Types'

export interface PanelHeaderProps extends Omit<
  FlexBoxProps,
  'stretchToFitWidth' | 'stretchToFitHeight'
> {
  /** Controls padding */
  size?: ComponentSize
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const PanelHeader: FunctionComponent<PanelHeaderProps> = ({
  id,
  size = ComponentSize.Small,
  style,
  testID = 'panel--header',
  margin,
  children,
  className,
  direction = FlexDirection.Row,
  alignItems = AlignItems.Center,
  justifyContent = JustifyContent.SpaceBetween,
  ref,
}) => {
  const panelHeaderClass = classnames('cf-panel--header', {
    [`cf-panel--header__${size}`]: size,
    [`${className}`]: className,
  })

  return (
    <FlexBox
      id={id}
      ref={ref}
      style={style}
      margin={margin}
      className={panelHeaderClass}
      direction={direction}
      alignItems={alignItems}
      testID={testID}
      justifyContent={justifyContent}
      stretchToFitWidth={true}
    >
      {children}
    </FlexBox>
  )
}
