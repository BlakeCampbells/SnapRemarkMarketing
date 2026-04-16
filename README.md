# SnapRemark Marketing Site

Nuxt marketing site for SnapRemark, created as a sibling project to the iOS app.

## Run locally

```bash
 nvm use
npm install
npm run dev
```

## Notes

- Node.js `22.20.0` or newer is required.
- The site reuses the existing SnapRemark logo and app icon from the iOS project.
- The App Store CTA points to the live SnapRemark listing in `app/pages/index.vue`.
- `NUXT_PUBLIC_SITE_URL` is set to `https://snapremark.com` for local and production builds so canonical tags, `robots.txt`, and `sitemap.xml` use the live domain.
