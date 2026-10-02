// Libraries
import {
  RefObject,
  useLayoutEffect,
  useRef,
  FunctionComponent,
  Ref,
  useState,
  CSSProperties,
} from 'react'
import classnames from 'classnames'

// Components
import {ClickOutside} from '../../ClickOutside/ClickOutside'

// Utilities
import {areStylesEqual} from '../../../Utils'
import {calculateRightClickMenuStyles} from '../../../Utils/rightClick'

// Types
import {
  ComponentColor,
  StandardFunctionProps,
  Coordinates,
} from '../../../Types'

export interface RightClickMenuProps extends StandardFunctionProps {
  /** Bounding rectangle of trigger element */
  triggerRef: RefObject<any | null>
  /** Menu dialog color */
  color: ComponentColor
  /** Dismisses the menu */
  onHide: () => void
  /** Mouse position from right click event */
  mouseOffset: Coordinates
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLUListElement>
}

export const RightClickMenu: FunctionComponent<RightClickMenuProps> = ({
  id,
  style,
  color,
  onHide,
  testID,
  children,
  className,
  triggerRef,
  mouseOffset,
  ref,
}) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const [menuStyles, setMenuStyles] = useState<CSSProperties>({})

  const handleUpdateStyles = (): void => {
    if (!triggerRef.current || !menuRef.current) {
      return
    }

    const nextStyles = calculateRightClickMenuStyles(
      mouseOffset,
      triggerRef,
      menuRef,
    )

    setMenuStyles(prevStyles =>
      // Bail out of the state update when the geometry is unchanged, so
      // scrolling does not re-render on every scroll event
      areStylesEqual(prevStyles, nextStyles) ? prevStyles : nextStyles,
    )
  }

  const rightClickMenuClassName = classnames('cf-right-click', className, {
    [`cf-right-click__${color}`]: color,
  })

  const hidePopoverWhenOutOfView = (
    entries: IntersectionObserverEntry[],
  ): void => {
    if (!!entries.length && !entries[0].isIntersecting) {
      onHide()
    }
  }

  const observer = new IntersectionObserver(hidePopoverWhenOutOfView)

  // An empty dependency array is safe here only because RightClick returns null
  // while collapsed, so this component remounts on every open and the listener
  // always closes over current props. If that ever changes, add the deps here
  // or the menu will keep using the offset captured on first mount.
  useLayoutEffect((): (() => void) => {
    handleUpdateStyles()
    observer.observe(triggerRef.current)
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

  return (
    <ClickOutside onClickOutside={onHide}>
      <div
        id={id}
        ref={menuRef}
        style={{...menuStyles, ...style}}
        onClick={onHide}
        className={rightClickMenuClassName}
        data-testid={testID}
      >
        <ul ref={ref} className="cf-right-click--menu">
          {children}
        </ul>
      </div>
    </ClickOutside>
  )
}
