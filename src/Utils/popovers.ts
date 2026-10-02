// Libraries
import {CSSProperties, RefObject} from 'react'

// Types
import {PopoverPosition} from '../Types'

interface PopoverFlush {
  first: boolean
  last: boolean
}

const px = (value: number): string => `${Math.floor(value)}px`

const measureRects = (
  triggerRef: RefObject<any | null>,
  dialogRef: RefObject<HTMLDivElement | null>,
): [DOMRect, DOMRect] | null => {
  if (!triggerRef.current || !dialogRef.current) {
    return null
  }

  return [
    triggerRef.current.getBoundingClientRect(),
    dialogRef.current.getBoundingClientRect(),
  ]
}

const calculateDialogPosition = (
  position: PopoverPosition,
  triggerRect: DOMRect,
  dialogRect: DOMRect,
  distanceFromTrigger: number,
): PopoverPosition => {
  const acceptablePopoverPositions: PopoverPosition[] = []

  const popoverFitsAbove =
    triggerRect.top > dialogRect.height + distanceFromTrigger
  const popoverFitsBelow =
    window.innerHeight - triggerRect.top - triggerRect.height >
    dialogRect.height + distanceFromTrigger
  const popoverFitsToTheLeft =
    triggerRect.left > dialogRect.width + distanceFromTrigger
  const popoverFitsToTheRight =
    window.innerWidth - triggerRect.left - triggerRect.width >
    dialogRect.width + distanceFromTrigger

  // Check all sides of the trigger element and compile a list of acceptable popover positions
  if (popoverFitsAbove) {
    acceptablePopoverPositions.push(PopoverPosition.Above)
  }
  if (popoverFitsBelow) {
    acceptablePopoverPositions.push(PopoverPosition.Below)
  }
  if (popoverFitsToTheLeft) {
    acceptablePopoverPositions.push(PopoverPosition.ToTheLeft)
  }
  if (popoverFitsToTheRight) {
    acceptablePopoverPositions.push(
      PopoverPosition.ToTheRight,
      PopoverPosition.ToTheRightTop,
    )
  }

  // Check to see if the specified position is within the acceptable positions
  if (acceptablePopoverPositions.includes(position)) {
    return position
  }

  // Otherwise choose the next available position in from the acceptable list
  return acceptablePopoverPositions[0] || null
}

const isDialogFlush = (
  position: PopoverPosition,
  triggerRect: DOMRect,
  dialogRect: DOMRect,
): PopoverFlush => {
  // When the trigger is in a corner of the screen,
  // determine whether to offest it
  let first = false
  let last = false

  switch (position) {
    case PopoverPosition.Above:
    case PopoverPosition.Below:
      // When the dialog is above or below the trigger
      // First: left edge
      // Last: right edge
      const overflowX = dialogRect.width - triggerRect.width
      first = triggerRect.left < overflowX / 2
      last =
        window.innerWidth - triggerRect.left - triggerRect.width < overflowX / 2
      break
    case PopoverPosition.ToTheLeft:
    case PopoverPosition.ToTheRight:
      // When the dialog is left or right of the trigger
      // First: top edge
      // Last: bottom edge
      const overflowY = dialogRect.height - triggerRect.height
      first = triggerRect.top < overflowY / 2
      last =
        window.innerHeight - triggerRect.top - triggerRect.height <
        overflowY / 2
      break
    case PopoverPosition.ToTheRightTop:
      first = true
      last = false
      break
    default:
      break
  }

  return {
    first,
    last,
  }
}

export const calculateDialogStyles = (
  position: PopoverPosition,
  triggerRef: RefObject<any | null>,
  dialogRef: RefObject<HTMLDivElement | null>,
  distanceFromTrigger: number,
): CSSProperties => {
  const rects = measureRects(triggerRef, dialogRef)

  if (!rects) {
    return {}
  }

  const [triggerRect, dialogRect] = rects
  const dialogPosition = calculateDialogPosition(
    position,
    triggerRect,
    dialogRect,
    distanceFromTrigger,
  )
  let dialogStyles: CSSProperties = {}

  switch (dialogPosition) {
    case PopoverPosition.Above: {
      const dialogFlush = isDialogFlush(dialogPosition, triggerRect, dialogRect)

      // Center the dialog horizontally above the trigger by default
      dialogStyles = {
        bottom: px(window.innerHeight - triggerRect.top),
        left: px(triggerRect.left + triggerRect.width / 2),
        transform: 'translateX(-50%)',
        paddingBottom: `${distanceFromTrigger}px`,
      }

      // Reposition dialog if it goes off the viewport
      // If the dialog goes off the viewport on both left and right edges
      // Then the right edge will take precedent
      if (dialogFlush.first) {
        // Align left edge of dialog to left edge of trigger
        dialogStyles = {
          ...dialogStyles,
          left: px(triggerRect.left),
          transform: 'translateX(0)',
        }
      } else if (dialogFlush.last) {
        // Align right edge of dialog to right edge of trigger
        dialogStyles = {
          ...dialogStyles,
          left: px(triggerRect.left + triggerRect.width),
          transform: 'translateX(-100%)',
        }
      }
      break
    }
    case PopoverPosition.Below: {
      const dialogFlush = isDialogFlush(dialogPosition, triggerRect, dialogRect)

      // Center the dialog horizontally below the trigger by default
      dialogStyles = {
        top: px(triggerRect.top + triggerRect.height),
        left: px(triggerRect.left + triggerRect.width / 2),
        transform: 'translateX(-50%)',
        paddingTop: `${distanceFromTrigger}px`,
      }

      // Reposition dialog if it goes off the viewport
      // If the dialog goes off the viewport on both left and right edges
      // Then the right edge will take precedent
      if (dialogFlush.first) {
        // Align left edge of dialog to left edge of trigger
        dialogStyles = {
          ...dialogStyles,
          left: px(triggerRect.left),
          transform: 'translateX(0)',
        }
      } else if (dialogFlush.last) {
        // Align right edge of dialog to right edge of trigger
        dialogStyles = {
          ...dialogStyles,
          left: px(triggerRect.left + triggerRect.width),
          transform: 'translateX(-100%)',
        }
      }
      break
    }
    case PopoverPosition.ToTheLeft: {
      const dialogFlush = isDialogFlush(dialogPosition, triggerRect, dialogRect)

      // Center the dialog vertically to the left of the trigger by default
      dialogStyles = {
        left: px(triggerRect.left),
        top: px(triggerRect.top + triggerRect.height / 2),
        transform: 'translate(-100%, -50%)',
        paddingRight: `${distanceFromTrigger}px`,
      }

      // Reposition dialog if it goes off the viewport
      // If the dialog goes off the viewport on both top and bottom edges
      // Then the bottom edge will take precedent
      if (dialogFlush.first) {
        // Align left edge of dialog to top edge of trigger
        dialogStyles = {
          ...dialogStyles,
          top: px(triggerRect.top),
          transform: 'translate(-100%, 0)',
        }
      } else if (dialogFlush.last) {
        // Align right edge of dialog to bottom edge of trigger
        dialogStyles = {
          ...dialogStyles,
          top: px(triggerRect.top + triggerRect.height),
          transform: 'translate(-100%, -100%)',
        }
      }
      break
    }
    case PopoverPosition.ToTheRightTop:
    case PopoverPosition.ToTheRight: {
      const dialogFlush = isDialogFlush(dialogPosition, triggerRect, dialogRect)

      // Center the dialog vertically to the right of the trigger by default
      dialogStyles = {
        left: px(triggerRect.left + triggerRect.width),
        top: px(triggerRect.top + triggerRect.height / 2),
        transform: 'translateY(-50%)',
        paddingLeft: `${distanceFromTrigger}px`,
      }

      // Reposition dialog if it goes off the viewport
      // If the dialog goes off the viewport on both top and bottom edges
      // Then the bottom edge will take precedent
      if (dialogFlush.first) {
        // Align left edge of dialog to top edge of trigger
        dialogStyles = {
          ...dialogStyles,
          top: px(triggerRect.top),
          transform: 'translateY(0)',
        }
      } else if (dialogFlush.last) {
        // Align right edge of dialog to bottom edge of trigger
        dialogStyles = {
          ...dialogStyles,
          top: px(triggerRect.top + triggerRect.height),
          transform: 'translateY(-100%)',
        }
      }
      break
    }
    default:
      break
  }

  return dialogStyles
}
