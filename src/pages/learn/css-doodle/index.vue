<script setup lang="ts">
const backgrounds = <const>['net', 'leaves', 'circle', 'window']
type Background = typeof backgrounds[number]
const background = ref<Background>('net')
</script>

<template>
  <css-doodle :key="background" :class="background" use="var(--rule)">
  </css-doodle>
  <select v-model="background" name="model">
    <option v-for="(item, index) in backgrounds" :key="index" :value="item">
      {{ item }}
    </option>
  </select>
</template>

<style lang="scss">
// prettier-ignore
css-doodle {
  --size: 40vmin;
  min-width: var(--size);
  min-height: var(--size);
  &.window {
    --rule: (
      @grid: 1 / var(--size);
      border: 1vmin solid #000;
      transform: rotate(180deg);
      background: @svg(
        viewBox: 0 0 17 17;
        fill: none;
        stroke: #000;
        stroke-linecap: square;
        stroke-width: .25;
        path {
        d: M 1 16
            @p(@p(@p(h1 v-1 h-1 v-2 h1 v1 h1 v-1 h1 v2 h-1 v1 h2)
                  @flip.@invert.@lp v1
                  @reverse.@invert.@fliph.@lp
                  @reverse.@fliph.@lp)
              v-1 @invert.@flip.@lp)
            h1 @reverse.@flipv.@lp
        }
      );
    );
  }
  &.net {
    // author: https://css-doodle.com
    --rule: (
      @grid: 32 / var(--size);

      @size: 1px calc(141.4% + 1px);
      transform: rotate(@p(±45deg));
      background: #6664ff;
    )
  }
  &.leaves {
    // author: https://css-doodle.com
    --rule: (
      :doodle {
        @grid: 8 / var(--size);
        @shape: circle;
      }

      transition: .2s @r(.6s);
      border-radius: @pick(100% 0, 0 100%);

      will-change: transform;
      transform: scale(@r(.25, 1.25));

      background: hsla(
        calc(240 - 6 * @x * @y),
        70%, 68%, @r.8
      );
    )
  }
  &.circle {
    // author: https://yuanchuan.dev/time-uniform-for-css-animation#:~:text=%40grid%3A%201%20/%20140px%3B%0Aclip%2Dpath%3A%20%40shape(%0A%20%20split%3A%20120%3B%0A%20%20frame%3A%2015%3B%0A%20%20r%3A%20cos(t/10)%5Esin(t)%5Esin(2t)*.9%3B%0A)%3B%0Atransform%3A%20rotate(calc(%40t%20*%20.0001turn))%3B%0Abackground%3A%20linear%2Dgradient(%0A%20%20%40m3(hsl(calc(%40t/%40r(15%2C%2020))%2C%2060%25%2C%2060%25))%0A)%3B
    --rule: (
      // @grid: 1 / 50% inherit; /* 百分比模式适合单个图形，缩放屏幕不会导致背景消失，但对于中心对图案，由于 CSS 无法无条件设置宽高一致，可能导致图案变形 */
      @grid: 1 / var(--size);

      clip-path: @shape(
        split: 120;
        frame: 15;
        r: cos(t/10)^sin(t)^sin(2t)*.9;
      );
      transform: rotate(calc(@t * .0001turn));
      background: linear-gradient(
        @m3(hsl(calc(@t/@r(15, 20)), 60%, 60%))
      );
    )
  }
}
</style>
