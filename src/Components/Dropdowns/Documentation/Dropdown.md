# Dropdown

Dropdown is the parent component of the Dropdown Family; every member of the component family can be accessed from this single import. The dropdown family offers a set of components that can be composed to form a variety of specialized (or not) dropdowns. This parent component manages the opening and closing of the menu from a button.

### Usage
```tsx
import {Dropdown} from '@influxdata/clockface'
```
Dropdown uses render props to connect the button and menu interactions together:
```tsx
<Dropdown
  menu={onCollapse => <DropdownMenu onCollapse={onCollapse} />}
  button={(active, onClick) => <DropdownButton active={active} onClick={onClick} />}
/>
```
onCollapse is optional, if passed in the menu will collapse when an item is clicked.
If you want the menu to stay open until a specific action is fired, pass onCollapse into the triggering child element within `<DropdownMenu>`

### Customization

If you want a custom menu or button, simply pass in your own component instead of `<DropdownMenu>` or `<DropdownButton>`.

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
