import { useHead } from '@vueuse/head'

//#region Prism

/** 在线 CDN 主题
 *
 * @link https://unpkg.com/browse/prismjs@1.28.0/themes/
 *
 * @note CDN 可能会有变化，需要手动更新
 */
export const prismThemes = [
  'coy',
  'dark',
  'funky',
  'okaidia',
  'solarizedlight',
  'tomorrow',
  'twilight',
] as const
// type UnionOf<T extends readonly any[]> = T[number]

/** 配置函数
 *
 * @note 函数名没有以 `use` 开头，这与 VueUse 项目不一致
 * `use` 前缀很累赘，引入任何变量都是要“使用”它，不必再加到变量名之上
 */
export const prism = (theme: UnionOf<typeof prismThemes>) =>
  useHead({
    link: [
      {
        href: `https://unpkg.com/prismjs@1.28.0/themes/${
          theme ? `prism-${theme}` : `prism`
        }.min.css`,
        rel: 'stylesheet',
      },
    ],
  })

//#endregion
