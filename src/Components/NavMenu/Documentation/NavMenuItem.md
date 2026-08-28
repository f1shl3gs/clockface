# NavMenuItem

The first tier of navigation items. It can optionally contain `NavMenuSubItem`

### Usage
```tsx
import {NavMenu} from '@influxdata/clockface'
```
```tsx
<NavMenuItem />
```

### React Router

Becuase we wanted to avoid having React Router as a dependency `NavMenuItem` and `NavMenuSubItem` make use of render props to allow `<Link />` elements to be passed in.
The `titleLink` and `iconLink` props should be passed the same element to ensure consistency:

```tsx
// Using anchor tags
<NavMenuItem
  iconLink={className => <a href="http://www.myurl.com" className={className}><Icon /></a>}
  titleLink={className => <a href="http://www.myurl.com" className={className}>Item Title</a>}
/>
```
```tsx
// Using a router link
<NavMenuItem
  iconLink={className => <a to="/pages/home" className={className}><Icon /></a>}
  titleLink={className => <a to="/pages/home" className={className}>Item Title</a>}
/>
```

### Creating Sub-Items

Simply pass in `<NavMenuSubItem />` as children of `<NavMenuItem />` and they will appear below the title link

### Styling

`<NavMenuItem />` receives its styles by being a child of `<NavMenu />`

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
