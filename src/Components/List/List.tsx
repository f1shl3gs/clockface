// Libraries
import React, {
  RefObject,
  CSSProperties,
  ReactNode,
  createContext,
  FunctionComponent,
  Ref,
} from 'react'
import classnames from 'classnames'

// Components
import {DapperScrollbars} from '../DapperScrollbars/DapperScrollbars'

// Utils
import {
  generateBackgroundStyle,
  calculateTextColorFromBackground,
} from '../../Utils'

// Types
import {StandardFunctionProps, InfluxColors, Gradients} from '../../Types'

// Styles
import './List.scss'

export interface ListContextProps {
  listBackgroundColor?: InfluxColors | string
  listGradient?: Gradients
  listContrastColor?: InfluxColors | string
}

export const ListContext = createContext<ListContextProps>({
  listBackgroundColor: undefined,
  listGradient: undefined,
  listContrastColor: undefined,
})

export interface ListProps extends StandardFunctionProps {
  /** Disable scrolling horizontally */
  noScrollX?: boolean
  /** Disable scrolling vertically */
  noScrollY?: boolean
  /** Automatically scroll to selected item when dropdown is opened */
  scrollToSelected?: boolean
  /** Pass through ref for contents element within scrollbars */
  contentsRef?: RefObject<HTMLDivElement | null>
  /** Useful for customizing appearance of the contents element within scrollbars */
  contentsStyle?: CSSProperties
  /** Controls autoHide behavior of scrollbars within the menu */
  autoHideScrollbars?: boolean
  /** Gradient start color */
  thumbStartColor?: string | InfluxColors
  /** Gradient end color */
  thumbStopColor?: string | InfluxColors
  /** Colorizes the background of the list */
  backgroundColor?: InfluxColors | string
  /** Overrides backgroundColor, fills background with gradient */
  gradient?: Gradients
  /** Pixel height after which the list will scroll */
  maxHeight?: string
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const List: FunctionComponent<ListProps> = ({
  id,
  style = {width: '100%'},
  testID = 'list',
  children,
  gradient,
  noScrollX = true,
  noScrollY = false,
  maxHeight = '100%',
  className,
  contentsRef,
  contentsStyle,
  thumbStopColor,
  thumbStartColor,
  backgroundColor,
  scrollToSelected = false,
  autoHideScrollbars = false,
  ref,
}) => {
  const contrastColor = calculateTextColorFromBackground(
    backgroundColor,
    gradient
  )

  const listClass = classnames('cf-list', {
    [`${className}`]: className,
    [`cf-list__${contrastColor || 'light'}`]: true,
    'cf-list__special-light': backgroundColor === InfluxColors.Obsidian,
  })

  const scrollTop = calculateSelectedPosition(scrollToSelected, children)

  const scrollbarsStyle = {
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    height: '100%',
    minHeight: '100%',
    maxHeight,
  }

  const listStyle = generateBackgroundStyle(
    backgroundColor,
    gradient,
    false,
    style,
    90
  )

  return (
    <div
      id={id}
      ref={ref}
      style={listStyle}
      className={listClass}
      data-testid={testID}
    >
      <DapperScrollbars
        style={scrollbarsStyle}
        autoHide={autoHideScrollbars}
        autoSizeHeight={true}
        thumbStartColor={thumbStartColor}
        thumbStopColor={thumbStopColor}
        noScrollX={noScrollX}
        noScrollY={noScrollY}
        scrollTop={scrollTop}
      >
        <div
          ref={contentsRef}
          style={contentsStyle}
          className="cf-list--contents"
          data-testid={`${testID}--contents`}
        >
          <ListContext.Provider
            value={{
              listBackgroundColor: backgroundColor,
              listGradient: gradient,
              listContrastColor: contrastColor || 'light',
            }}
          >
            {children}
          </ListContext.Provider>
        </div>
      </DapperScrollbars>
    </div>
  )
}

const EXTRASMALL_LIST_ITEM_HEIGHT = 28
const SMALL_LIST_ITEM_HEIGHT = 36
const MEDIUM_LIST_ITEM_HEIGHT = 48
const LARGE_LIST_ITEM_HEIGHT = 56

const LIST_ITEM_HEIGHTS_MAP: Record<string, number> = {
  xs: EXTRASMALL_LIST_ITEM_HEIGHT,
  sm: SMALL_LIST_ITEM_HEIGHT,
  md: MEDIUM_LIST_ITEM_HEIGHT,
  lg: LARGE_LIST_ITEM_HEIGHT,
}

const calculateSelectedPosition = (
  scrollToSelected: boolean,
  children: ReactNode
): number => {
  if (!children || !scrollToSelected) {
    return 0
  }

  const items = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return (child.props as any).selected ?? false
    }
    return false
  })

  const sizes = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return (child.props as any).selected ?? 'xs'
    }
    return 'xs'
  }) as string[]

  if (!items) {
    return 0
  }

  const itemIndex = items.findIndex(item => item === true)
  const DEFAULT_ITEM_HEIGHT = 28

  const itemHeight =
    itemIndex >= 0
      ? LIST_ITEM_HEIGHTS_MAP[sizes[itemIndex]]
      : DEFAULT_ITEM_HEIGHT

  return itemHeight * itemIndex
}
