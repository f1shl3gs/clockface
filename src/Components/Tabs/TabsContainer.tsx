// Libraries
import {FunctionComponent, Ref} from 'react'

// Components
import {FlexBox} from '../FlexBox'

// Types
import {
  StandardFunctionProps,
  Orientation,
  FlexDirection,
  AlignItems,
} from '../../Types'

export interface TabsContainerProps extends StandardFunctionProps {
  /** Should match the orientation prop of Tabs component */
  orientation: Orientation
  /** Stretches TabsContainer to fit parent width */
  stretchToFitWidth?: boolean
  /** Stretches TabsContainer to fit parent height */
  stretchToFitHeight?: boolean
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const TabsContainer: FunctionComponent<TabsContainerProps> = ({
  id,
  style,
  children,
  className,
  orientation,
  stretchToFitWidth,
  stretchToFitHeight,
  testID = 'tabs--container',
  ref,
}) => {
  const direction =
    orientation === Orientation.Vertical
      ? FlexDirection.Row
      : FlexDirection.Column

  return (
    <FlexBox
      className={className}
      testID={testID}
      id={id}
      ref={ref}
      style={style}
      direction={direction}
      alignItems={AlignItems.Stretch}
      stretchToFitWidth={stretchToFitWidth}
      stretchToFitHeight={stretchToFitHeight}
    >
      {children}
    </FlexBox>
  )
}
