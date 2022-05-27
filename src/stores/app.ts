import { defineStore } from 'pinia'
import { ref } from 'vue'

/** 模式
 * 不同模式适应人们的不同需求
 * 例如：人们希望应用更精简？更详细？或者更适合老年人等
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
   * @note 为什么使用带 `_` 前缀的变量名
   * 因为在公开函数 SET_MODEL 中，参数名会和本实例名冲突
   * 为了公开函数的易用性，参考相关的命名规则，对其添加了 `_` 前缀
   */
  // type Model = typeof MODELS[number]
  type Model = UnionOf<typeof MODELS>
  const _model = ref<Model>('normal')

  const SET_MODEL = (model: Model) => {
    _model.value = model
  }

  return { model: _model, SET_MODEL, MODELS }
})

// todo：设计一个使用命令设计模式的状态
// 命令设计模式主要作用是撤回功能
