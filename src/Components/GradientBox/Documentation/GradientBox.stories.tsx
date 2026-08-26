// Libraries
import {marked} from 'marked'

// Components
import {GradientBox} from '../GradientBox'

// Types
import {Gradients, InfluxColors} from '../../../Types'

// Notes
import GradientBoxReadme from './GradientBox.md?raw'

export default {title: 'Components/GradientBox'}

export const _GradientBox = () => {
  return (
    <div className="story--example">
      <GradientBox
        borderGradient={(Gradients as Record<string, any>)['MiyazakiSky']}
        borderColor={`${InfluxColors.Twilight}`}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '2px',
            padding: '8px',
            backgroundColor: `${`${InfluxColors.Raven}`}`,
          }}
        >
          some content
        </div>
      </GradientBox>
    </div>
  )
}

_GradientBox.story = {
  name: 'GradientBox',

  parameters: {
    readme: {
      content: marked.parse(GradientBoxReadme),
    },
  },
}
