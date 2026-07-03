export default defineEventHandler((event) => {
  const url = getRequestURL(event)

  if (url.pathname.length <= 1 || !url.pathname.endsWith("/")) {
    return
  }

  url.pathname = url.pathname.replace(/\/+$/, "")

  return sendRedirect(event, `${url.pathname}${url.search}`, 301)
})
