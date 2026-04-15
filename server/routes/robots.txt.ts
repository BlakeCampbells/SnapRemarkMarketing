export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const siteUrl = config.public.siteUrl.replace(/\/$/, "")
  const hostLine = siteUrl ? `Host: ${siteUrl}\n` : ""
  const sitemapLine = siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml\n` : ""

  setHeader(event, "content-type", "text/plain; charset=utf-8")

  return `User-agent: *
Allow: /

${hostLine}${sitemapLine}`.trimEnd()
})
