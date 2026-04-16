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

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

function getSiteUrl(event: Parameters<typeof defineEventHandler>[0], configuredSiteUrl: string) {
  const trimmedSiteUrl = configuredSiteUrl.replace(/\/$/, "")

  if (trimmedSiteUrl) {
    return trimmedSiteUrl
  }

  const forwardedProto = getHeader(event, "x-forwarded-proto")
  const forwardedHost = getHeader(event, "x-forwarded-host")
  const host = forwardedHost || getHeader(event, "host")

  if (!host) {
    return ""
  }

  const protocol = forwardedProto || (import.meta.dev ? "http" : "https")

  return `${protocol}://${host}`.replace(/\/$/, "")
}

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const siteUrl = getSiteUrl(event, config.public.siteUrl)

  setHeader(event, "content-type", "application/xml; charset=utf-8")

  if (!siteUrl) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`
  }

  const urls = routeEntries
    .map(
      ({ path, changefreq, priority }) => `  <url>
    <loc>${escapeXml(`${siteUrl}${path}`)}</loc>
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
