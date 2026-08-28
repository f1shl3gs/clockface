# ListItem

`ListItem` is part of the `List` component family and can be accessed from the single import.

### Usage

```tsx
import {List} from '@influxdata/clockface'
```

```tsx
<ListItem
  selected={true}
  onClick={handleClick}
  value="Banana"
  color={ComponentColor.Primary}
  size={ComponentSize.Small}
  wrapText={false}
  title="A nice wholesome fruit"
  disabled={false}
>
  Banana
</ListItem>
```

### Example

<!-- STORY -->

### Handling `onClick` behavior

Whatever you pass in to the `value` prop is passed back as an argument of the `onClick` prop. Since click interactions tend to utilize an identifier this pattern will save you the need for an extra handler function.

### Want icons, dots, or checkboxes?

Also includes in the `List` family are a hanful of components to embellish `ListItem` with. Children of `ListItem` are laid out horizontally, so if you want something on the right side of your `ListItem` place that node last. See more examples in the **Examples** section

Example with a checkbox:

```tsx
<ListItem>
  // Type accepts "checkbox" or "dot"
  <ListIndicator type="checkbox">
  Item text
</ListItem>
```

Example with an icon:

```tsx
<ListItem>
  <ListIcon glyph={IconFont.CheckMark_New}>
  Item text
</ListItem>
```

### Gotchas

Any child nodes of type `string` are automatically wrapped in an element intended to manage text wrapping and layout alongside indiciators

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
