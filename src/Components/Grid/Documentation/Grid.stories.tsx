// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {Grid, GridColumn, GridRow} from '../'

// Types
import {Columns} from '../../../Types'

// Notes
import GridReadme from './Grid.md?raw'

export default {title: 'Layout/12 Column Grid'}

export const _Grid = () => {
  const gridRef = createRef<HTMLDivElement>()
  const gridRowRef = createRef<HTMLDivElement>()
  const gridColumnRef = createRef<HTMLDivElement>()

  const logRefs = (): void => {
    /* eslint-disable */
    console.log('Grid', gridRef.current)
    console.log('GridRow', gridRowRef.current)
    console.log('GridColumn', gridColumnRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <Grid ref={gridRef}>
        <GridRow>
          <GridColumn>
            <h3 className="text-center">Even Divisions</h3>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn widthXS={Columns.Two}>
            <div className="mockComponent stretch grid-example">2/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.Two}>
            <div className="mockComponent stretch grid-example">2/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.Two}>
            <div className="mockComponent stretch grid-example">2/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.Two}>
            <div className="mockComponent stretch grid-example">2/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.Two}>
            <div className="mockComponent stretch grid-example">2/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.Two}>
            <div className="mockComponent stretch grid-example">2/12</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn widthXS={Columns.Three}>
            <div className="mockComponent stretch grid-example">3/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.Three}>
            <div className="mockComponent stretch grid-example">3/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.Three}>
            <div className="mockComponent stretch grid-example">3/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.Three}>
            <div className="mockComponent stretch grid-example">3/12</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn widthXS={Columns.Four}>
            <div className="mockComponent stretch grid-example">4/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.Four}>
            <div className="mockComponent stretch grid-example">4/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.Four}>
            <div className="mockComponent stretch grid-example">4/12</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn widthXS={Columns.Six}>
            <div className="mockComponent stretch grid-example">6/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.Six}>
            <div className="mockComponent stretch grid-example">6/12</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn>
            <hr />
            <h3 className="text-center">Uneven Divisions</h3>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.Eleven}>
            <div className="mockComponent stretch grid-example">11/12</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn widthXS={Columns.Two}>
            <div className="mockComponent stretch grid-example">2/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.Ten}>
            <div className="mockComponent stretch grid-example">10/12</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn widthXS={Columns.Three}>
            <div className="mockComponent stretch grid-example">3/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.Nine}>
            <div className="mockComponent stretch grid-example">9/12</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn widthXS={Columns.Four}>
            <div className="mockComponent stretch grid-example">4/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.Eight}>
            <div className="mockComponent stretch grid-example">8/12</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn widthXS={Columns.Five}>
            <div className="mockComponent stretch grid-example">5/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.Seven}>
            <div className="mockComponent stretch grid-example">7/12</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn>
            <hr />
            <h3 className="text-center">Offsets</h3>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn widthXS={Columns.Four} offsetXS={Columns.Four}>
            <div className="mockComponent stretch grid-example">
              4/12 + 4/12
            </div>
          </GridColumn>
          <GridColumn widthXS={Columns.Four}>
            <div className="mockComponent stretch grid-example">4/12</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn widthXS={Columns.Three}>
            <div className="mockComponent stretch grid-example">3/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.Three} offsetXS={Columns.Three}>
            <div className="mockComponent stretch grid-example">
              3/12 + 3/12
            </div>
          </GridColumn>
          <GridColumn widthXS={Columns.Three}>
            <div className="mockComponent stretch grid-example">3/12</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn widthXS={Columns.Eight}>
            <div className="mockComponent stretch grid-example">8/12</div>
          </GridColumn>
          <GridColumn widthXS={Columns.Two} offsetXS={Columns.Two}>
            <div className="mockComponent stretch grid-example">
              2/12 + 2/12
            </div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn>
            <hr />
            <h3 className="text-center">Responsive Columns</h3>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn
            widthXS={Columns.Six}
            widthSM={Columns.Four}
            widthMD={Columns.Three}
            widthLG={Columns.Two}
          >
            <div className="mockComponent stretch grid-example">
              XS 6/12
              <br />
              SM 4/12
              <br />
              MD 3/12
              <br />
              LG 2/12
            </div>
          </GridColumn>
          <GridColumn
            widthXS={Columns.Six}
            widthSM={Columns.Four}
            widthMD={Columns.Three}
            widthLG={Columns.Two}
          >
            <div className="mockComponent stretch grid-example">
              XS 6/12
              <br />
              SM 4/12
              <br />
              MD 3/12
              <br />
              LG 2/12
            </div>
          </GridColumn>
          <GridColumn
            widthXS={Columns.Six}
            widthSM={Columns.Four}
            widthMD={Columns.Three}
            widthLG={Columns.Two}
          >
            <div className="mockComponent stretch grid-example">
              XS 6/12
              <br />
              SM 4/12
              <br />
              MD 3/12
              <br />
              LG 2/12
            </div>
          </GridColumn>
          <GridColumn
            widthXS={Columns.Six}
            widthSM={Columns.Four}
            widthMD={Columns.Three}
            widthLG={Columns.Two}
          >
            <div className="mockComponent stretch grid-example">
              XS 6/12
              <br />
              SM 4/12
              <br />
              MD 3/12
              <br />
              LG 2/12
            </div>
          </GridColumn>
          <GridColumn
            widthXS={Columns.Six}
            widthSM={Columns.Four}
            widthMD={Columns.Three}
            widthLG={Columns.Two}
          >
            <div className="mockComponent stretch grid-example">
              XS 6/12
              <br />
              SM 4/12
              <br />
              MD 3/12
              <br />
              LG 2/12
            </div>
          </GridColumn>
          <GridColumn
            widthXS={Columns.Six}
            widthSM={Columns.Four}
            widthMD={Columns.Three}
            widthLG={Columns.Two}
          >
            <div className="mockComponent stretch grid-example">
              XS 6/12
              <br />
              SM 4/12
              <br />
              MD 3/12
              <br />
              LG 2/12
            </div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn>
            <hr />
            <h3 className="text-center">Playground (Use Knobs)</h3>
          </GridColumn>
        </GridRow>
        <GridRow ref={gridRowRef}>
          <GridColumn
            ref={gridColumnRef}
            widthXS={(Columns as Record<string, any>)['Twelve']}
            widthSM={(Columns as Record<string, any>)['Twelve']}
            widthMD={(Columns as Record<string, any>)['Twelve']}
            widthLG={(Columns as Record<string, any>)['Twelve']}
            offsetXS={(Columns as Record<string, any>)['None']}
            offsetSM={(Columns as Record<string, any>)['None']}
            offsetMD={(Columns as Record<string, any>)['None']}
            offsetLG={(Columns as Record<string, any>)['None']}
          >
            <div className="mockComponent stretch grid-example alt-color">
              {`XS ${(Columns as Record<string, any>)['Twelve']}/12`}
              <br />
              {`SM ${(Columns as Record<string, any>)['Twelve']}/12`}
              <br />
              {`MD ${(Columns as Record<string, any>)['Twelve']}/12`}
              <br />
              {`LG ${(Columns as Record<string, any>)['Twelve']}/12`}
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
      <div className="story--test-buttons">
        <button onClick={logRefs}>Log Refs</button>
      </div>
    </div>
  )
}

_Grid.story = {
  parameters: {
    readme: {
      content: marked.parse(GridReadme),
    },
  },
}
