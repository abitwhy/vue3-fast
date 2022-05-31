---
title: Learn intersection
---

# What

> provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

> 提供一种异步观察目标元素与祖先元素或顶层文档视口相交处的更改的方法。

# Why

更好的交互。

## 讨论

[How can I tell if a DOM element is visible in the current viewport?（如何判断 DOM 元素在当前视口中是否可见？）](https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport)

## 案例

### 导航栏动态变化

顶部导航栏展示的内容在网站信息和内容信息之间动态切换。初始状态下展示网站信息，用户阅读内容时，展示内容信息。

参见[知乎首页](https://www.zhihu.com/)、[简书文章页](https://www.jianshu.com/p/40a0f30be62f)。

### 章节即时交互

丰富的互动性所带来的体验升级。

参见 [Disneyanimation FILMMAKING PROCESS](https://disneyanimation.com/process/)

# How

## 文档

- [Intersection Observer](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)

## 示例

<Example />

<script setup lang="ts">
  import Example from './-/Example.vue';
</script>
