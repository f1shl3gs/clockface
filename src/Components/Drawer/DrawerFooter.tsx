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

export interface DrawerFooterProps extends StandardFunctionProps {
  justifyContent?: JustifyContent
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const DrawerFooter: FunctionComponent<DrawerFooterProps> = ({
  id,
  style,
  testID = 'drawer--footer',
  children,
  className,
  justifyContent = JustifyContent.FlexEnd,
  ref,
}) => {
  const drawerFooterClass = classnames('cf-drawer--footer', {
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      className={drawerFooterClass}
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
