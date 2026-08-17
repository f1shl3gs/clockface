import React, {FunctionComponent, useEffect, useRef} from 'react'

interface Props {
  /** Function to call when click outside is detected */
  onClickOutside: (ev: MouseEvent) => void
  children: React.ReactElement
}

export const ClickOutside: FunctionComponent<Props> = ({
  onClickOutside,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (ev: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(ev.target as Node)
      ) {
        onClickOutside(ev)
      }
    }

    document.addEventListener('mousedown', handleClickOutside, true)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }, [onClickOutside])

  return (
    <div ref={containerRef} style={{display: 'contents'}}>
      {children}
    </div>
  )
}
