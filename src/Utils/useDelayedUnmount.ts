// Libraries
import {useEffect, useState} from 'react'

// Keeps a component mounted for `duration` ms after `visible` turns false,
// giving CSS exit animations time to play before the actual unmount
export const useDelayedUnmount = (
  visible: boolean,
  duration: number
): boolean => {
  const [shouldRender, setShouldRender] = useState(visible)

  useEffect(() => {
    if (visible) {
      setShouldRender(true)
      return
    }

    if (!shouldRender) {
      return
    }

    const timer = setTimeout(() => setShouldRender(false), duration)
    return () => clearTimeout(timer)
  }, [visible, shouldRender, duration])

  return shouldRender
}
