# PaginationItem

The individual pages of the Pagination component. Clicking on it will navigate you directly to the clicked page.

### Usage

```tsx
import {Pagination} from '@influxdata/clockface'
```

```tsx
//If both direction and page provided, it defaults to direction
//Item with direction
<Pagination.Item
  direction={Direction.Left}
  size={'Medium'}
  isActive={false}
></Pagination.Item>
```

```tsx
//Item with page
<Pagination.Item
  page={'10'}
  size={'Medium'}
  isActive={false}
></Pagination.Item>
```

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
