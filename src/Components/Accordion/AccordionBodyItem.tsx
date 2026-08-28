// Libraries
import {FunctionComponent, Ref} from 'react' // Styles
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

//Context
import {useAccordionContext} from './Accordion'

export interface AccordionBodyItemProps extends StandardFunctionProps {
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLDivElement>
}

export const AccordionBodyItem: FunctionComponent<AccordionBodyItemProps> = ({
  id,
  style,
  testID = 'accordion-body',
  children,
  className,
  ref,
}) => {
  const context = useAccordionContext()

  const accordionBodyContainerClassName = classnames(`cf-accordion--body`, {
    [`cf-accordion--body-alignment-${context.iconPlacementPosition}`]:
      context.iconPlacementPosition,
    [`${className}`]: className,
    [`cf-accordion--body--disabled`]: context.isDisabled,
  })

  return (
    <div
      ref={ref}
      className={accordionBodyContainerClassName}
      data-testid={testID}
      id={id}
      style={style}
    >
      {children}
    </div>
  )
}
