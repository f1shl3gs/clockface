// Libraries
import {RefObject, createRef} from 'react'
import {marked} from 'marked'

// Components
import {SquareGrid, SquareGridRef, SquareGridCardRef} from '../'

// Types
import {ComponentSize} from '../../../Types'

// Notes
import SquareGridReadme from './SquareGrid.md?raw'

export default {title: 'Layout/Fluid Square Grid'}

export const _SquareGrid = () => {
  const squareGridRef: RefObject<SquareGridRef | null> = createRef()
  const squareGridCardRef: RefObject<SquareGridCardRef | null> = createRef()

  const logRefs = (): void => {
    /* eslint-disable */
    console.log('SquareGrid', squareGridRef.current)
    console.log('SquareGridCard', squareGridCardRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <SquareGrid.SquareGrid
        ref={squareGridRef}
        cardSize={'100px'}
        gutter={(ComponentSize as Record<string, any>)['None']}
      >
        <SquareGrid.Card>
          <div className="mockComponent stretch">A</div>
        </SquareGrid.Card>
        <SquareGrid.Card>
          <div className="mockComponent stretch">B</div>
        </SquareGrid.Card>
        <SquareGrid.Card>
          <div className="mockComponent stretch">C</div>
        </SquareGrid.Card>
        <SquareGrid.Card>
          <div className="mockComponent stretch">D</div>
        </SquareGrid.Card>
        <SquareGrid.Card>
          <div className="mockComponent stretch">E</div>
        </SquareGrid.Card>
        <SquareGrid.Card>
          <div className="mockComponent stretch">F</div>
        </SquareGrid.Card>
        <SquareGrid.Card>
          <div className="mockComponent stretch">G</div>
        </SquareGrid.Card>
        <SquareGrid.Card>
          <div className="mockComponent stretch">H</div>
        </SquareGrid.Card>
        <SquareGrid.Card>
          <div className="mockComponent stretch">I</div>
        </SquareGrid.Card>
        <SquareGrid.Card>
          <div className="mockComponent stretch">J</div>
        </SquareGrid.Card>
        <SquareGrid.Card>
          <div className="mockComponent stretch">K</div>
        </SquareGrid.Card>
        <SquareGrid.Card>
          <div className="mockComponent stretch">L</div>
        </SquareGrid.Card>
        <SquareGrid.Card>
          <div className="mockComponent stretch">M</div>
        </SquareGrid.Card>
        <SquareGrid.Card>
          <div className="mockComponent stretch">N</div>
        </SquareGrid.Card>
        <SquareGrid.Card>
          <div className="mockComponent stretch">O</div>
        </SquareGrid.Card>
      </SquareGrid.SquareGrid>
      <div className="story--test-buttons">
        <button onClick={logRefs}>Log Refs</button>
      </div>
    </div>
  )
}

_SquareGrid.story = {
  name: 'SquareGrid',

  parameters: {
    readme: {
      content: marked.parse(SquareGridReadme),
    },
  },
}
