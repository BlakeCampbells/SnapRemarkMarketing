const routeEntries = [
  {
    path: "/",
    changefreq: "weekly",
    priority: "1.0"
  },
  {
    path: "/about",
    changefreq: "monthly",
    priority: "0.6"
  },
  {
    path: "/how-to-play",
    changefreq: "weekly",
    priority: "0.8"
  },
  {
    path: "/party-word-game",
    changefreq: "weekly",
    priority: "0.9"
  },
  {
    path: "/word-guessing-game-iphone",
    changefreq: "weekly",
    priority: "0.8"
  },
  {
    path: "/family-party-game",
    changefreq: "weekly",
    priority: "0.8"
  },
  {
    path: "/team-building-word-game",
    changefreq: "weekly",
    priority: "0.8"
  }
]

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const siteUrl = config.public.siteUrl.replace(/\/$/, "")

  setHeader(event, "content-type", "application/xml; charset=utf-8")

  if (!siteUrl) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`
  }

  const urls = routeEntries
    .map(
      ({ path, changefreq, priority }) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
})
