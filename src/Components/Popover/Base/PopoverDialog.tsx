// Libraries
import classnames from 'classnames'
import {
  CSSProperties,
  FunctionComponent,
  MouseEvent,
  ReactElement,
  Ref,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

// Components
import {ClickOutside} from '../../ClickOutside/ClickOutside'

// Types
import {
  Appearance,
  ComponentColor,
  PopoverPosition,
  StandardFunctionProps,
} from '../../../Types'

// Utilities
import {areStylesEqual} from '../../../Utils'
import {calculateDialogStyles} from '../../../Utils/popovers'

export interface PopoverDialogProps extends StandardFunctionProps {
  /** Bounding rectangle of trigger element */
  triggerRef: RefObject<any | null>
  /** Pixel distance between trigger and popover dialog */
  distanceFromTrigger: number
  /** Where to position the popover relative to the trigger (assuming it fits there) */
  position: PopoverPosition
  /** Popover dialog color */
  color: ComponentColor
  /** Means of applying color to popover */
  appearance?: Appearance
  /** Popover dialog contents */
  contents: ReactElement
  /** Handles clicks detected outside the popover dialog element */
  onClickOutside: (e: MouseEvent) => void
  /** Handles mouseleave events */
  onMouseLeave: (e: MouseEvent) => void
  /** Adds reasonable styles to popover dialog contents so you do not have to */
  enableDefaultStyles: boolean
  /** Allows the popover to dismiss itself when the trigger is no longer in view */
  onHide: () => void
  /** This keeps the Popover visible no matter what */
  visible?: boolean
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const PopoverDialog: FunctionComponent<PopoverDialogProps> = ({
  id,
  style,
  color,
  onHide,
  testID,
  visible,
  contents,
  position,
  className,
  triggerRef,
  onMouseLeave,
  onClickOutside,
  distanceFromTrigger,
  enableDefaultStyles,
  ref,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null)
  const [dialogStyles, setDialogStyles] = useState<CSSProperties>({})

  const handleUpdateStyles = (): void => {
    if (!triggerRef.current || !dialogRef.current) {
      return
    }

    const nextStyles = calculateDialogStyles(
      position,
      triggerRef,
      dialogRef,
      distanceFromTrigger,
    )

    // Bail out of the state update when the geometry is unchanged, so scrolling
    // inside the popover does not re-render on every scroll event
    setDialogStyles(prevStyles =>
      areStylesEqual(prevStyles, nextStyles) ? prevStyles : nextStyles,
    )
  }

  const popoverDialogClassName = classnames('cf-popover', className, {
    [`cf-popover__${color}`]: color,
  })

  const contentsClassName = classnames('cf-popover--contents', {
    'cf-popover--contents__default-styles': enableDefaultStyles,
  })

  const hidePopoverWhenOutOfView = (
    entries: IntersectionObserverEntry[],
  ): void => {
    if (visible) {
      return
    }

    if (!!entries.length && !entries[0].isIntersecting) {
      onHide()
    }
  }

  const observer = new IntersectionObserver(hidePopoverWhenOutOfView)

  // An empty dependency array is safe here only because Popover returns null
  // while collapsed, so this component remounts on every open and the listener
  // always closes over current props. If that ever changes, add the deps here
  // or the dialog will keep using the positions captured on first mount.
  useLayoutEffect((): (() => void) => {
    handleUpdateStyles()
    if (triggerRef.current) {
      observer.observe(triggerRef.current)
    }
    // The third argument in addEventListener is "false" by default and controls bubbling
    // scroll events do not bubble by default so setting this to "true"
    // allows the listener to pick up scroll events from nested scrollable elements
    window.addEventListener('scroll', handleUpdateStyles, true)
    window.addEventListener('resize', handleUpdateStyles)

    return (): void => {
      observer.disconnect()
      window.removeEventListener('scroll', handleUpdateStyles)
      window.removeEventListener('resize', handleUpdateStyles)
    }
  }, [])

  // Ensure dialog element is in focus on mount
  // in order to enable escape key behavior
  useEffect(() => {
    const okayToPullFocus =
      document.activeElement?.tagName !== 'INPUT' &&
      document.activeElement?.tagName !== 'SELECT'
    if (dialogRef.current && okayToPullFocus) {
      dialogRef.current.focus()
    }
  }, [dialogRef])

  return (
    <ClickOutside onClickOutside={onClickOutside}>
      <div
        id={id}
        ref={dialogRef}
        style={dialogStyles}
        className={popoverDialogClassName}
        data-testid={`${testID}--dialog`}
        onMouseLeave={onMouseLeave}
        tabIndex={-1}
      >
        <div
          ref={ref}
          style={style}
          className={contentsClassName}
          data-testid={`${testID}--contents`}
        >
          {contents}
        </div>
      </div>
    </ClickOutside>
  )
}
