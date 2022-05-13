/** vite 默认环境全局类型声明文件
 *
 * @note 引入方式
 * - （推荐）在 `tsconfig.json` 配置 `compilerOptions.types`
 * @doc https://www.typescriptlang.org/tsconfig#types
 * - 在本文件中使用三斜线指令引入
 * @doc https://ts.xcatliu.com/basics/declaration-files.html#%E4%B8%89%E6%96%9C%E7%BA%BF%E6%8C%87%E4%BB%A4
 * @doc https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html
 */
/* /// <reference types="vite/client" /> */

/** 定义所有文件类型为 vue（即 vue 单文件组件）的类型
 * 由 vite cli 模板预设生成
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
