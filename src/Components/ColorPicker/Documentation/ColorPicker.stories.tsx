// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {ColorPicker} from '../ColorPicker'

// Types
import {InfluxColors} from '../../../Types'

// Notes
import ColorPickerReadme from './ColorPicker.md?raw'
import ColorPickerCustomReadme from './ColorPickerCustom.md?raw'

export default {title: 'Components/Color Picker/Family'}

export const _ColorPicker = () => {
  const colorPickerRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(colorPickerRef.current)
  }

  const defaultStyle = {width: '400px'}

  return (
    <div className="story--example">
      <ColorPicker
        ref={colorPickerRef}
        style={defaultStyle}
        color={`${InfluxColors.Honeydew}`}
        onChange={(color, status) => {
          alert(`Color: ${color}, Status: ${status}`)
        }}
        maintainInputFocus={false}
      />
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_ColorPicker.story = {
  name: 'ColorPicker',

  parameters: {
    readme: {
      content: marked.parse(ColorPickerReadme),
    },
  },
}

const customColors = [
  {
    hex: '#7e0037',
    name: '#7e0037',
  },
  {
    hex: '#98003b',
    name: '#98003b',
  },
  {
    hex: '#b20040',
    name: '#b20040',
  },
  {
    hex: '#cb0045',
    name: '#cb0045',
  },
  {
    hex: '#e5004a',
    name: '#e5004a',
  },
  {
    hex: '#ff004f',
    name: '#ff004f',
  },
  {
    hex: '#ff313b',
    name: '#ff313b',
  },
  {
    hex: '#ff6128',
    name: '#ff6128',
  },
  {
    hex: '#ff9214',
    name: '#ff9214',
  },
  {
    hex: '#ffc200',
    name: '#ffc200',
  },
  {
    hex: '#ffcc27',
    name: '#ffcc27',
  },
  {
    hex: '#ffd64e',
    name: '#ffd64e',
  },
  {
    hex: '#ffe075',
    name: '#ffe075',
  },
  {
    hex: '#ffe99b',
    name: '#ffe99b',
  },
  {
    hex: '#fff3c2',
    name: '#fff3c2',
  },
  {
    hex: '#fffde9',
    name: '#fffde9',
  },
]

export const CustomColorPalette = () => {
  const colorPickerRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(colorPickerRef.current)
  }

  return (
    <div className="story--example">
      <div style={{width: `${300}px`}}>
        <ColorPicker
          ref={colorPickerRef}
          swatchesPerRow={4}
          color={`${customColors[3].hex}`}
          onChange={color => {
            alert(`Swatch selected: ${color}`)
          }}
          maintainInputFocus={false}
          colors={customColors}
        />
      </div>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

CustomColorPalette.story = {
  parameters: {
    readme: {
      content: marked.parse(ColorPickerCustomReadme),
    },
  },
}
