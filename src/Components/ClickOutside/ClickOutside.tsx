import React, {PureComponent} from 'react'

interface Props {
  /** Function to call when click outside is detected */
  onClickOutside: (e: any) => void
  children: React.ReactElement
}

export class ClickOutside extends PureComponent<Props> {
  public static readonly displayName = 'ClickOutside'

  private domNode: Element | null = null

  public componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, true)
  }

  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, true)
  }

  public render() {
    const child = React.Children.only(
      this.props.children
    ) as React.ReactElement<React.ClassAttributes<Element>>
    return React.cloneElement(child, {ref: this.setDomNode})
  }

  private handleClickOutside = (e: any) => {
    const domNode = this.domNode
    if (!domNode || !domNode.contains(e.target as Node)) {
      this.props.onClickOutside(e)
    }
  }

  private setDomNode = (node: Element | null) => {
    this.domNode = node
  }
}
