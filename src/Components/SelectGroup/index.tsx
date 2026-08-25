// Libraries
import {Component} from 'react'

// Components
import {SelectGroupRoot, SelectGroupProps} from './SelectGroup'
import {SelectGroupOption} from './SelectGroupOption'

export class SelectGroup extends Component<SelectGroupProps> {
  public static readonly displayName = 'SelectGroup'

  public static SelectGroup = SelectGroupRoot
  public static Option = SelectGroupOption

  render() {
    return <SelectGroupRoot {...this.props} />
  }
}

export type {SelectGroupProps, SelectGroupRef} from './SelectGroup'
export * from './SelectGroupOption'
