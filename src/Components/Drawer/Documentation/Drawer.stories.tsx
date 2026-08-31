// Libraries
import {useState} from 'react'

// Components
import {Drawer, DrawerProps} from '../Drawer'
import {DrawerHeader, DrawerHeaderProps} from '../DrawerHeader'
import {DrawerBody} from '../DrawerBody'
import {DrawerFooter} from '../DrawerFooter'
import {Button} from '../../Button/Composed/Button'
import {DapperScrollbars} from '../../DapperScrollbars/DapperScrollbars'

export default {
  title: 'Components/Drawers/Family',
  component: Drawer,
}

const longContent = (
  <div>
    {Array.from({length: 20}, (_, index) => (
      <p key={index} style={{margin: '0 0 12px 0'}}>
        Drawer content line {index + 1} — Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    ))}
  </div>
)

const scrollableContent = (
  <DapperScrollbars autoHide={true} style={{height: '100%'}}>
    {longContent}
  </DapperScrollbars>
)

const Template = (args: Partial<DrawerProps> & Partial<DrawerHeaderProps>) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="story--example">
      <Button text="Open Drawer" onClick={() => setVisible(true)} />
      <Drawer
        visible={visible}
        width={args.width}
        margin={args.margin}
        transitionDuration={args.transitionDuration}
      >
        <DrawerHeader title={args.title ?? 'Drawer'} wrapText={args.wrapText} />
        <DrawerBody>{scrollableContent}</DrawerBody>
        <DrawerFooter>
          <Button text="Close" onClick={() => setVisible(false)} />
        </DrawerFooter>
      </Drawer>
    </div>
  )
}

export const _Drawer = Template.bind({}) as any
_Drawer.args = {
  width: '30%',
  margin: 'md',
  transitionDuration: 360,
  title: 'Drawer',
  wrapText: false,
}
_Drawer.argTypes = {
  width: {control: 'text'},
  margin: {
    control: 'inline-radio',
    options: {ExtraSmall: 'xs', Small: 'sm', Medium: 'md', Large: 'lg'},
  },
  transitionDuration: {control: 'number'},
  title: {control: 'text'},
  wrapText: {control: 'boolean'},
}
_Drawer.story = {name: 'Drawer'}
