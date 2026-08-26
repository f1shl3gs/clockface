import type {Preview} from '@storybook/react'
import './Story.scss'

const preview: Preview = {
  parameters: {
    options: {
      panelPosition: 'right',
      storySort: {
        order: [
          'Home',
          'Foundations',
          'Sandbox',
          'Components',
          'Layout',
          'Utilities',
        ],
      },
    },
  },
}

export default preview
