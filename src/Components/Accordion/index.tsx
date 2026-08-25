// Libraries
import {Component} from 'react'

// Components
import {AccordionRoot, AccordionProps} from './Accordion'
import {AccordionHeader} from './AccordionHeader'
import {AccordionBodyItem} from './AccordionBodyItem'
import './Accordion.scss'

export class Accordion extends Component<AccordionProps> {
  public static readonly displayName = 'Accordion'

  public static Accordion = AccordionRoot
  public static AccordionHeader = AccordionHeader
  public static AccordionBodyItem = AccordionBodyItem

  render() {
    return <AccordionRoot {...this.props} />
  }
}

export type {AccordionProps, AccordionRef} from './Accordion'
