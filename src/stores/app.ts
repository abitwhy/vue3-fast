import { defineStore } from 'pinia'
import { ref } from 'vue'

/** 模式
 * 不同模式适应人们的不同需求
 * 例如：人们希望应用更精简？更详细？或者更适合老年人等
 *
 * @note 为什么使用 use- 前缀？
 * 为了避免命名冲突：
 * 不能使用首字母大写 Model（这个写法留给了类型）
 * 不能使用全大写 MODEL（不具有全局常量的含义，且这个写法留给了实例）
 * 不能使用全小写 model（这个写法留给了赋值函数的参数，以及用户）
 */
export const useModel = defineStore('app', () => {
  /** 可用模式
   *
   * @note 同时供外部和内部类型声明公用
   * 使用数组以供外部使用，使用常量断言供内部类型声明使用
   * 常量断言可将常量断言为常量字面量
   * 方式一
   * const MODELS = <const>['simple', 'normal', 'rich']
   * 方式二（推荐）
   * 理由是这种写法更通用，以及更易与泛型类型声明相区别（以便于将来移除临时断言）
   */
  const MODELS = ['simple', 'normal', 'rich'] as const
  /** 实例
   *
   * @note 为什么名称用全局常量的写法（全大写）
   * 实例是一个 ref，变化的是 value 属性，变化仅发生在某个组件内
   * 但作为全局状态，它在各页面间是统一的，可理解为逻辑常量
   * 这同时也规避了命名冲突，便于使用
   */
  // type Model = typeof MODELS[number]
  type Model = UnionOf<typeof MODELS>
  const MODEL = ref<Model>('normal')

  const SET_MODEL = (model: Model) => {
    MODEL.value = model
  }

  return { MODEL, SET_MODEL, MODELS }
})

// todo：设计一个使用命令设计模式的状态
// 命令设计模式主要作用是撤回功能
