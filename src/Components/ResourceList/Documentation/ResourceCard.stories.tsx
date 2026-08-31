// Libraries
import {createRef, useState} from 'react'
import {marked} from 'marked'

// Components
import {ResourceCard} from '../Card'
import {ResourceCardName} from '../Card/ResourceCardName'
import {ResourceCardEditableName} from '../Card/ResourceCardEditableName'
import {ResourceCardDescription} from '../Card/ResourceCardDescription'
import {ResourceCardEditableDescription} from '../Card/ResourceCardEditableDescription'
import {ResourceCardMeta} from '../Card/ResourceCardMeta'
import {SlideToggle} from '../../SlideToggle'
import {SquareButton} from '../../Button/Composed/SquareButton'
import {Label} from '../../Label/Label'
import {FlexBox} from '../../FlexBox'

// Types
import {
  IconFont,
  ComponentSize,
  ComponentColor,
  FlexDirection,
  AlignItems,
  JustifyContent,
  ComponentStatus,
  Appearance,
  InfluxColors,
} from '../../../Types'

// Notes
import ResourceCardReadme from './ResourceCard.md?raw'
import ResourceCardDescriptionReadme from './ResourceCardDescription.md?raw'
import ResourceCardEditableDescriptionReadme from './ResourceCardEditableDescription.md?raw'
import ResourceCardNameReadme from './ResourceCardName.md?raw'
import ResourceCardEditableNameReadme from './ResourceCardEditableName.md?raw'
import ResourceCardMetaReadme from './ResourceCardMeta.md?raw'
import ResourceCardExampleReadme from './ResourceCardExample.md?raw'
import {InputLabel} from '../../Inputs'
import {Popover} from '../../Popover'
import {List, ListIcon, ListItem} from '../../List'
import {Icon} from '../../Icon'

export default {title: 'Components/Cards/ResourceCard/Family'}

const resourceCardMeta = ['Created by Bob', 'Updated 25m ago']

export const _ResourceCard = () => {
  const resourceCardRef = createRef<HTMLDivElement>()
  const resourceCardNameRef = createRef<HTMLDivElement>()
  const resourceCardMetaRef = createRef<HTMLDivElement>()
  const resourceCardEditableDescriptionRef = createRef<HTMLDivElement>()

  const [name, setName] = useState<string>('Edit my name!')
  const [description, setDescription] = useState<string>(
    'Heirloom letterpress shaman, mixtape swag +1 8-bit coloring book ennui fanny pack small batch farm-to-table seitan sriracha austin. 8-bit mustache master cleanse bitters, vinyl shoreditch hot chicken authentic quinoa.',
  )

  const logRefs = (): void => {
    console.log('ResourceCard', resourceCardRef.current)
    console.log('ResourceCardName', resourceCardNameRef.current)
    console.log('ResourceCardMeta', resourceCardMetaRef.current)
    console.log(
      'ResourceCardEditableDescription',
      resourceCardEditableDescriptionRef.current,
    )
  }

  const resourceCardExampleStyle = {
    width: '700px',
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRefs}>Log Refs</button>
      </div>
      <ResourceCard
        ref={resourceCardRef}
        disabled={false}
        contextMenuInteraction={'alwaysVisible'}
        style={resourceCardExampleStyle}
        contextMenu={
          <FlexBox margin={ComponentSize.ExtraSmall}>
            <span>
              <SquareButton
                size={ComponentSize.ExtraSmall}
                icon={IconFont.Duplicate_New}
                color={ComponentColor.Colorless}
              />
            </span>
            <span>
              <SquareButton
                size={ComponentSize.ExtraSmall}
                icon={IconFont.Trash_New}
                color={ComponentColor.Colorless}
              />
            </span>
            <span>
              <SquareButton
                size={ComponentSize.ExtraSmall}
                icon={IconFont.CogSolid_New}
                color={ComponentColor.Colorless}
              />
            </span>
          </FlexBox>
        }
        highlightOnHover={true}
        direction={(FlexDirection as Record<string, any>)['Column']}
        alignItems={(AlignItems as Record<string, any>)['Stretch']}
        justifyContent={(JustifyContent as Record<string, any>)['FlexStart']}
        margin={(ComponentSize as Record<string, any>)['Small']}
      >
        <ResourceCardEditableName
          ref={resourceCardNameRef}
          name={name}
          onUpdate={setName}
          onClick={() => alert('<ResourceCardEditableName /> onClick fired!')}
        />
        <ResourceCardEditableDescription
          ref={resourceCardEditableDescriptionRef}
          description={description}
          onUpdate={setDescription}
          placeholder={'Enter a description'}
        />
        <ResourceCardMeta ref={resourceCardMetaRef}>
          {resourceCardMeta.map(meta => (
            <span key={meta}>{meta}</span>
          ))}
        </ResourceCardMeta>
      </ResourceCard>
    </div>
  )
}

_ResourceCard.story = {
  name: 'ResourceCard',

  parameters: {
    readme: {
      content: marked.parse(ResourceCardReadme),
    },
  },
}

export const _ResourceCardDescription = () => {
  const resourceCardDescriptionRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(resourceCardDescriptionRef.current)
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
      <ResourceCardDescription
        ref={resourceCardDescriptionRef}
        description={
          'Heirloom letterpress shaman, mixtape swag +1 8-bit coloring book ennui fanny pack small batch farm-to-table seitan sriracha austin. 8-bit mustache master cleanse bitters, vinyl shoreditch hot chicken authentic quinoa. '
        }
      />
    </div>
  )
}

_ResourceCardDescription.story = {
  name: 'ResourceCardDescription',

  parameters: {
    readme: {
      content: marked.parse(ResourceCardDescriptionReadme),
    },
  },
}

export const _ResourceCardEditableDescription = () => {
  const resourceCardEditableDescriptionRef = createRef<HTMLDivElement>()

  const logRefs = (): void => {
    console.log(
      'ResourceCardEditableDescription',
      resourceCardEditableDescriptionRef.current,
    )
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRefs}>Log Refs</button>
      </div>
      <ResourceCardEditableDescription
        ref={resourceCardEditableDescriptionRef}
        description={
          'Heirloom letterpress shaman, mixtape swag +1 8-bit coloring book ennui fanny pack small batch farm-to-table seitan sriracha austin. 8-bit mustache master cleanse bitters, vinyl shoreditch hot chicken authentic quinoa. '
        }
        onUpdate={description => alert(`onUpdate fired with "${description}"`)}
        placeholder={'Enter a description'}
      />
    </div>
  )
}

_ResourceCardEditableDescription.story = {
  name: 'ResourceCardEditableDescription',

  parameters: {
    readme: {
      content: marked.parse(ResourceCardEditableDescriptionReadme),
    },
  },
}

export const _ResourceCardName = () => {
  const resourceCardNameRef1 = createRef<HTMLDivElement>()
  const resourceCardNameRef2 = createRef<HTMLDivElement>()

  const logRefs = (): void => {
    console.log(resourceCardNameRef1.current)
    console.log(resourceCardNameRef2.current)
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRefs}>Log Refs</button>
      </div>
      <div style={{margin: '30px'}}>
        <ResourceCardName
          ref={resourceCardNameRef1}
          name={'Card Name'}
          onClick={() => alert('onClick fired!')}
          errorMessage={'Some Error'}
          status={ComponentStatus.Default}
        />
      </div>
      <div style={{margin: '30px'}}>
        <ResourceCardName
          ref={resourceCardNameRef2}
          name={'Card Name'}
          errorMessage={'Some Error'}
          status={ComponentStatus.Default}
        />
      </div>
    </div>
  )
}

_ResourceCardName.story = {
  name: 'ResourceCardName',

  parameters: {
    readme: {
      content: marked.parse(ResourceCardNameReadme),
    },
  },
}

export const _ResourceCardEditableName = () => {
  const resourceCardEditableNameRef1 = createRef<HTMLDivElement>()
  const resourceCardEditableNameRef2 = createRef<HTMLDivElement>()

  const logRefs = (): void => {
    console.log(resourceCardEditableNameRef1.current)
    console.log(resourceCardEditableNameRef2.current)
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRefs}>Log Refs</button>
      </div>
      <div style={{margin: '30px'}}>
        <ResourceCardEditableName
          ref={resourceCardEditableNameRef1}
          name={'Card Name'}
          onClick={() => alert('onClick fired!')}
          onUpdate={name => alert(`onUpdate fired with "${name}"`)}
          noNameString={'Untitled Card'}
          placeholder={'Name this card...'}
        />
      </div>
      <div style={{margin: '30px'}}>
        <ResourceCardEditableName
          ref={resourceCardEditableNameRef2}
          name={'Card Name'}
          onUpdate={name => alert(`onUpdate fired with "${name}"`)}
          noNameString={'Untitled Card'}
          placeholder={'Name this card...'}
        />
      </div>
    </div>
  )
}

_ResourceCardEditableName.story = {
  name: 'ResourceCardEditableName',

  parameters: {
    readme: {
      content: marked.parse(ResourceCardEditableNameReadme),
    },
  },
}

export const _ResourceCardMeta = () => {
  const resourceCardMeta = createRef<HTMLDivElement>()

  const logRef = (): void => {
    console.log(resourceCardMeta.current)
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
      <ResourceCardMeta
        ref={resourceCardMeta}
        direction={(FlexDirection as Record<string, any>)['Row']}
        alignItems={(AlignItems as Record<string, any>)['Center']}
        justifyContent={(JustifyContent as Record<string, any>)['FlexStart']}
      >
        <span>Boosh</span>
        <span>Bang</span>
        <span>Wham</span>
        <span>Pow</span>
      </ResourceCardMeta>
    </div>
  )
}

_ResourceCardMeta.story = {
  name: 'ResourceCardMeta',

  parameters: {
    readme: {
      content: marked.parse(ResourceCardMetaReadme),
    },
  },
}

export const ToggleableCard = () => {
  const settingsRef = createRef<HTMLButtonElement>()

  return (
    <div className="story--example">
      <div style={{width: `${900}px`}}>
        <ResourceCard
          contextMenu={
            <FlexBox margin={ComponentSize.ExtraSmall}>
              <span>
                <SquareButton
                  size={ComponentSize.ExtraSmall}
                  icon={IconFont.Duplicate_New}
                  color={ComponentColor.Colorless}
                />
              </span>
              <span>
                <SquareButton
                  size={ComponentSize.ExtraSmall}
                  icon={IconFont.Trash_New}
                  color={ComponentColor.Colorless}
                />
              </span>
              <span>
                <SquareButton
                  ref={settingsRef}
                  size={ComponentSize.ExtraSmall}
                  icon={IconFont.CogSolid_New}
                  color={ComponentColor.Colorless}
                />
              </span>
              <Popover
                appearance={Appearance.Outline}
                enableDefaultStyles={false}
                style={{width: '200px'}}
                contents={() => (
                  <List>
                    <ListItem
                      value=""
                      selected={false}
                      wrapText={false}
                      onClick={() => {}}
                      backgroundColor={InfluxColors.Pool}
                      size={ComponentSize.Small}
                    >
                      <ListIcon glyph={IconFont.Cube} />
                      {'Put Turtle in Water'}
                    </ListItem>
                  </List>
                )}
                triggerRef={settingsRef}
              />
            </FlexBox>
          }
        >
          <ResourceCardEditableName
            name={'Rolling temperature notebook'}
            onUpdate={name => alert(`onUpate name fired: ${name}`)}
          />
          <ResourceCardEditableDescription
            description={'No description'}
            onUpdate={desc => alert(`onUpate description fired: ${desc}`)}
          />
          <ResourceCardMeta>
            <FlexBox
              direction={FlexDirection.Row}
              alignItems={AlignItems.Center}
              margin={ComponentSize.Medium}
            >
              <SlideToggle
                onChange={() => {
                  // Do nothing
                }}
                size={ComponentSize.ExtraSmall}
                active={!false}
              />
              <InputLabel active={!false}>Active</InputLabel>
            </FlexBox>
            <strong>System bucket</strong>
            <a href="#">Setup instructions</a>
            <span>
              Last completed: 2021-07-21T09:15:00Z{' '}
              <Icon glyph={IconFont.AlertTriangle} />
            </span>
            <span>Scheduled to run every 15m</span>
            <span>ID: 07dd331e1c9fc00</span>
          </ResourceCardMeta>
          <FlexBox direction={FlexDirection.Row} margin={ComponentSize.Small}>
            <Label
              id="CRIT"
              description="I'm a cool label"
              name="CRIT"
              color="#da3434"
              size={ComponentSize.ExtraSmall}
              onDelete={() => {}}
            />
            <Label
              id="WARN"
              description="I'm a cool label"
              name="WARN"
              color="#f2b218"
              size={ComponentSize.ExtraSmall}
              onDelete={() => {}}
            />
            <Label
              id="OK"
              description="I'm a cool label"
              name="OK"
              color="#6ac255"
              size={ComponentSize.ExtraSmall}
              onDelete={() => {}}
            />
          </FlexBox>
        </ResourceCard>
      </div>
    </div>
  )
}

ToggleableCard.story = {
  parameters: {
    readme: {
      content: marked.parse(ResourceCardExampleReadme),
    },
  },
}
