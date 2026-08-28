// Libraries
import React, {CSSProperties, FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Components
import {DapperScrollbars} from '../../DapperScrollbars/DapperScrollbars'

// Utilities
import {generateInlineCSSGradient} from '../../../Utils/colors'
import {colord} from '../../../Utils/colord'

// Styles
import './FunnelPage.scss'

// Types
import {InfluxColors, StandardFunctionProps} from '../../../Types'

export interface FunnelPageProps extends StandardFunctionProps {
  /** Places a logo in the top left corner */
  logo?: React.ReactElement
  /** Primary page background color */
  backgroundColor?: InfluxColors | string
  /** First background accent color */
  accentColorA?: InfluxColors | string
  /** Second background accent color */
  accentColorB?: InfluxColors | string
  /** Control inline styles of the outermost elemment */
  pageStyle?: CSSProperties
  /** Renders a graphic in the funnel page */
  enableGraphic?: boolean
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const FunnelPage: FunctionComponent<FunnelPageProps> = ({
  id,
  logo,
  style,
  testID = 'funnel-page',
  children,
  pageStyle,
  className,
  accentColorA = InfluxColors.PurpleX,
  accentColorB = InfluxColors.DogwoodRose,
  enableGraphic = false,
  backgroundColor = InfluxColors.CetaceanBlue,
  ref,
}) => {
  const funnelPageClassName = classnames('cf-funnel-page', {
    [`${className}`]: className,
  })

  const backgroundStyle = {backgroundColor, ...pageStyle}
  const accentGradientAColors = [
    {
      position: 0,
      color: `${colord(accentColorA).alpha(0.6).toRgbString()}`,
    },
    {
      position: 100,
      color: `${colord(accentColorA).alpha(0).toRgbString()}`,
    },
  ]
  const accentGradientBColors = [
    {
      position: 0,
      color: `${colord(accentColorB).alpha(0.6).toRgbString()}`,
    },
    {
      position: 100,
      color: `${colord(accentColorB).alpha(0).toRgbString()}`,
    },
  ]
  const backgroundGradientColors = [
    {
      position: 0,
      color: `${colord(backgroundColor).alpha(0).toRgbString()}`,
    },
    {
      position: 100,
      color: `${colord(backgroundColor).alpha(0.8).toRgbString()}`,
    },
  ]
  const accentGradientA = generateInlineCSSGradient(250, accentGradientAColors)
  const accentGradientB = generateInlineCSSGradient(140, accentGradientBColors)
  const backgroundGradient = generateInlineCSSGradient(
    180,
    backgroundGradientColors
  )

  let backgroundGraphic = <></>

  if (enableGraphic) {
    backgroundGraphic = <div className="cf-funnel-page--graphic" />
  }

  return (
    <div
      className={funnelPageClassName}
      data-testid={testID}
      id={id}
      style={backgroundStyle}
      ref={ref}
    >
      <DapperScrollbars className="cf-funnel-page--scroll">
        <div
          className="cf-funnel-page--content"
          data-testid={`${testID}--content`}
          style={style}
        >
          {logo ? (
            <div
              className="cf-funnel-page--logo"
              data-testid={`${testID}--logo`}
            >
              {logo}
            </div>
          ) : null}
          {children}
        </div>
      </DapperScrollbars>
      {backgroundGraphic}
      <div className="cf-funnel-page--gradient" style={accentGradientA} />
      <div className="cf-funnel-page--gradient" style={accentGradientB} />
      <div className="cf-funnel-page--gradient" style={backgroundGradient} />
    </div>
  )
}
