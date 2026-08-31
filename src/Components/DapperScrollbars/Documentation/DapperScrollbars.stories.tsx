// Components
import {DapperScrollbars} from '../DapperScrollbars'

// Types
import {ComponentSize, InfluxColors} from '../../../Types'

export default {
  title: 'Sandbox/DapperScrollbars',
  component: DapperScrollbars,
}

const longContent = (
  <div style={{padding: '16px'}}>
    {Array.from({length: 60}, (_, index) => (
      <div
        key={index}
        style={{
          padding: '12px 0',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        Item {index + 1} — Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    ))}
  </div>
)

export const Basic = () => (
  <div style={{height: '300px', border: '1px solid rgba(255,255,255,0.2)'}}>
    <DapperScrollbars>{longContent}</DapperScrollbars>
  </div>
)

export const AutoHide = () => (
  <div style={{height: '300px', border: '1px solid rgba(255,255,255,0.2)'}}>
    <DapperScrollbars autoHide={true}>{longContent}</DapperScrollbars>
  </div>
)

export const GradientThumbs = () => (
  <div style={{height: '300px', border: '1px solid rgba(255,255,255,0.2)'}}>
    <DapperScrollbars
      thumbStartColor={InfluxColors.White}
      thumbStopColor={InfluxColors.Hydrogen}
    >
      {longContent}
    </DapperScrollbars>
  </div>
)

export const LargeSize = () => (
  <div style={{height: '300px', border: '1px solid rgba(255,255,255,0.2)'}}>
    <DapperScrollbars size={ComponentSize.Large}>
      {longContent}
    </DapperScrollbars>
  </div>
)

export const AutoSizeHeight = () => (
  <div
    style={{
      maxHeight: '200px',
      border: '1px solid rgba(255,255,255,0.2)',
      width: '400px',
    }}
  >
    <DapperScrollbars autoSizeHeight={true}>
      <div style={{padding: '8px'}}>
        {Array.from({length: 5}, (_, index) => (
          <div key={index} style={{padding: '8px 0'}}>
            Short content item {index + 1} (container grows with content)
          </div>
        ))}
      </div>
    </DapperScrollbars>
  </div>
)

export const NoScrollX = () => (
  <div style={{height: '300px', border: '1px solid rgba(255,255,255,0.2)'}}>
    <DapperScrollbars noScrollX={true}>{longContent}</DapperScrollbars>
  </div>
)
