const routeEntries = [
  {
    path: "/",
    changefreq: "weekly",
    priority: "1.0"
  },
  {
    path: "/catchphrase-alternative",
    changefreq: "weekly",
    priority: "0.9"
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
