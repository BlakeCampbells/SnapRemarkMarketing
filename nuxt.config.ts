export default defineNuxtConfig({
  compatibilityDate: "2026-04-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
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
        }
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/app-icon.png" },
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
