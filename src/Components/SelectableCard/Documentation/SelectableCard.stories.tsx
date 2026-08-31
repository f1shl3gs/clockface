// Libraries
import {createRef, KeyboardEvent, useState} from 'react'
import {marked} from 'marked'

// Components
import {SelectableCard} from '../'

// Types
import {ComponentColor, ComponentSize, IconFont} from '../../../Types'

// Notes
import SelectableCardReadme from './SelectableCard.md?raw'
import SelectableCardKeyInteractionReadme from './SelectableCardKeyInteraction.md?raw'

export default {title: 'Components/Cards/SelectableCard'}

const exampleStyle = {
  width: '200px',
  height: '200px',
  marginLeft: '8px',
  marginRight: '8px',
}

export const _SelectableCard = () => {
  const selectableCard1Ref = createRef<HTMLDivElement>()
  const selectableCard2Ref = createRef<HTMLDivElement>()
  const selectableCard3Ref = createRef<HTMLDivElement>()
  const selectableCard4Ref = createRef<HTMLDivElement>()
  const selectableCard5Ref = createRef<HTMLDivElement>()

  const logRefs = (): void => {
    console.log('SelectableCard 1', selectableCard1Ref.current)
    console.log('SelectableCard 2', selectableCard2Ref.current)
    console.log('SelectableCard 3', selectableCard3Ref.current)
    console.log('SelectableCard 4', selectableCard4Ref.current)
    console.log('SelectableCard 5', selectableCard5Ref.current)
  }

  return (
    <div className="story--example" style={{height: '400px'}}>
      <div className="story--test-buttons">
        <button onClick={logRefs}>Log Refs</button>
      </div>
      <SelectableCard
        ref={selectableCard1Ref}
        style={exampleStyle}
        id={'Titular Title'}
        label={'Titular Title'}
        selected={false}
        disabled={false}
        fontSize={(ComponentSize as Record<string, any>)['Small']}
        color={(ComponentColor as Record<string, any>)['Success']}
        onClick={() => {
          alert('card clicked!')
        }}
      />
      <SelectableCard
        ref={selectableCard1Ref}
        style={exampleStyle}
        id={'Titular Title'}
        label={'Titular Title'}
        selected={true}
        disabled={false}
        fontSize={(ComponentSize as Record<string, any>)['Small']}
        color={(ComponentColor as Record<string, any>)['Success']}
        onClick={() => {
          alert('card clicked!')
        }}
      />
      <SelectableCard
        ref={selectableCard4Ref}
        style={exampleStyle}
        id="default-card"
        icon={(IconFont as Record<string, any>)['Checkmark_New']}
        label="Default"
        selected={false}
        disabled={false}
        fontSize={(ComponentSize as Record<string, any>)['Small']}
        color={(ComponentColor as Record<string, any>)['Success']}
        onClick={() => {
          alert('card clicked!')
        }}
      >
        <div className="mockComponent stretch">Image</div>
      </SelectableCard>
      <SelectableCard
        ref={selectableCard2Ref}
        style={exampleStyle}
        id="selected-card"
        icon={(IconFont as Record<string, any>)['Checkmark_New']}
        label="Selected"
        selected={true}
        disabled={false}
        fontSize={(ComponentSize as Record<string, any>)['Small']}
        color={(ComponentColor as Record<string, any>)['Success']}
        onClick={() => {
          alert('card clicked!')
        }}
      >
        <div className="mockComponent stretch">Image</div>
      </SelectableCard>
      <SelectableCard
        ref={selectableCard5Ref}
        style={exampleStyle}
        id="disabled-card"
        icon={(IconFont as Record<string, any>)['Checkmark_New']}
        label="Disabled"
        selected={false}
        disabled={true}
        fontSize={(ComponentSize as Record<string, any>)['Small']}
        color={(ComponentColor as Record<string, any>)['Success']}
        onClick={() => {
          alert('card clicked!')
        }}
      >
        <div className="mockComponent stretch">Image</div>
      </SelectableCard>
      <SelectableCard
        ref={selectableCard3Ref}
        style={exampleStyle}
        id="selected-disabled-card"
        icon={(IconFont as Record<string, any>)['Checkmark_New']}
        label="Selected + Disabled"
        selected={true}
        disabled={true}
        fontSize={(ComponentSize as Record<string, any>)['Small']}
        color={(ComponentColor as Record<string, any>)['Success']}
        onClick={() => {
          alert('card clicked!')
        }}
      >
        <div className="mockComponent stretch">Image</div>
      </SelectableCard>
    </div>
  )
}

_SelectableCard.story = {
  name: 'SelectableCard',

  parameters: {
    readme: {
      content: marked.parse(SelectableCardReadme),
    },
  },
}

export const UsingTabIndex = () => {
  const [activeCardIDs, updateActiveCardIDs] = useState<string[]>([])

  const cards = [
    {label: 'Blade Runner', color: ComponentColor.Default},
    {label: 'Equilibrium', color: ComponentColor.Primary},
    {label: 'Ghost In The Shell', color: ComponentColor.Secondary},
    {label: 'Interstellar', color: ComponentColor.Success},
    {label: 'Akira', color: ComponentColor.Warning},
    {label: 'Total Recall', color: ComponentColor.Danger},
  ]

  const disabledCards = ['Interstellar']

  const isCardSelected = (card: string): boolean => {
    return activeCardIDs.includes(card)
  }

  const isCardDisabled = (card: string): boolean => {
    return disabledCards.includes(card)
  }

  const handleCardClick = (card?: string): void => {
    if (card === undefined) {
      return
    }
    const cardCurrentlyActive = activeCardIDs.includes(card)
    let updatedActiveCardIDs = activeCardIDs

    if (cardCurrentlyActive) {
      updatedActiveCardIDs = updatedActiveCardIDs.filter(
        cardID => cardID !== card,
      )
    } else {
      updatedActiveCardIDs = [...updatedActiveCardIDs, card]
    }

    updateActiveCardIDs(updatedActiveCardIDs)
  }

  const handleCardKeyDown = (
    card?: string,
    e?: KeyboardEvent<HTMLDivElement>,
  ): void => {
    if (card === undefined || e === undefined) {
      return
    }
    const spaceKey = e.keyCode === 32
    const cardCurrentlyActive = activeCardIDs.includes(card)
    let updatedActiveCardIDs = activeCardIDs

    if (cardCurrentlyActive) {
      updatedActiveCardIDs = updatedActiveCardIDs.filter(
        cardID => cardID !== card,
      )
    } else {
      updatedActiveCardIDs = [...updatedActiveCardIDs, card]
    }

    if (spaceKey) {
      updateActiveCardIDs(updatedActiveCardIDs)
    }
  }

  return (
    <div className="story--example" style={{height: '400px'}}>
      {cards.map((card, i) => (
        <SelectableCard
          formName="scifi movies"
          style={exampleStyle}
          tabIndex={i + 1}
          key={card.label}
          id={card.label}
          label={card.label}
          selected={isCardSelected(card.label)}
          disabled={isCardDisabled(card.label)}
          onClick={handleCardClick}
          onKeyDown={handleCardKeyDown}
          color={card.color}
        />
      ))}
    </div>
  )
}

UsingTabIndex.story = {
  name: 'Using tabIndex',

  parameters: {
    readme: {
      content: marked.parse(SelectableCardKeyInteractionReadme),
    },
  },
}
