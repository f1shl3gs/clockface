// Libraries
import {FunctionComponent, useRef, useEffect, useState} from 'react'

// Components
import {ButtonBase} from './ButtonBase'

// Types
import {ComponentColor, ComponentStatus} from '../../../Types'

// Utils
import {getAverageColorFromLinearGradient, contrastRatio} from '../../../Utils/colors'

// Styles
import './ButtonBaseContrastTester.scss'

interface ButtonContrast {
  default: string
  active: string
  disabled: string
}

const initialContrast: ButtonContrast = {
  default: '',
  active: '',
  disabled: '',
}

const initialContrasts: ButtonContrast[] = [
  initialContrast,
  initialContrast,
  initialContrast,
  initialContrast,
  initialContrast,
  initialContrast,
]

export const ButtonBaseContrastTester: FunctionComponent<{}> = () => {
  const [contrast, setContrast] = useState<ButtonContrast[]>(initialContrasts)

  const defaultDefaultRef = useRef<HTMLButtonElement>(null)
  const activeDefaultRef = useRef<HTMLButtonElement>(null)
  const disabledDefaultRef = useRef<HTMLButtonElement>(null)

  const defaultPrimaryRef = useRef<HTMLButtonElement>(null)
  const activePrimaryRef = useRef<HTMLButtonElement>(null)
  const disabledPrimaryRef = useRef<HTMLButtonElement>(null)

  const defaultSecondaryRef = useRef<HTMLButtonElement>(null)
  const activeSecondaryRef = useRef<HTMLButtonElement>(null)
  const disabledSecondaryRef = useRef<HTMLButtonElement>(null)

  const defaultSuccessRef = useRef<HTMLButtonElement>(null)
  const activeSuccessRef = useRef<HTMLButtonElement>(null)
  const disabledSuccessRef = useRef<HTMLButtonElement>(null)

  const defaultWarningRef = useRef<HTMLButtonElement>(null)
  const activeWarningRef = useRef<HTMLButtonElement>(null)
  const disabledWarningRef = useRef<HTMLButtonElement>(null)

  const defaultDangerRef = useRef<HTMLButtonElement>(null)
  const activeDangerRef = useRef<HTMLButtonElement>(null)
  const disabledDangerRef = useRef<HTMLButtonElement>(null)

  const buttons = [
    {
      defaultRef: defaultDefaultRef,
      activeRef: activeDefaultRef,
      disabledRef: disabledDefaultRef,
      color: ComponentColor.Default,
      header: 'Default',
    },
    {
      defaultRef: defaultPrimaryRef,
      activeRef: activePrimaryRef,
      disabledRef: disabledPrimaryRef,
      color: ComponentColor.Primary,
      header: 'Primary',
    },
    {
      defaultRef: defaultSecondaryRef,
      activeRef: activeSecondaryRef,
      disabledRef: disabledSecondaryRef,
      color: ComponentColor.Secondary,
      header: 'Secondary',
    },
    {
      defaultRef: defaultSuccessRef,
      activeRef: activeSuccessRef,
      disabledRef: disabledSuccessRef,
      color: ComponentColor.Success,
      header: 'Success',
    },
    {
      defaultRef: defaultWarningRef,
      activeRef: activeWarningRef,
      disabledRef: disabledWarningRef,
      color: ComponentColor.Warning,
      header: 'Warning',
    },
    {
      defaultRef: defaultDangerRef,
      activeRef: activeDangerRef,
      disabledRef: disabledDangerRef,
      color: ComponentColor.Danger,
      header: 'Danger',
    },
  ]

  const calculateContrast = (): void => {
    const updatedContrast: ButtonContrast[] = buttons.map(button => {
      if (
        !button.defaultRef.current ||
        !button.activeRef.current ||
        !button.disabledRef.current
      ) {
        return initialContrast
      }

      // Default State
      const defaultStyle = window.getComputedStyle(button.defaultRef.current)
      const defaultColor = `${defaultStyle.color}`
      const defaultBackground = getAverageColorFromLinearGradient(
        `${defaultStyle.backgroundImage}`
      )

      // Active State
      const activeStyle = window.getComputedStyle(button.activeRef.current)
      const activeColor = `${activeStyle.color}`
      const activeBackground = getAverageColorFromLinearGradient(
        `${activeStyle.backgroundImage}`
      )

      // Disabled State
      const disabledStyle = window.getComputedStyle(button.disabledRef.current)
      const disabledColor = `${disabledStyle.color}`
      const disabledBackground = getAverageColorFromLinearGradient(
        `${disabledStyle.backgroundImage}`
      )

      return {
        default: contrastRatio(defaultColor, defaultBackground).toFixed(2),
        active: contrastRatio(activeColor, activeBackground).toFixed(2),
        disabled: contrastRatio(disabledColor, disabledBackground).toFixed(2),
      }
    })

    setContrast(updatedContrast)
  }

  useEffect((): (() => void) => {
    calculateContrast()

    return (): void => {
      return
    }
  }, [])

  return (
    <table className="button-base-contrast-tester">
      <thead>
        <tr>
          <th />
          {buttons.map(button => (
            <th key={`${button.color}-header`}>{button.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Default</td>
          {buttons.map((button, i) => (
            <td key={`${button.color}-default`}>
              <ButtonBase
                color={button.color}
                ref={button.defaultRef}
              >{`Contrast: ${contrast[i].default}`}</ButtonBase>
            </td>
          ))}
        </tr>
        <tr>
          <td>Active / Hover</td>
          {buttons.map((button, i) => (
            <td key={`${button.color}-active`}>
              <ButtonBase
                color={button.color}
                ref={button.activeRef}
                active={true}
              >{`Contrast: ${contrast[i].active}`}</ButtonBase>
            </td>
          ))}
        </tr>
        <tr>
          <td>Disabled</td>
          {buttons.map((button, i) => (
            <td key={`${button.color}-disabled`}>
              <ButtonBase
                color={button.color}
                ref={button.disabledRef}
                status={ComponentStatus.Disabled}
              >{`Contrast: ${contrast[i].disabled}`}</ButtonBase>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}
