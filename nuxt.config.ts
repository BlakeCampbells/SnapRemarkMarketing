export default defineNuxtConfig({
  compatibilityDate: "2026-04-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://snapremark.com",
      siteName: "SnapRemark"
    }
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      routes: [
        "/",
        "/about",
        "/how-to-play",
        "/party-word-game",
        "/word-guessing-game-iphone",
        "/family-party-game",
        "/team-building-word-game",
        "/robots.txt",
        "/sitemap.xml"
      ]
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en"
      },
      title: "SnapRemark",
      titleTemplate: "%s | SnapRemark",
      meta: [
        {
          name: "theme-color",
          content: "#3f6fe9"
        },
        {
          name: "apple-itunes-app",
          content: "app-id=6738997529, app-argument=https://snapremark.com/"
        }
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/app-icon.png" },
        { rel: "apple-touch-icon", href: "/app-icon.png" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: ""
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Space+Grotesk:wght@400;500;700&display=swap"
        }
      ]
    }
  }
})
