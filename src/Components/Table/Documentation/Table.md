# Table

Table is a simple extension of an HTML5 table. Composing a table should feel exactly the same, except there are some cool additional features such as easy control of padding, highlighting rows in different colors, and hover interactions. 

### Usage
```tsx
import {Table} from '@influxdata/clockface'
```
All `Table` family components can be accessed from the same class import:
```tsx
<Table>
  <Table.Header>
    <TableRow>
      <Table.HeaderCell />
      <Table.HeaderCell />
    </TableRow>
  </Table.Header>
  <TableBody>
    <TableRow>
      <TableCell />
      <TableCell />
    </TableRow>
  </TableBody>
  <TableFooter />
</Table>
```

### Example
<!-- STORY -->

### Coloring Rows

In some cases, such as highlighting an erroneous row of data, you may want to mark a row as having a certain state. You can pass in the `ComponentColor` data type into the `color` prop of each row:

```tsx
<TableRow color={ComponentColor.Danger}>
  <TableCell />
  <TableCell />
  <TableCell />
</TableRow>
```

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
