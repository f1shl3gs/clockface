// Libraries
import React, {FunctionComponent, CSSProperties, useEffect, useRef} from 'react'
import {Transition, animated} from '@react-spring/web'
import classnames from 'classnames'
import * as easings from 'd3-ease'

// Components
import {OverlayMask} from './OverlayMask'
import {DapperScrollbars} from '../DapperScrollbars/DapperScrollbars'

// Utils
import {usePortal} from '../../Utils/portals'

// Types
import {StandardFunctionProps, InfluxColors} from '../../Types'

// Styles
import './Overlay.scss'

const AnimatedOverlayMask = animated(OverlayMask)

export interface OverlayProps extends StandardFunctionProps {
  /** Controls visibility of the overlay */
  visible: boolean
  /** Will replace the mask element with a custom element, useful for customizing the mask appearance */
  renderMaskElement?: (style: CSSProperties) => React.ReactElement
  /** Controls the transition timing */
  transitionDuration?: number
  /** Accepts state handler for visible prop to enable escape press functionality */
  onEscape?: (visible: boolean) => void
}

export const OverlayRoot: FunctionComponent<OverlayProps> = ({
  id,
  testID = 'overlay',
  visible,
  children,
  onEscape,
  className,
  transitionDuration = 360,
  renderMaskElement = (style: CSSProperties) => (
    <AnimatedOverlayMask style={style} />
  ),
}) => {
  const oldVisibility = useRef<boolean>(visible)

  useEffect(() => {
    if (visible && !oldVisibility.current) {
      window.addEventListener('keydown', handleEscapeKey)
    }

    oldVisibility.current = visible
    return () => {
      window.removeEventListener('keydown', handleEscapeKey)
    }
  }, [visible])

  const handleEscapeKey = (e: KeyboardEvent): void => {
    if (e.key === 'Escape' && onEscape) {
      onEscape(false)
    }
  }

  const {addElementToPortal} = usePortal()

  const transitionConfig = {
    duration: transitionDuration,
    easing: easings.easeExpInOut,
  }

  const overlayClass = classnames('cf-overlay', {
    [`${className}`]: className,
  })

  const OverlayRender = (
    <>
      <Transition
        items={visible ? [true] : []}
        from={{opacity: 0}}
        enter={{opacity: 0.8}}
        leave={{opacity: 0}}
        config={transitionConfig}
      >
        {props => renderMaskElement(props)}
      </Transition>
      <Transition
        items={visible ? [true] : []}
        from={{opacity: 0, transform: 'translateY(44px)'}}
        enter={{opacity: 1, transform: 'translateY(0)'}}
        leave={{opacity: 0, transform: 'translateY(44px)'}}
        config={transitionConfig}
      >
        {props => (
          <DapperScrollbars
            className={overlayClass}
            thumbStartColor={InfluxColors.White}
            thumbStopColor={InfluxColors.Hydrogen}
            noScrollX={true}
            autoHide={false}
            testID={testID}
            id={id}
          >
            <animated.div
              className="cf-overlay--children"
              data-testid={`${testID}--children`}
              style={props}
            >
              {children}
            </animated.div>
          </DapperScrollbars>
        )}
      </Transition>
    </>
  )

  return addElementToPortal(OverlayRender)
}

OverlayRoot.displayName = 'Overlay'
