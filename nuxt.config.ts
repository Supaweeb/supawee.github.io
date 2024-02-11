import { defineNuxtConfig } from 'nuxt/config'
import { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  //...
  app: {
    baseURL: '/'
  },
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  plugins: [
    { src: '~/plugins/vuetify', mode: 'client' } // Register Vuetify plugin
  ],
  vite: {
    build: {
      rollupOptions: {
        external: ['~/plugins/vuetify.js'] // Specify the Vuetify plugin file as external
      }
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
