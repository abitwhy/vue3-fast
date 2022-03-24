import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        // presets
        'vue',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      dts: 'src/auto-imports.d.ts',
    }),
    Pages({
      extensions: ['vue'],
      exclude: ['**/components/*.vue'],
    }),
  ],
})
