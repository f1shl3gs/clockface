import React, {FunctionComponent} from 'react'

import {IconFont} from '../../Types'

import {ClockIcon} from './SubwayNavIcons'
import {SubwayNavStep} from './SubwayNavStep'

import './SubwayNav.scss'

export interface SubwayNavModel {
  glyph: IconFont
  name: string
  isComplete?: boolean
}

interface Props {
  currentStep: number
  navigationSteps: SubwayNavModel[]
  onStepClick: (step: number) => void
  settingUpIcon: React.ReactElement
  settingUpText: string
  setupTime?: string
  settingUpHeader?: string
  showCheckmark?: boolean
}

export const SubwayNav: FunctionComponent<Props> = ({
  currentStep,
  navigationSteps,
  onStepClick,
  settingUpIcon,
  settingUpText,
  setupTime,
  settingUpHeader,
  showCheckmark,
}) => {
  return (
    <div className="subway-navigation-container">
      <div className="subway-navigation-flex-wrapper">
        <div className="subway-navigation-title">
          <span className="subway-navigation-title-icon">{settingUpIcon}</span>
          <div className="subway-navigation-title-text">
            <h3>{settingUpHeader ?? 'Setting Up'}</h3>
            <h6>{settingUpText}</h6>
          </div>
        </div>
        {setupTime && (
          <div className="subway-navigation-time-to-complete">
            {ClockIcon}
            <h5>{setupTime}</h5>
          </div>
        )}
        {navigationSteps.map((value, index) => (
          <SubwayNavStep
            glyph={value.glyph}
            key={value.name}
            onClick={() => onStepClick(index + 1)}
            stepIsActive={index === currentStep - 1}
            stepIsComplete={value?.isComplete ?? index < currentStep - 1}
            stepIsReached={index <= currentStep - 1}
            text={value.name}
            showCheckmark={showCheckmark !== false}
          />
        ))}
      </div>
    </div>
  )
}
