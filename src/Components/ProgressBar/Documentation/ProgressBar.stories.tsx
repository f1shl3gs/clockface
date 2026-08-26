// Libraries
import {marked} from 'marked'

// Components
import {ProgressBar} from '../ProgressBar'

// Types
import {Gradients, InfluxColors} from '../../../Types'

// Notes
import ProgressBarReadme from './ProgressBar.md?raw'
import ThresholdBarReadme from './ThresholdBar.md?raw'
import {ThresholdBar} from '../Composed/ThresholdBar'

export default {title: 'Components/ProgressBar/Family'}

export const _ProgressBar = () => {
  return (
    <div className="story--example">
      <ProgressBar
        style={{width: '300px'}}
        barGradient={(Gradients as Record<string, any>)['MiyazakiSky']}
        value={50}
        max={100}
        color={`${InfluxColors.Pool}`}
        label={'Fennec Cuteness'}
      />
    </div>
  )
}

_ProgressBar.story = {
  name: 'ProgressBar',

  parameters: {
    readme: {
      content: marked.parse(ProgressBarReadme),
    },
  },
}

export const _ThresholdBar = () => {
  return (
    <div className="story--example">
      <ThresholdBar
        style={{width: '300px'}}
        value={50}
        max={100}
        label={'Stingrays'}
      />
    </div>
  )
}

_ThresholdBar.story = {
  name: 'ThresholdBar',

  parameters: {
    readme: {
      content: marked.parse(ThresholdBarReadme),
    },
  },
}
