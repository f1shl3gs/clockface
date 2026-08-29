// Libraries
import {FunctionComponent, CSSProperties} from 'react'
import classnames from 'classnames'

// Utils
import {usePortal} from '../../Utils/portals'
import {useDelayedUnmount} from '../../Utils/useDelayedUnmount'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'

// Styles
import './Drawer.scss'

// Matches d3-ease's easeExpInOut, which drove the previous react-spring version
const EASE_EXP_IN_OUT = 'cubic-bezier(0.87, 0, 0.13, 1)'

export interface DrawerProps extends StandardFunctionProps {
  /** Controls visibility of the drawer */
  visible: boolean
  /** Width of the drawer. Pass a percentage string (e.g. '30%') or a pixel number (e.g. 480) */
  width?: string | number
  /** Internal gutters (padding) of the drawer panel */
  margin?: ComponentSize
  /** Controls the transition timing */
  transitionDuration?: number
}

export const Drawer: FunctionComponent<DrawerProps> = ({
  id,
  testID = 'drawer',
  visible,
  children,
  className,
  width = '30%',
  margin = ComponentSize.Medium,
  transitionDuration = 360,
}) => {
  const shouldRender = useDelayedUnmount(visible, transitionDuration)

  const {addElementToPortal} = usePortal()

  const drawerClass = classnames('cf-drawer', {
    [`${className}`]: className,
  })

  if (!shouldRender) {
    return addElementToPortal(null)
  }

  const timing = `${transitionDuration}ms ${EASE_EXP_IN_OUT} both`
  const maskStyle: CSSProperties = {
    animation: `cf-drawer-mask-${visible ? 'in' : 'out'} ${timing}`,
  }
  const drawerClassStyle: CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
  }
  const childrenClass = classnames('cf-drawer--children', {
    [`cf-drawer--children__${margin}`]: margin,
  })
  const childrenStyle: CSSProperties = {
    animation: `cf-drawer-${visible ? 'in' : 'out'} ${timing}`,
  }

  const DrawerRender = (
    <>
      <div className="cf-drawer--mask" style={maskStyle} />
      <div
        className={drawerClass}
        style={drawerClassStyle}
        data-testid={testID}
        id={id}
      >
        <div
          className={childrenClass}
          data-testid={`${testID}--children`}
          style={childrenStyle}
        >
          {children}
        </div>
      </div>
    </>
  )

  return addElementToPortal(DrawerRender)
}
