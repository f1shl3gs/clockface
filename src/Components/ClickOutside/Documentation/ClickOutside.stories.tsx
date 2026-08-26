// Libraries
import {marked} from 'marked'

// Components
import {ClickOutside} from '../ClickOutside'

// Notes
import ClickOutsideReadme from './ClickOutside.md?raw'

export default {title: 'Utilities/ClickOutside'}

export const Example = () => (
  <div className="story--example">
    <ClickOutside onClickOutside={() => alert('Clicked outside')}>
      <div className="mockComponent box">Click outside this element</div>
    </ClickOutside>
  </div>
)

Example.story = {
  parameters: {
    readme: {
      content: marked.parse(ClickOutsideReadme),
    },
  },
}
