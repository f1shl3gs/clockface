// Libraries
import {createRef, useState} from 'react'
import {marked} from 'marked'

// Types
import {Orientation, Gradients} from '../../../Types'

// Components
import {DraggableResizer, DraggableResizerPanel} from '../'

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
      onChangePositions={handlePositions =>
        console.log(`this.setState({handlePositions: ${handlePositions}})`)
      }
    >
      <DraggableResizerPanel>
        <div className="mockCard" />
      </DraggableResizerPanel>
      <DraggableResizerPanel>
        <div className="mockCard" />
      </DraggableResizerPanel>
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

export const _DraggableResizerPanel = () => {
  const draggableResizerPanelRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(draggableResizerPanelRef.current)
  }

  return (
    <div className="story--example">
      <DraggableResizerPanel
        ref={draggableResizerPanelRef}
        minSizePixels={50}
        sizePercent={0.5}
      >
        <div className="mockCard" />
      </DraggableResizerPanel>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_DraggableResizerPanel.story = {
  name: 'DraggableResizerPanel',

  parameters: {
    readme: {
      content: marked.parse(DraggableResizerPanelReadme),
    },
  },
}

export const _3Panels = () => {
  const [position, updatePosition] = useState<number[]>([0.25, 0.5])
  const draggableResizerPanelRef1 = createRef<HTMLDivElement>()
  const draggableResizerPanelRef2 = createRef<HTMLDivElement>()
  const draggableResizerPanelRef3 = createRef<HTMLDivElement>()
  const defaultBackgroundStyle = {backgroundColor: 'transparent'}
  const defaultBarStyle = {backgroundColor: '#ffffff'}

  const logRef = (): void => {
    console.log(draggableResizerPanelRef1.current)
    console.log(draggableResizerPanelRef2.current)
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
        <DraggableResizerPanel
          ref={draggableResizerPanelRef1}
          isCollapsible={true}
        >
          <div className="mockCard">
            <span>1</span>
          </div>
        </DraggableResizerPanel>
        <DraggableResizerPanel
          ref={draggableResizerPanelRef2}
          isCollapsible={true}
        >
          <div className="mockCard">
            <span>2</span>
          </div>
        </DraggableResizerPanel>
        <DraggableResizerPanel
          ref={draggableResizerPanelRef3}
          isCollapsible={true}
        >
          <div className="mockCard">
            <span>3</span>
          </div>
        </DraggableResizerPanel>
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

  const draggableResizerPanelRef1 = createRef<HTMLDivElement>()
  const draggableResizerPanelRef2 = createRef<HTMLDivElement>()
  const draggableResizerPanelRef3 = createRef<HTMLDivElement>()
  const draggableResizerPanelRef4 = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(draggableResizerPanelRef1.current)
    console.log(draggableResizerPanelRef2.current)
    console.log(draggableResizerPanelRef3.current)
    console.log(draggableResizerPanelRef4.current)
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
        <DraggableResizerPanel
          ref={draggableResizerPanelRef1}
          isCollapsible={true}
        >
          <div className="mockCard">
            <span>1</span>
          </div>
        </DraggableResizerPanel>
        <DraggableResizerPanel
          ref={draggableResizerPanelRef2}
          isCollapsible={true}
        >
          <div className="mockCard">
            <span>2</span>
          </div>
        </DraggableResizerPanel>
        <DraggableResizerPanel
          ref={draggableResizerPanelRef3}
          isCollapsible={true}
        >
          <div className="mockCard">
            <span>3</span>
          </div>
        </DraggableResizerPanel>
        <DraggableResizerPanel
          ref={draggableResizerPanelRef4}
          isCollapsible={true}
        >
          <div className="mockCard">
            <span>4</span>
          </div>
        </DraggableResizerPanel>
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
