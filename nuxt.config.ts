// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/image"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: [
    "@/assets/styles/main.css",
    "@/assets/styles/colors.css",
    // "~/assets/photos/logo.png",
  ],
  vite: {
    assetsInclude: ["**/*.png"],
  },
  domains: ["https://vercel.com"],
});
