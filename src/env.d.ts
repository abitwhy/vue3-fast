/** vite 定义全局常量替换方式
 * 见：https://cn.vitejs.dev/config/#define
 * 替代方式（推荐）：在 `tsconfig.json` 配置 `compilerOptions.types`
 * 见：https://www.tslang.cn/docs/handbook/tsconfig-json.html#:~:text=%40types%EF%BC%8CtypeRoots%E5%92%8Ctypes
 */
/* /// <reference types="vite/client" /> */

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
