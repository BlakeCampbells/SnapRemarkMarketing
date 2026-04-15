export default defineNuxtConfig({
  compatibilityDate: "2026-04-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "",
      siteName: "SnapRemark"
    }
  },
  nitro: {
    prerender: {
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
          name: "description",
          content:
            "SnapRemark is the quick-thinking clue game for parties, teams, and chaotic game nights."
        },
        {
          name: "theme-color",
          content: "#3f6fe9"
        },
        {
          property: "og:title",
          content: "SnapRemark"
        },
        {
          property: "og:description",
          content:
            "The quick-thinking clue game built for team rounds, hand-off chaos, and instant game-night energy."
        },
        {
          property: "og:image",
          content: "/app-icon.png"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
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
