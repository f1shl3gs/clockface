# Pagination

Pagination Nav is used for navigating through data that cannot be encapsulated within a single page.

### Usage

```tsx
import {Pagination} from '@influxdata/clockface'
```

```tsx
<Pagination
  ref={paginationRef}
  totalPages={10}
  currentPage={1}
  pageRangeOffset={1}
  onChange={page => {
    someFunction(page)
  }}
  hideDirectionIcon={false}
  enablePageInput={false}
  size={'Medium'}
  enableArrowPaginate={false}
/>
```

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
