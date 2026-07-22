type SnapRemarkSeoOptions = {
  title: string
  description: string
  path: `/${string}` | "/"
  socialDescription?: string
  socialTitle?: string
}

export function useSnapRemarkSeo(options: SnapRemarkSeoOptions) {
  const runtimeConfig = useRuntimeConfig()
  const siteUrl = runtimeConfig.public.siteUrl.replace(/\/$/, "")
  const canonicalUrl = `${siteUrl}${options.path === "/" ? "/" : options.path}`
  const socialImageUrl = `${siteUrl}/og.png`
  const socialTitle = options.socialTitle || options.title
  const socialDescription = options.socialDescription || options.description

  useSeoMeta({
    title: options.title,
    description: options.description,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    ogTitle: socialTitle,
    ogDescription: socialDescription,
    ogImage: socialImageUrl,
    ogImageAlt: "SnapRemark — the quick-thinking clue game",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageType: "image/png",
    ogType: "website",
    ogUrl: canonicalUrl,
    ogSiteName: "SnapRemark",
    ogLocale: "en_US",
    twitterTitle: socialTitle,
    twitterDescription: socialDescription,
    twitterImage: socialImageUrl,
    twitterImageAlt: "SnapRemark — the quick-thinking clue game",
    twitterCard: "summary_large_image"
  })

  const structuredData =
    options.path === "/"
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${canonicalUrl}#website`,
              name: "SnapRemark",
              url: canonicalUrl,
              description: options.description,
              inLanguage: "en-US",
              publisher: {
                "@id": `${canonicalUrl}#organization`
              }
            },
            {
              "@type": "Organization",
              "@id": `${canonicalUrl}#organization`,
              name: "SnapRemark",
              url: canonicalUrl,
              logo: {
                "@type": "ImageObject",
                url: `${siteUrl}/app-icon.png`,
                width: 1024,
                height: 1024
              },
              sameAs: ["https://apps.apple.com/us/app/snapremark/id6738997529"]
            }
          ]
        }
      : {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${siteUrl}/`
            },
            {
              "@type": "ListItem",
              position: 2,
              name: options.title,
              item: canonicalUrl
            }
          ]
        }

  useHead({
    link: [{ rel: "canonical", href: canonicalUrl }],
    script: [
      {
        id: "page-structured-data",
        type: "application/ld+json",
        innerHTML: JSON.stringify(structuredData)
      }
    ]
  })

  return {
    canonicalUrl,
    siteUrl,
    socialImageUrl
  }
}
