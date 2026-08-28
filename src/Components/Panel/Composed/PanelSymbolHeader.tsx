// Libraries
import React, {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Styles
import './PanelSymbolHeader.scss'

// Components
import {PanelHeader, PanelHeaderProps} from '../Family/PanelHeader'

// Types
import {
  ComponentSize,
  FlexDirection,
  AlignItems,
  JustifyContent,
} from '../../../Types'

export interface PanelSymbolHeaderProps extends PanelHeaderProps {
  /** Element to display before header text (Bullet or Icon) */
  symbol?: React.ReactElement
  /** Panel title */
  title?: React.ReactElement
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const PanelSymbolHeader: FunctionComponent<PanelSymbolHeaderProps> = ({
  id,
  size = ComponentSize.Small,
  style,
  title,
  margin = ComponentSize.Small,
  testID = 'panel--symbol-header',
  symbol,
  children,
  className,
  direction = FlexDirection.Row,
  alignItems = AlignItems.Center,
  justifyContent = JustifyContent.SpaceBetween,
  ref,
}) => {
  const panelSymbolHeaderClassName = classnames('cf-panel--symbol-header', {
    [`cf-panel--symbol-header__${size}`]: size,
    [`${className}`]: className,
  })

  return (
    <PanelHeader
      id={id}
      ref={ref}
      size={size}
      style={style}
      testID={testID}
      margin={margin}
      className={panelSymbolHeaderClassName}
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      <div className="cf-panel--symbol-header--title">
        <div className="cf-panel--symbol-header--symbol">{symbol}</div>
        {title}
      </div>
      {children}
    </PanelHeader>
  )
}
