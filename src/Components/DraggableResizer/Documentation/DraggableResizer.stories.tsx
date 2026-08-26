// Libraries
import {createRef, useState} from 'react'
import {marked} from 'marked'

// Types
import {Orientation, Gradients} from '../../../Types'

// Components
import {DraggableResizer, DraggableResizerPanelRef} from '../'

// Notes
import DraggableResizerReadme from './DraggableResizer.md?raw'
import DraggableResizerPanelReadme from './DraggableResizerPanel.md?raw'
import DraggableResizerExampleAReadme from './DraggableResizerExampleA.md?raw'
import DraggableResizerExampleBReadme from './DraggableResizerExampleB.md?raw'

export default {title: 'Layout/Draggable Resizer/Examples'}

export const _DraggableResizer = () => (
  <div className="mockPage padded">
    <DraggableResizer
      handleOrientation={(Orientation as Record<string, any>)['Vertical']}
      handleGradient={
        (Gradients as Record<string, any>)[
          (Gradients as Record<string, any>)['PastelGothic']
        ]
      }
      handlePositions={[0.5]}
      onChangePositions={
        handlePositions =>
          console.log(`this.setState({handlePositions: ${handlePositions}})`) // eslint-disable-line
      }
    >
      <DraggableResizer.Panel>
        <div className="mockCard" />
      </DraggableResizer.Panel>
      <DraggableResizer.Panel>
        <div className="mockCard" />
      </DraggableResizer.Panel>
    </DraggableResizer>
  </div>
)

_DraggableResizer.story = {
  name: 'DraggableResizer',

  parameters: {
    readme: {
      content: marked.parse(DraggableResizerReadme),
    },
  },
}

export const DraggableResizerPanel = () => {
  const draggableResizerPanelRef = createRef<DraggableResizerPanelRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(draggableResizerPanelRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <DraggableResizer.Panel
        ref={draggableResizerPanelRef}
        minSizePixels={50}
        sizePercent={0.5}
      >
        <div className="mockCard" />
      </DraggableResizer.Panel>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

DraggableResizerPanel.story = {
  name: 'DraggableResizerPanel',

  parameters: {
    readme: {
      content: marked.parse(DraggableResizerPanelReadme),
    },
  },
}

export const _3Panels = () => {
  const [position, updatePosition] = useState<number[]>([0.25, 0.5])
  const draggableResizerPanelRef1 = createRef<DraggableResizerPanelRef>()
  const draggableResizerPanelRef2 = createRef<DraggableResizerPanelRef>()
  const draggableResizerPanelRef3 = createRef<DraggableResizerPanelRef>()
  const defaultBackgroundStyle = {backgroundColor: 'transparent'}
  const defaultBarStyle = {backgroundColor: '#ffffff'}

  const logRef = (): void => {
    /* eslint-disable */
    console.log(draggableResizerPanelRef1.current)
    console.log(draggableResizerPanelRef2.current)
    /* eslint-enable */
  }

  return (
    <div className="mockPage padded">
      <DraggableResizer
        handleOrientation={(Orientation as Record<string, any>)['Vertical']}
        handleGradient={
          (Gradients as Record<string, any>)[
            (Gradients as Record<string, any>)['PastelGothic']
          ]
        }
        backgroundStyle={defaultBackgroundStyle}
        handleBarStyle={defaultBarStyle}
        handlePositions={position}
        onChangePositions={handlePositions => updatePosition(handlePositions)}
      >
        <DraggableResizer.Panel
          ref={draggableResizerPanelRef1}
          isCollapsible={true}
        >
          <div className="mockCard">
            <span>1</span>
          </div>
        </DraggableResizer.Panel>
        <DraggableResizer.Panel
          ref={draggableResizerPanelRef2}
          isCollapsible={true}
        >
          <div className="mockCard">
            <span>2</span>
          </div>
        </DraggableResizer.Panel>
        <DraggableResizer.Panel
          ref={draggableResizerPanelRef3}
          isCollapsible={true}
        >
          <div className="mockCard">
            <span>3</span>
          </div>
        </DraggableResizer.Panel>
      </DraggableResizer>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_3Panels.story = {
  parameters: {
    readme: {
      content: marked.parse(DraggableResizerExampleAReadme),
    },
  },
}

export const _4Panels = () => {
  const [positions, updatePositions] = useState<number[]>([0.25, 0.5, 0.75])

  const draggableResizerPanelRef1 = createRef<DraggableResizerPanelRef>()
  const draggableResizerPanelRef2 = createRef<DraggableResizerPanelRef>()
  const draggableResizerPanelRef3 = createRef<DraggableResizerPanelRef>()
  const draggableResizerPanelRef4 = createRef<DraggableResizerPanelRef>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(draggableResizerPanelRef1.current)
    console.log(draggableResizerPanelRef2.current)
    console.log(draggableResizerPanelRef3.current)
    console.log(draggableResizerPanelRef4.current)
    /* eslint-enable */
  }

  return (
    <div className="mockPage padded">
      <DraggableResizer
        handleOrientation={(Orientation as Record<string, any>)['Vertical']}
        handleGradient={
          (Gradients as Record<string, any>)[
            (Gradients as Record<string, any>)['PastelGothic']
          ]
        }
        handlePositions={positions}
        onChangePositions={handlePositions => updatePositions(handlePositions)}
      >
        <DraggableResizer.Panel
          ref={draggableResizerPanelRef1}
          isCollapsible={true}
        >
          <div className="mockCard">
            <span>1</span>
          </div>
        </DraggableResizer.Panel>
        <DraggableResizer.Panel
          ref={draggableResizerPanelRef2}
          isCollapsible={true}
        >
          <div className="mockCard">
            <span>2</span>
          </div>
        </DraggableResizer.Panel>
        <DraggableResizer.Panel
          ref={draggableResizerPanelRef3}
          isCollapsible={true}
        >
          <div className="mockCard">
            <span>3</span>
          </div>
        </DraggableResizer.Panel>
        <DraggableResizer.Panel
          ref={draggableResizerPanelRef4}
          isCollapsible={true}
        >
          <div className="mockCard">
            <span>4</span>
          </div>
        </DraggableResizer.Panel>
      </DraggableResizer>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_4Panels.story = {
  parameters: {
    readme: {
      content: marked.parse(DraggableResizerExampleBReadme),
    },
  },
}
