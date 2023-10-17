// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@vueuse/nuxt"],
  components: [
    {
      path: "~/components/ui",
      extensions: ["vue"],
      prefix: "Ui",
    },
  ],
  tailwindcss: {
    config: {
      content(content) {
        return [...content, "./assets/css/tailwind.css"];
      },
    },
  },
  devtools: { enabled: true },
});
