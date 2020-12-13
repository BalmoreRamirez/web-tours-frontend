const path = require("path");
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~assets/scss/tailwind.scss", "~assets/scss/custom.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/vee-validate.js", "~/plugins/axios.js", { src: '~/plugins/quill.client.js', ssr: false },],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "nuxt-webfontloader",
    "@nuxtjs/axios",
    ["cookie-universal-nuxt", { alias: "cookies" }],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: "http://localhost:8000/api",
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: ["vee-validate/dist/rules"],
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, "./tailwind.config.js")
      }
    },
    extend(config, ctx) { }
  },
  webfontloader: {
    google: {
      families: ["Nunito:200,300,400,600,700,800"]
    }
  },
};
