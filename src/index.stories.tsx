// Readme
import IndexReadme from './index.md?raw'

export default {title: 'Home/Clockface'}

export const Overview = () => {
  return <div className="markdown-body"></div>
}

Overview.story = {
  parameters: {
    readme: {
      content: IndexReadme,
    },
  },
}
