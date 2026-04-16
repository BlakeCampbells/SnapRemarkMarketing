export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const trimmedSiteUrl = config.public.siteUrl.replace(/\/$/, "")
  const forwardedProto = getHeader(event, "x-forwarded-proto")
  const forwardedHost = getHeader(event, "x-forwarded-host")
  const host = forwardedHost || getHeader(event, "host")
  const siteUrl = trimmedSiteUrl || (host ? `${forwardedProto || (import.meta.dev ? "http" : "https")}://${host}` : "")
  const hostLine = siteUrl ? `Host: ${siteUrl}\n` : ""
  const sitemapLine = siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml\n` : ""

  setHeader(event, "content-type", "text/plain; charset=utf-8")

  return `User-agent: *
Allow: /

${hostLine}${sitemapLine}`.trimEnd()
})
