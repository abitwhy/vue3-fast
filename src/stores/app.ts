import { defineStore } from 'pinia'

/** 模式
 * 不同模式适应人们的不同需求
 * 例如：人们希望应用更精简？更详细？或者更适合老年人等
 */
export const useModel = defineStore('app', () => {
  // 可选模式
  // 使用数组以供外部使用，通过使用常量断言实现
  // 常量断言可将常量断言为常量字面量
  // 方式一：
  // const models = ['simple', 'normal', 'rich'] as const
  // 方式二：
  const models = <const>['simple', 'normal', 'rich']
  // 类型声明
  type Model = typeof models[number]
  // 实例
  const MODEL = ref<Model>('normal')

  const SET_MODEL = (model: Model) => {
    MODEL.value = model
  }

  return { MODEL, SET_MODEL, models }
})

// todo：设计一个使用命令设计模式的状态
// 命令设计模式主要作用是撤回功能
