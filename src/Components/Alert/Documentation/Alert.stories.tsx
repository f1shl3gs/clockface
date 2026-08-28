// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {Alert} from '../Alert'

// Types
import {ComponentColor, IconFont} from '../../../Types'

// Notes
import AlertReadme from './Alert.md?raw'

export default {title: 'Components/Alert'}

export const Example = () => {
  const alertRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(alertRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <Alert
        ref={alertRef}
        color={(ComponentColor as Record<string, any>)['Primary']}
        icon={(IconFont as Record<string, any>)['AlertTriangle']}
      >
        {'Alert Text'}
      </Alert>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

Example.story = {
  parameters: {
    readme: {
      content: marked.parse(AlertReadme),
    },
  },
}
