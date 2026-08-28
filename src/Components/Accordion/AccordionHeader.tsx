// Libraries
import {FunctionComponent, Ref} from 'react'
import classnames from 'classnames'

// Types
import {IconFont, Direction, StandardFunctionProps} from '../../Types'
import {Icon} from '../Icon'

//Context
import {useAccordionContext} from './Accordion'

export interface AccordionHeaderProps extends StandardFunctionProps {
  /** Ref to the underlying DOM element */
  ref?: Ref<HTMLButtonElement>
}

export const AccordionHeader: FunctionComponent<AccordionHeaderProps> = ({
  id,
  style,
  testID = 'accordion-header',
  children,
  className,
  ref,
}) => {
  const context = useAccordionContext()

  const caretIcon = context.isExpanded
    ? IconFont.CaretDown_New
    : IconFont.CaretRight_New
  const AccordionHeaderCaretClassName = classnames('cf-accordion--icon', {
    [`cf-accordion--icon-${caretIcon}`]: caretIcon,
    [`cf-accordion--icon--disabled`]: context.disabled,
  })

  const AccordionHeaderClassName = classnames(`cf-accordion--header`, {
    [`cf-accordion--header--active`]: context.isExpanded && context.hasBody,
    [`${className}`]: className,
    [`cf-accordion--header--disabled`]: context.disabled,
    [`cf-accordion--header--clickable`]: context.hasBody && !context.disabled,
  })

  const toggleExpand = () => {
    if (!context.disabled) {
      context.setExpanded(!context.isExpanded)
      context.onChange()
    }
  }

  return (
    <button
      type="button"
      ref={ref}
      className={AccordionHeaderClassName}
      onClick={() => {
        toggleExpand()
      }}
      id={id}
      style={style}
      data-testid={testID}
    >
      {context.iconDirection === Direction.Left && (
        <div
          className={
            'cf-accordion--icon-container cf-accordion--icon-container-left'
          }
        >
          <Icon
            glyph={IconFont.CaretDown_New}
            className={AccordionHeaderCaretClassName}
          />
        </div>
      )}
      <div className={'cf-accordion--header--content'}>{children}</div>
      {context.iconDirection === Direction.Right && (
        <div
          onClick={() => {
            context.setExpanded(!context.isExpanded)
          }}
          className={
            'cf-accordion--icon-container cf-accordion--icon-container-right'
          }
        >
          <Icon
            glyph={IconFont.CaretDown_New}
            className={AccordionHeaderCaretClassName}
          />
        </div>
      )}
    </button>
  )
}
