// Libraries
import {createRef} from 'react'
import {marked} from 'marked'

// Components
import {ResourceList} from '../List'
import {ResourceListHeader} from '../List/ResourceListHeader'
import {ResourceListBody} from '../List/ResourceListBody'
import {ResourceListSorter} from '../List/ResourceListSorter'
import {
  ResourceCard,
  ResourceCardEditableDescription,
  ResourceCardName,
} from '../Card'
import {Input} from '../../Inputs'
import {EmptyState, EmptyStateText} from '../../EmptyState'

// Types
import {Sort, IconFont} from '../../../Types'

// Notes
import ResourceListReadme from './ResourceList.md?raw'
import ResourceListHeaderReadme from './ResourceListHeader.md?raw'
import ResourceListBodyReadme from './ResourceListBody.md?raw'
import ResourceListSorterReadme from './ResourceListSorter.md?raw'
import ResourceListExampleReadme from './ResourceListExample.md?raw'

export default {title: 'Components/ResourceList/List Family'}

export const _ResourceList = () => {
  const resourceListRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(resourceListRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
      <ResourceList ref={resourceListRef} />
    </div>
  )
}

_ResourceList.story = {
  name: 'ResourceList',

  parameters: {
    readme: {
      content: marked.parse(ResourceListReadme),
    },
  },
}

const exampleHeaderSorts = [
  {
    key: 'name',
    name: 'Name',
  },
  {
    key: 'created_at',
    name: 'Created At',
  },
  {
    key: 'color',
    name: 'Color',
  },
]

export const _ResourceListHeader = () => {
  const resourceListHeaderRef = createRef<HTMLDivElement>()
  const resourceListSorterNameRef = createRef<HTMLDivElement>()
  const resourceListSorterCreatedRef = createRef<HTMLDivElement>()
  const resourceListSorterColorRef = createRef<HTMLDivElement>()

  const sorterRefs = [
    resourceListSorterNameRef,
    resourceListSorterCreatedRef,
    resourceListSorterColorRef,
  ]

  const logRefs = (): void => {
    /* eslint-disable */
    console.log('ResourceListHeader', resourceListHeaderRef.current)
    console.log('ResourceListSorter (Name)', resourceListSorterNameRef.current)
    console.log(
      'ResourceListSorter (Created)',
      resourceListSorterCreatedRef.current
    )
    console.log(
      'ResourceListSorter (Color)',
      resourceListSorterColorRef.current
    )
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRefs}>Log Refs</button>
      </div>
      <ResourceListHeader
        ref={resourceListHeaderRef}
        filterComponent={
          <div className="mockComponent" style={{width: '300px'}}>
            Filter Input goes here
          </div>
        }
      >
        {exampleHeaderSorts.map((header, i) => (
          <ResourceListSorter
            ref={sorterRefs[i]}
            key={header.key}
            sortKey={header.key}
            name={header.name}
            sort={Sort.None}
            onClick={() => {
              // do nothing
            }}
          />
        ))}
      </ResourceListHeader>
    </div>
  )
}

_ResourceListHeader.story = {
  name: 'ResourceListHeader',

  parameters: {
    readme: {
      content: marked.parse(ResourceListHeaderReadme),
    },
  },
}

export const _ResourceListBody = () => {
  const resourceListBodyRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(resourceListBodyRef.current)
    /* eslint-enable */
  }

  const children = 'Resource List appears here YAY!'
  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
      <ResourceListBody
        ref={resourceListBodyRef}
        emptyState={
          <div className="mockComponent stretch">EmptyState goes here</div>
        }
      >
        {children}
      </ResourceListBody>
    </div>
  )
}

_ResourceListBody.story = {
  name: 'ResourceListBody',

  parameters: {
    readme: {
      content: marked.parse(ResourceListBodyReadme),
    },
  },
}

export const _ResourceListSorter = () => {
  const resourceListSorterRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(resourceListSorterRef.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
      <ResourceListSorter
        ref={resourceListSorterRef}
        name={'Created At'}
        onClick={nextSort =>
          alert(`onClick fired! Next sort is: "${nextSort}"`)
        }
        sort={(Sort as Record<string, any>)['None']}
        sortKey={'created_at'}
      />
    </div>
  )
}

_ResourceListSorter.story = {
  name: 'ResourceListSorter',

  parameters: {
    readme: {
      content: marked.parse(ResourceListSorterReadme),
    },
  },
}

const exampleDashboards = [
  {
    id: '23wfsdff',
    name: 'Server Stats',
    description: 'Monitoring dashboard for our 17 servers',
    updatedAt: '24m ago',
    createdBy: 'Bob',
  },
  {
    id: '9sdifsdw',
    name: 'West Garden',
    description: 'Soil and water monitoring for west side garden',
    updatedAt: '8d ago',
    createdBy: 'Bob',
  },
  {
    id: '0sdf09ds',
    name: 'East Garden',
    description: 'Soil and water monitoring for east side garden',
    updatedAt: '2s ago',
    createdBy: 'Fred',
  },
]

export const DashboardsList = () => (
  <div className="story--example">
    <ResourceList>
      <ResourceListHeader
        filterComponent={
          <Input
            icon={IconFont.Search_New}
            placeholder="Filter dashboards..."
            style={{width: '200px'}}
            value={''}
          />
        }
      >
        <ResourceListSorter
          name="Name"
          sortKey="name"
          onClick={(nextSort, sortKey) =>
            alert(`Sorter clicked! nextSort: ${nextSort}, sortKey: ${sortKey}`)
          }
          sort={Sort.Ascending}
        />
        <ResourceListSorter
          name="Description"
          sortKey="desc"
          onClick={(nextSort, sortKey) =>
            alert(`Sorter clicked! nextSort: ${nextSort}, sortKey: ${sortKey}`)
          }
          sort={Sort.None}
        />
        <ResourceListSorter
          name="Last Updated"
          sortKey="updated"
          onClick={(nextSort, sortKey) =>
            alert(`Sorter clicked! nextSort: ${nextSort}, sortKey: ${sortKey}`)
          }
          sort={Sort.None}
        />
      </ResourceListHeader>
      <ResourceListBody
        emptyState={
          <EmptyState>
            <EmptyStateText>{'No dashboards exist'}</EmptyStateText>
          </EmptyState>
        }
      >
        {exampleDashboards
          .filter(d => d.name.toLocaleLowerCase().includes(''))
          .map(dash => (
            <ResourceCard key={dash.id}>
              <ResourceCardName name={dash.name} />
              <ResourceCardEditableDescription
                description={dash.description}
                onUpdate={desc => alert(`onUpdate description fired: ${desc}`)}
              />
              <>Last updated {dash.updatedAt}</>,
              <>
                Created by <b>{dash.createdBy}</b>
              </>
            </ResourceCard>
          ))}
      </ResourceListBody>
    </ResourceList>
  </div>
)

DashboardsList.story = {
  parameters: {
    readme: {
      content: marked.parse(ResourceListExampleReadme),
    },
  },
}
