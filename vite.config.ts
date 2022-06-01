import { defineConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-md'
import MarkdownItPrism from 'markdown-it-prism'
import MarkdownItLinkAttributes from 'markdown-it-link-attributes'
import MarkdownItAnchor from 'markdown-it-anchor'
// import Uslug from 'uslug'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components/index.d.ts',
    }),
    Pages({
      extensions: ['vue', 'md'],
      exclude: ['**/-/**'],
    }),
    Markdown({
      markdownItUses: [MarkdownItPrism],
      markdownItSetup(md) {
        md.use(MarkdownItLinkAttributes, [
          {
            matcher: (href: string) => /^https?:\/\//.test(href),
            attrs: {
              target: '_blank',
              rel: 'noopener',
            },
          },
        ])
        md.use(MarkdownItAnchor, {
          permalink: MarkdownItAnchor.permalink.headerLink(),
        })
      },
    }),
  ],
})
