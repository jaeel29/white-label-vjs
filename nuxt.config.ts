// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: [
    "@/assets/styles/main.css",
    "~/assets/styles/colors.css",
    // "~/assets/styles/fonts.css",
  ],
});
