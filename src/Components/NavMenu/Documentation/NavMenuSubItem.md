# NavMenuSubItem

The second tier of navigation items

### Usage
```tsx
import {NavMenu} from '@influxdata/clockface'
```
```tsx
<NavMenuSubItem />
```

### React Router

Becuase we wanted to avoid having React Router as a dependency `NavMenuItem` and `NavMenuSubItem` make use of render props to allow `<Link />` elements to be passed in.
The `titleLink` and `iconLink` props should be passed the same element to ensure consistency:

```tsx
// Using anchor tags
<NavMenuItem titleLink={className => <a href="http://www.myurl.com" className={className}>Item Title</a>} />
```
```tsx
// Using a router link
<NavMenuItem titleLink={className => <a to="/pages/home" className={className}>Item Title</a>} />
```

### Styling

`<NavMenuSubItem />` receives its styles by being a child of `<NavMenuItem />`

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
