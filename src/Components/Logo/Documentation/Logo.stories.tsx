// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {
  InfluxDataLogo,
  InfluxDataLogoRef,
  InfluxDBCloudLogo,
  InfluxDBCloudLogoRef,
  InfluxLogo,
  InfluxLogoRef,
} from '../'

// Types
import {
  InfluxColors,
  LogoAuxiliaryText,
  LogoBaseText,
  LogoMarks,
  LogoSymbols,
} from '../../../Types'

// Notes
import InfluxDataLogoReadme from './InfluxDataLogo.md?raw'
import InfluxDBCloudLogoReadme from './InfluxDBCloudLogo.md?raw'
import InfluxLogoReadme from './InfluxLogo.md?raw'

export default {title: 'Components/Logos'}

export const _InfluxLogo = () => {
  const logoRef = createRef<InfluxLogoRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(logoRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <InfluxLogo
        ref={logoRef}
        auxiliaryText={
          (LogoAuxiliaryText as Record<string, any>)[LogoAuxiliaryText.None]
        }
        baseText={
          (LogoBaseText as Record<string, any>)[LogoBaseText.InfluxData]
        }
        logoMark={(LogoMarks as Record<string, any>)[LogoMarks.Kubo]}
        symbol={(LogoSymbols as Record<string, any>)[LogoSymbols.Registered]}
        fill={(InfluxColors as Record<string, any>)[InfluxColors.White]}
        centeredLogo={false}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_InfluxLogo.story = {
  name: 'InfluxLogo',

  parameters: {
    readme: {
      content: marked.parse(InfluxLogoReadme),
    },
  },
}

export const _InfluxData = () => {
  const logoRef = createRef<InfluxDataLogoRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(logoRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <InfluxDataLogo
        ref={logoRef}
        simplified={false}
        fill={(InfluxColors as Record<string, any>)['White']}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_InfluxData.story = {
  name: 'InfluxData',

  parameters: {
    readme: {
      content: marked.parse(InfluxDataLogoReadme),
    },
  },
}

export const InfluxDbCloud = () => {
  const logoRef = createRef<InfluxDBCloudLogoRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(logoRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <InfluxDBCloudLogo
        ref={logoRef}
        fill={(InfluxColors as Record<string, any>)['White']}
        cloud={true}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

InfluxDbCloud.story = {
  name: 'InfluxDB Cloud',

  parameters: {
    readme: {
      content: marked.parse(InfluxDBCloudLogoReadme),
    },
  },
}
