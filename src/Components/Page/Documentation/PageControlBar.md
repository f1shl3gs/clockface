# PageControlBar

Used alongside `<PageContents />` to layout page, this component is for containing the header of the page.

### Usage

```tsx
import {Page} from '@influxdata/clockface'
```

```tsx
<PageControlBar>
  // Should always have left & right children, center is optional
  <PageControlBarLeft />
  <PageControlBarCenter />
  <PageControlBarRight />
</PageControlBar>
```

If you are planning to use `<PageControlBarCenter />` keep in mind it requires a fixed pixel width to be specified. The pixel width is used to ensure the center is actually centered.

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
