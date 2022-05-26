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

<script setup lang="ts">
import VueComponent from './-/VueComponent.vue'
import MarkDown from './-/MarkDown.md'

const v = 'variable from vue'
</script>
