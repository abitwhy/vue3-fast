---
title: Learn vite-plugin-md
meta:
  v: variable from frontmatter
---

## Use a Vue Component

<VueComponent />

## Import other MakrDown File as Component

<MarkDown />

## Using Variable

- {{v}}
- {{frontmatter.meta.v}}

_Note that, the frontmatter root variable will be injected into the setup script, therefore avoiding declaring any duplicate variable name._

## Using Code Highlighting

```js
// JS syntax highlighting
void 0
```

```ts
// TS syntax highlighting
interface I {}
type T = {
  foo?: string
  readonly bar: number[]
}
```

```css
// CSS syntax highlighting
.class {
  width: 20px !important;
}
```

```scss
// SCSS syntax highlighting
/* block comment */
.outer {
  $w: 'width';
  &::after {
    content: '';
  }
  .innner {
    @mixin name() {
      #{$w}: 20px;
    }
  }
}
```

<script setup lang="ts">
import VueComponent from './-/VueComponent.vue'
import MarkDown from './-/MarkDown.md'
import { prism } from '~/composable/theme'

const v = 'variable from vue'
// 使用 Prism CSS 样式主题
prism('okaidia')
</script>
