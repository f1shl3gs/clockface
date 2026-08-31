// Libraries
import {
  FunctionComponent,
  useRef,
  useState,
  useLayoutEffect,
  UIEvent,
  CSSProperties,
  PointerEvent as ReactPointerEvent,
  MouseEvent as ReactMouseEvent,
} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, InfluxColors, ComponentSize} from '../../Types'

// Styles
import './DapperScrollbars.scss'

export interface FusionScrollValues {
  scrollTop: number
  scrollLeft: number
  scrollHeight: number
  scrollWidth: number
  clientHeight: number
  clientWidth: number
}

// Keeps the same callback style as DapperScrollbars (FusionScrollEvent union)
export type FusionScrollEvent = FusionScrollValues | UIEvent<HTMLDivElement>

export type FusionScrollHandler = (
  scrollValues: FusionScrollEvent,
  prevScrollValues?: FusionScrollEvent,
) => void

export interface DapperScrollbarsProps extends StandardFunctionProps {
  /** Toggle display of tracks when no scrolling is necessary */
  removeTracksWhenNotUsed?: boolean
  /** Toggle display of vertical track when no scrolling is necessary */
  removeTrackYWhenNotUsed?: boolean
  /** Toggle display of horizontal track when no scrolling is necessary */
  removeTrackXWhenNotUsed?: boolean
  /** Disable scrolling horizontally */
  noScrollX?: boolean
  /** Disable scrolling vertically */
  noScrollY?: boolean
  /** Disable scrolling */
  noScroll?: boolean
  /** Gradient start color */
  thumbStartColor?: string | InfluxColors
  /** Gradient end color */
  thumbStopColor?: string | InfluxColors
  /** Hide scrollbar when not actively scrolling */
  autoHide?: boolean
  /** Scroll container will grow to fit the content width and height */
  autoSize?: boolean
  /** Scroll container will grow to fit the content width */
  autoSizeWidth?: boolean
  /** Scroll container will grow to fit the content height */
  autoSizeHeight?: boolean
  /** Vertical scroll position in pixels */
  scrollTop?: number
  /** Horizontal scroll position in pixels */
  scrollLeft?: number
  /** Function to be called when called scroll event fires */
  onScroll?: FusionScrollHandler
  /** Function called after component updated */
  onUpdate?: FusionScrollHandler
  /** Component Size **/
  size?: ComponentSize
}

const MIN_THUMB_SIZE = 20

export const DapperScrollbars: FunctionComponent<DapperScrollbarsProps> = ({
  id,
  style,
  children,
  className,
  onScroll,
  onUpdate,
  scrollTop = 0,
  scrollLeft = 0,
  autoHide = false,
  autoSize = false,
  noScroll = false,
  noScrollX = false,
  noScrollY = false,
  autoSizeWidth = false,
  autoSizeHeight = false,
  thumbStopColor = 'rgba(255, 255, 255, 0.25)',
  thumbStartColor = 'rgba(255, 255, 255, 0.25)',
  testID = 'dapper-scrollbars',
  removeTracksWhenNotUsed = true,
  removeTrackYWhenNotUsed = true,
  removeTrackXWhenNotUsed = true,
  size = ComponentSize.Small,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const trackXRef = useRef<HTMLDivElement>(null)
  const trackYRef = useRef<HTMLDivElement>(null)
  const prevValuesRef = useRef<FusionScrollValues | null>(null)
  const onScrollRef = useRef(onScroll)
  const onUpdateRef = useRef(onUpdate)
  const measureRef = useRef<(() => void) | null>(null)
  const dragRef = useRef<{
    axis: 'x' | 'y'
    startPointer: number
    startScroll: number
  } | null>(null)

  const [metrics, setMetrics] = useState({
    scrollTop: Number(scrollTop),
    scrollLeft: Number(scrollLeft),
    scrollHeight: 0,
    scrollWidth: 0,
    clientHeight: 0,
    clientWidth: 0,
  })

  const [overflow, setOverflow] = useState({x: false, y: false})
  const [trackLengths, setTrackLengths] = useState({x: 0, y: 0})

  // ---- Controlled scroll position ----
  useLayoutEffect(() => {
    if (scrollerRef.current && scrollTop >= 0) {
      scrollerRef.current.scrollTop = Number(scrollTop)
    }
  }, [scrollTop])

  useLayoutEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollLeft = Number(scrollLeft)
    }
  }, [scrollLeft])

  const nextValues = (el: HTMLDivElement): FusionScrollValues => ({
    scrollTop: el.scrollTop,
    scrollLeft: el.scrollLeft,
    scrollHeight: el.scrollHeight,
    scrollWidth: el.scrollWidth,
    clientHeight: el.clientHeight,
    clientWidth: el.clientWidth,
  })

  // ---- Measure + notify onUpdate ----
  const measure = (): void => {
    const el = scrollerRef.current
    if (!el) {
      return
    }

    setMetrics(nextValues(el))

    const nextOverflow = {
      x: el.scrollWidth > el.clientWidth,
      y: el.scrollHeight > el.clientHeight,
    }
    setOverflow(prev =>
      prev.x === nextOverflow.x && prev.y === nextOverflow.y
        ? prev
        : nextOverflow,
    )

    const nextTrackLengths = {
      x: trackXRef.current ? trackXRef.current.clientWidth : 0,
      y: trackYRef.current ? trackYRef.current.clientHeight : 0,
    }
    setTrackLengths(prev =>
      prev.x === nextTrackLengths.x && prev.y === nextTrackLengths.y
        ? prev
        : nextTrackLengths,
    )

    if (onUpdateRef.current) {
      onUpdateRef.current(nextValues(el), prevValuesRef.current ?? undefined)
    }
    prevValuesRef.current = nextValues(el)
  }

  // ---- Scroll events ----
  const handleScroll = (e: UIEvent<HTMLDivElement>): void => {
    const el = e.currentTarget
    const values = nextValues(el)
    setMetrics(values)

    if (onScrollRef.current) {
      onScrollRef.current(e, prevValuesRef.current ?? undefined)
    }
    if (onUpdateRef.current) {
      onUpdateRef.current(values, prevValuesRef.current ?? undefined)
    }
    prevValuesRef.current = values
  }

  // ---- Track visibility ----
  const showTrackX =
    !noScroll &&
    !noScrollX &&
    (!removeTracksWhenNotUsed || overflow.x) &&
    (!removeTrackXWhenNotUsed || overflow.x)

  const showTrackY =
    !noScroll &&
    !noScrollY &&
    (!removeTracksWhenNotUsed || overflow.y) &&
    (!removeTrackYWhenNotUsed || overflow.y)

  // ---- Observe container and content size changes ----
  useLayoutEffect(() => {
    onScrollRef.current = onScroll
    onUpdateRef.current = onUpdate
    measureRef.current = measure
  })

  useLayoutEffect(() => {
    const el = scrollerRef.current
    if (!el) {
      return
    }

    measureRef.current?.()

    const ro = new ResizeObserver(() => measureRef.current?.())
    ro.observe(el)
    if (contentRef.current) {
      ro.observe(contentRef.current)
    }
    if (trackXRef.current) {
      ro.observe(trackXRef.current)
    }
    if (trackYRef.current) {
      ro.observe(trackYRef.current)
    }

    return () => ro.disconnect()
  }, [showTrackX, showTrackY])

  // ---- Thumb geometry (proportional mapping against real track length) ----
  const scrollableY = metrics.scrollHeight - metrics.clientHeight
  const scrollableX = metrics.scrollWidth - metrics.clientWidth

  const thumbYSize =
    overflow.y && metrics.clientHeight > 0
      ? Math.max(
          (metrics.clientHeight * metrics.clientHeight) / metrics.scrollHeight,
          MIN_THUMB_SIZE,
        )
      : 0
  const thumbYTravel = Math.max(trackLengths.y - thumbYSize, 0)
  const thumbYPos =
    overflow.y && scrollableY > 0
      ? (metrics.scrollTop / scrollableY) * thumbYTravel
      : 0

  const thumbXSize =
    overflow.x && metrics.clientWidth > 0
      ? Math.max(
          (metrics.clientWidth * metrics.clientWidth) / metrics.scrollWidth,
          MIN_THUMB_SIZE,
        )
      : 0
  const thumbXTravel = Math.max(trackLengths.x - thumbXSize, 0)
  const thumbXPos =
    overflow.x && scrollableX > 0
      ? (metrics.scrollLeft / scrollableX) * thumbXTravel
      : 0

  // ---- Thumb dragging (pointer events) ----
  const beginDrag =
    (axis: 'x' | 'y') =>
    (e: ReactPointerEvent<HTMLDivElement>): void => {
      const el = scrollerRef.current
      if (!el || e.button !== 0) {
        return
      }
      e.preventDefault()
      e.stopPropagation()
      e.currentTarget.setPointerCapture(e.pointerId)
      dragRef.current = {
        axis,
        startPointer: axis === 'y' ? e.clientY : e.clientX,
        startScroll: axis === 'y' ? el.scrollTop : el.scrollLeft,
      }
    }

  const moveDrag =
    (axis: 'x' | 'y') =>
    (e: ReactPointerEvent<HTMLDivElement>): void => {
      const drag = dragRef.current
      const el = scrollerRef.current
      if (!drag || drag.axis !== axis || !el) {
        return
      }

      const viewLen = axis === 'y' ? el.clientHeight : el.clientWidth
      const total = axis === 'y' ? el.scrollHeight : el.scrollWidth
      const scrollable = total - viewLen
      const trackLen =
        axis === 'y'
          ? (trackYRef.current?.clientHeight ?? 0)
          : (trackXRef.current?.clientWidth ?? 0)
      const thumbLen =
        viewLen > 0 ? Math.max((viewLen * viewLen) / total, MIN_THUMB_SIZE) : 0

      if (scrollable <= 0 || trackLen - thumbLen <= 0) {
        return
      }

      const delta = (axis === 'y' ? e.clientY : e.clientX) - drag.startPointer
      const next =
        drag.startScroll + (delta * scrollable) / (trackLen - thumbLen)

      if (axis === 'y') {
        el.scrollTop = next
      } else {
        el.scrollLeft = next
      }
    }

  const endDrag = (): void => {
    dragRef.current = null
  }

  // ---- Track click paging ----
  const handleTrackClick =
    (axis: 'x' | 'y') =>
    (e: ReactMouseEvent<HTMLDivElement>): void => {
      if (e.button !== 0 || e.target !== e.currentTarget) {
        return
      }
      const el = scrollerRef.current
      if (!el) {
        return
      }
      const rect = e.currentTarget.getBoundingClientRect()

      if (axis === 'y') {
        const y = e.clientY - rect.top
        if (y < thumbYPos) {
          el.scrollTop -= el.clientHeight
        } else if (y > thumbYPos + thumbYSize) {
          el.scrollTop += el.clientHeight
        }
      } else {
        const x = e.clientX - rect.left
        if (x < thumbXPos) {
          el.scrollLeft -= el.clientWidth
        } else if (x > thumbXPos + thumbXSize) {
          el.scrollLeft += el.clientWidth
        }
      }
    }

  // ---- Container styles ----
  const containerStyle: CSSProperties = {
    ...style,
    ...((autoSize || autoSizeWidth) && !style?.width
      ? {width: 'fit-content'}
      : {}),
    ...((autoSize || autoSizeHeight) && !style?.height
      ? {height: 'fit-content'}
      : {}),
  }

  const scrollerStyle: CSSProperties = noScroll
    ? {overflow: 'hidden'}
    : {
        overflowX: noScrollX ? 'hidden' : 'auto',
        overflowY: noScrollY ? 'hidden' : 'auto',
      }

  const dapperScrollbars2Class = classnames('cf-dapper-scrollbars', {
    'cf-dapper-scrollbars--autohide': autoHide,
    [`cf-dapper-scrollbars--${size}`]: size,
    [`${className}`]: className,
  })

  const thumbXStyle = {
    background: `linear-gradient(to right,  ${thumbStartColor} 0%,${thumbStopColor} 100%)`,
  }

  const thumbYStyle = {
    background: `linear-gradient(to bottom,  ${thumbStartColor} 0%,${thumbStopColor} 100%)`,
  }

  return (
    <div
      id={id}
      style={containerStyle}
      className={dapperScrollbars2Class}
      data-testid={testID}
    >
      <div
        ref={scrollerRef}
        className="cf-dapper-scrollbars--scroller"
        style={scrollerStyle}
        onScroll={handleScroll}
      >
        <div ref={contentRef} className="cf-dapper-scrollbars--content">
          {children}
        </div>
      </div>
      {showTrackX && (
        <div
          ref={trackXRef}
          className="cf-dapper-scrollbars--track-x"
          onClick={handleTrackClick('x')}
        >
          <div
            className="cf-dapper-scrollbars--thumb-x"
            data-testid={`${testID}--thumb-x`}
            style={{
              ...thumbXStyle,
              width: `${thumbXSize}px`,
              transform: `translateX(${thumbXPos}px)`,
            }}
            onPointerDown={beginDrag('x')}
            onPointerMove={moveDrag('x')}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          />
        </div>
      )}
      {showTrackY && (
        <div
          ref={trackYRef}
          className="cf-dapper-scrollbars--track-y"
          onClick={handleTrackClick('y')}
        >
          <div
            className="cf-dapper-scrollbars--thumb-y"
            data-testid={`${testID}--thumb-y`}
            style={{
              ...thumbYStyle,
              height: `${thumbYSize}px`,
              transform: `translateY(${thumbYPos}px)`,
            }}
            onPointerDown={beginDrag('y')}
            onPointerMove={moveDrag('y')}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          />
        </div>
      )}
    </div>
  )
}
