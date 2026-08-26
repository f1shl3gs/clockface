// Libraries
import {marked} from 'marked'

// Components
import {RBAC} from '../../../'

// Notes
import RBACReadme from './RBAC.md?raw'
import RBACTestReadme from './RBACTest.md?raw'

export default {title: 'Utilities/RBAC'}

export const Rbac = () => {
  type Permission = 'read:all' | 'write:all'

  return (
    <div className="story--example">
      <RBAC<Permission>
        permissions={['read:all']}
        perform={'read:all' as Permission}
        yes={() => <h2>you have permission</h2>}
        no={() => <h2>you do not have permission</h2>}
      />
    </div>
  )
}

Rbac.story = {
  name: 'RBAC',

  parameters: {
    readme: {
      content: marked.parse(RBACReadme),
    },
  },
}

const test = (a: number, b: number) => a + b === 4

export const RbacWithCustomTest = () => {
  const a = 2
  const b = 2

  return (
    <div className="story--example">
      <RBAC
        test={() => test(a, b)}
        yes={() => <h2>{`${a} and ${b} add to 4!`}</h2>}
        no={() => (
          <h2>{`${a} and ${b} don't add to 4...do you you even math?`}</h2>
        )}
      />
    </div>
  )
}

RbacWithCustomTest.story = {
  name: 'RBAC with custom test',

  parameters: {
    readme: {
      content: marked.parse(RBACTestReadme),
    },
  },
}
