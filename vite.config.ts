import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        // presets
        'vue',
      ],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './temp/.eslintrc-global.json',
      },
    }),
    Components({
      dts: 'src/components/index.d.ts',
    }),
    Pages({
      extensions: ['vue'],
      exclude: ['**/-/**'],
    }),
  ],
})
