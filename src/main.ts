import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import stores from './stores'
import 'css-doodle'
import { createHead } from '@vueuse/head'

createApp(App).use(router).use(stores).use(createHead()).mount('#app')
