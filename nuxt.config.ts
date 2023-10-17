// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  components: [
    {
      path: "~/components/ui",
      extensions: ["vue"],
      prefix: "Ui",
    },
  ],
  devtools: { enabled: true },
});
