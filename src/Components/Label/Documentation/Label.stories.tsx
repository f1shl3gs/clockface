// Libraries
import * as React from 'react'
import {marked} from 'marked'

// Components
import {Label} from '../'

// Types
import {ComponentSize, InfluxColors} from '../../../Types'

// Notes
import LabelReadme from './Label.md?raw'

export default {title: 'Components/Label/Examples'}

export const Variants = () => {
  const labelReadOnlyRef = React.createRef<HTMLDivElement>()
  const labelClickableRef = React.createRef<HTMLDivElement>()
  const labelDeletableRef = React.createRef<HTMLDivElement>()

  const logLabelRefs = (): void => {
    console.log('Read-Only Label', labelReadOnlyRef.current)
    console.log('Clickable Label', labelClickableRef.current)
    console.log('Deletable Label', labelDeletableRef.current)
  }

  return (
    <div className="story--example">
      <table className="story--example-table">
        <tbody>
          <tr>
            <td>
              <p>Read Only</p>
            </td>
            <td>
              <Label
                ref={labelReadOnlyRef}
                id="example-label"
                name={'Fresh Label'}
                description={'I am okay with being labeled'}
                color={`${InfluxColors.Star}`}
                size={(ComponentSize as Record<string, any>)['Small']}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Clickable</p>
            </td>
            <td>
              <Label
                ref={labelClickableRef}
                id="example-label"
                name={'Fresh Label'}
                description={'I am okay with being labeled'}
                color={`${InfluxColors.Star}`}
                size={(ComponentSize as Record<string, any>)['Small']}
                onClick={id => {
                  alert(`Label with id: ${id} has been clicked`)
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Removable</p>
            </td>
            <td>
              <Label
                ref={labelDeletableRef}
                id="example-label"
                name={'Fresh Label'}
                description={'I am okay with being labeled'}
                color={`${InfluxColors.Star}`}
                size={(ComponentSize as Record<string, any>)['Small']}
                onDelete={id => {
                  alert(`Label with id: ${id} has been deleted`)
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="story--test-buttons">
        <button onClick={logLabelRefs}>Log Refs</button>
      </div>
    </div>
  )
}

Variants.story = {
  parameters: {
    readme: {
      content: marked.parse(LabelReadme),
    },
  },
}

export const Collage = () => {
  return (
    <div className="story--example">
      <table className="two-axis-table two-axis-table--spaced">
        <tbody>
          <tr>
            <td>
              <code>Size</code>
            </td>
            {[
              {size: ComponentSize.ExtraSmall, text: 'ExtraSmall'},
              {size: ComponentSize.Small, text: 'Small'},
              {size: ComponentSize.Medium, text: 'Medium'},
              {size: ComponentSize.Large, text: 'Large'},
            ].map((props, index) => (
              <td key={index}>
                <Label
                  id="example-label"
                  name={props.text}
                  description="Description"
                  color={InfluxColors.Star}
                  size={props.size}
                  onDelete={id => {
                    alert(`Label with id: ${id} has been deleted`)
                  }}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Collage.story = {
  parameters: {
    readme: {
      content: marked.parse(LabelReadme),
    },
  },
}
