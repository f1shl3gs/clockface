// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Icon'

// Styles
import './Alert.scss'

// Types
import {ComponentColor, IconFont, StandardFunctionProps} from '../../Types'

interface Props extends StandardFunctionProps {
  /** Alert color */
  color: ComponentColor
  /** Icon to be displayed to the left of text */
  icon?: IconFont
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const Alert: FunctionComponent<Props> = ({
  id,
  style,
  testID = 'alert',
  children,
  className,
  color,
  icon,
  ref,
}) => {
  const alertClassName = classnames('cf-alert', {
    [`cf-alert--${color}`]: color,
    'cf-alert--has-icon': icon,
    [`${className}`]: className,
  })

  return (
    <div
      className={alertClassName}
      data-testid={testID}
      id={id}
      style={style}
      ref={ref}
    >
      {!!icon && <Icon glyph={icon} className="cf-alert--icon" />}
      <div className="cf-alert--contents">{children}</div>
    </div>
  )
}
