import {
  cloneElement,
  FunctionComponent,
  MouseEventHandler,
  ReactElement,
  useEffect,
  useRef,
} from 'react'

interface Props {
  /** Function to call when click outside is detected */
  onClickOutside: (ev: any) => void
  /** Must be a single element */
  children: ReactElement
}

type ChildWithMouseDownCapture = ReactElement<{
  onMouseDownCapture?: MouseEventHandler
}>

export const ClickOutside: FunctionComponent<Props> = ({
  onClickOutside,
  children,
}) => {
  const insideEventRef = useRef<Event | null>(null)

  useEffect(() => {
    const handleClickOutside = (ev: MouseEvent) => {
      if (insideEventRef.current !== ev) {
        onClickOutside(ev)
      }

      insideEventRef.current = null
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClickOutside])

  // Instead of measuring containment against a wrapper element, the child marks
  // the event during the capture phase and the document listener reads that mark
  // during the bubble phase. This keeps the rendered DOM untouched, and it also
  // covers content rendered into a portal, because React propagates events out of
  // portals through the React tree rather than the DOM tree. Comparing event identity
  // (rather than a boolean) keeps a swallowed event from leaving the mark stuck
  // for the next click.
  return cloneElement(children as ChildWithMouseDownCapture, {
    onMouseDownCapture: ev => {
      insideEventRef.current = ev.nativeEvent
    },
  })
}
