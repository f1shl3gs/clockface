import {fireEvent} from '@testing-library/dom'
import {cleanup, render} from '@testing-library/react'
import {useState} from 'react'
import {createPortal} from 'react-dom'
import {afterEach, describe, expect, it, vi} from 'vitest'
import {ClickOutside} from './ClickOutside'

const textInsideOfComponent = "Don't click here, click outside of here, family"
const siblingTextOfComponent =
  'This is a piece of text near the component. Click here.'
const cousinTextOfComponent =
  "This is a cousin piece of text outside the component. This text's parent is a sibling to the component's parent."
const toggleVisibilityText = 'Click here to umount the ClickOutside component'

interface Props {
  onClickOutside: (e: any) => void
}

const Wrapper = (props: Props) => {
  const [shouldShowClickOutsideComponent, setComponentVisibility] =
    useState(true)

  const toggleComponentVisibility = () => {
    setComponentVisibility(!shouldShowClickOutsideComponent)
  }
  return (
    <div>
      <div>
        {shouldShowClickOutsideComponent && (
          <ClickOutside onClickOutside={props.onClickOutside}>
            <div>{textInsideOfComponent}</div>
          </ClickOutside>
        )}
        <div>{siblingTextOfComponent}</div>
      </div>
      <div>
        <div>{cousinTextOfComponent}</div>
        <a onClick={toggleComponentVisibility}>{toggleVisibilityText}</a>
      </div>
    </div>
  )
}

describe('the Click Outside component', () => {
  afterEach(() => {
    cleanup()
  })
  it('calls the `onClickOutside` method when a mousedown event outside the handler is fired', () => {
    const mockClickOutside = vi.fn()
    const {getByText} = render(<Wrapper onClickOutside={mockClickOutside} />)

    fireEvent.mouseDown(getByText(siblingTextOfComponent))
    expect(mockClickOutside).toHaveBeenCalledTimes(1)

    fireEvent.mouseDown(getByText(cousinTextOfComponent))
    expect(mockClickOutside).toHaveBeenCalledTimes(2)
  })

  it("doesn't call the `onClickOutside` method when a click inside the handler happens", () => {
    const mockClickOutside = vi.fn()
    const {getByText} = render(<Wrapper onClickOutside={mockClickOutside} />)

    fireEvent.click(getByText(textInsideOfComponent))
    expect(mockClickOutside).toHaveBeenCalledTimes(0)
    fireEvent.mouseDown(getByText(textInsideOfComponent))
    expect(mockClickOutside).toHaveBeenCalledTimes(0)
  })

  it('properly unbinds the event when it unmounts itself', () => {
    const mockClickOutside = vi.fn()
    const {getByText} = render(<Wrapper onClickOutside={mockClickOutside} />)

    fireEvent.mouseDown(getByText(siblingTextOfComponent))
    expect(mockClickOutside).toHaveBeenCalledTimes(1)
    mockClickOutside.mockClear()

    fireEvent.click(getByText(toggleVisibilityText))
    fireEvent.mouseDown(getByText(siblingTextOfComponent))
    expect(mockClickOutside).toHaveBeenCalledTimes(0)
  })

  it('tracks the rendered child through a DOM ref', () => {
    const mockClickOutside = vi.fn()
    const {getByText} = render(
      <ClickOutside onClickOutside={mockClickOutside}>
        <button>Inside button</button>
      </ClickOutside>,
    )

    fireEvent.mouseDown(getByText('Inside button'))
    expect(mockClickOutside).not.toHaveBeenCalled()

    fireEvent.mouseDown(document.body)
    expect(mockClickOutside).toHaveBeenCalledTimes(1)
  })

  it('treats portalled content as inside, even though it lives outside the child in the DOM', () => {
    const mockClickOutside = vi.fn()
    const portalElement = document.createElement('div')
    document.body.appendChild(portalElement)

    const {getByText} = render(
      <ClickOutside onClickOutside={mockClickOutside}>
        <div>
          {createPortal(<button>Portalled button</button>, portalElement)}
        </div>
      </ClickOutside>,
    )

    fireEvent.mouseDown(getByText('Portalled button'))
    expect(mockClickOutside).not.toHaveBeenCalled()

    fireEvent.mouseDown(document.body)
    expect(mockClickOutside).toHaveBeenCalledTimes(1)

    document.body.removeChild(portalElement)
  })

  it('still fires after an inside click swallowed its own event', () => {
    const mockClickOutside = vi.fn()

    const StopPropagationChild = () => (
      <div onMouseDown={e => e.stopPropagation()}>Blocked</div>
    )

    const {getByText} = render(
      <ClickOutside onClickOutside={mockClickOutside}>
        <StopPropagationChild />
      </ClickOutside>,
    )

    // The document listener never runs for this click, so the mark is left behind
    fireEvent.mouseDown(getByText('Blocked'))
    expect(mockClickOutside).not.toHaveBeenCalled()

    // The next outside click is a different event and must still fire
    fireEvent.mouseDown(document.body)
    expect(mockClickOutside).toHaveBeenCalledTimes(1)
  })

  it('renders no extra DOM around the child', () => {
    const mockClickOutside = vi.fn()

    const {container} = render(
      <ClickOutside onClickOutside={mockClickOutside}>
        <div data-testid="inside">Inside</div>
      </ClickOutside>,
    )

    expect(container.children.length).toBe(1)

    const child = container.firstElementChild as HTMLElement
    expect(child.dataset.testid).toBe('inside')
    expect(child.style.display).toBe('')
  })

  it('leaves the child own mouse handlers untouched', () => {
    const mockClickOutside = vi.fn()
    const mockChildMouseDown = vi.fn()

    const {getByTestId} = render(
      <ClickOutside onClickOutside={mockClickOutside}>
        <div data-testid="inside" onMouseDown={mockChildMouseDown}>
          Inside
        </div>
      </ClickOutside>,
    )

    fireEvent.mouseDown(getByTestId('inside'))
    expect(mockChildMouseDown).toHaveBeenCalledTimes(1)
  })
})
