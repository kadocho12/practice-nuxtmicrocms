// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  srcDir: "src/",
  css: [
    '@/assets/css/globals.css'
  ],
  modules: [
    '@nuxt/image'
  ],
  runtimeConfig: {
    public: {
      apiKey: process.env.MICROCMS_API_KEY,
      apiDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    }
  },
  image: {
    domains: ['images.microcms-assets.io']
  }
})
