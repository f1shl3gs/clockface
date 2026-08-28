// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {SquareGrid, SquareGridCard} from '../'

// Types
import {ComponentSize} from '../../../Types'

// Notes
import SquareGridReadme from './SquareGrid.md?raw'

export default {title: 'Layout/Fluid Square Grid'}

export const _SquareGrid = () => {
  const squareGridRef = createRef<HTMLDivElement>()
  const squareGridCardRef = createRef<HTMLDivElement>()

  const logRefs = (): void => {
    /* eslint-disable */
    console.log('SquareGrid', squareGridRef.current)
    console.log('SquareGridCard', squareGridCardRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <SquareGrid
        ref={squareGridRef}
        cardSize={'100px'}
        gutter={(ComponentSize as Record<string, any>)['None']}
      >
        <SquareGridCard ref={squareGridCardRef}>
          <div className="mockComponent stretch">A</div>
        </SquareGridCard>
        <SquareGridCard>
          <div className="mockComponent stretch">B</div>
        </SquareGridCard>
        <SquareGridCard>
          <div className="mockComponent stretch">C</div>
        </SquareGridCard>
        <SquareGridCard>
          <div className="mockComponent stretch">D</div>
        </SquareGridCard>
        <SquareGridCard>
          <div className="mockComponent stretch">E</div>
        </SquareGridCard>
        <SquareGridCard>
          <div className="mockComponent stretch">F</div>
        </SquareGridCard>
        <SquareGridCard>
          <div className="mockComponent stretch">G</div>
        </SquareGridCard>
        <SquareGridCard>
          <div className="mockComponent stretch">H</div>
        </SquareGridCard>
        <SquareGridCard>
          <div className="mockComponent stretch">I</div>
        </SquareGridCard>
        <SquareGridCard>
          <div className="mockComponent stretch">J</div>
        </SquareGridCard>
        <SquareGridCard>
          <div className="mockComponent stretch">K</div>
        </SquareGridCard>
        <SquareGridCard>
          <div className="mockComponent stretch">L</div>
        </SquareGridCard>
        <SquareGridCard>
          <div className="mockComponent stretch">M</div>
        </SquareGridCard>
        <SquareGridCard>
          <div className="mockComponent stretch">N</div>
        </SquareGridCard>
        <SquareGridCard>
          <div className="mockComponent stretch">O</div>
        </SquareGridCard>
      </SquareGrid>
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
