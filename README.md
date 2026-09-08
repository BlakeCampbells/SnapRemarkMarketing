# SnapRemark Marketing Site

Nuxt marketing site for SnapRemark, created as a sibling project to the iOS app.

## Run locally

```bash
 nvm use
npm install
npm run dev
```

## Notes

- Use Node.js `22.20.0` or newer in the 22.x line, `24.11.0` or newer in the 24.x line, or Node.js 26+. The version files select `22.20.0`.
- Nuxt is pinned to `4.5.2`. Use `npm ci` for reproducible installs from the lockfile; installation runs `nuxt prepare` automatically.
- The site reuses the existing SnapRemark logo and app icon from the iOS project.
- The App Store CTA points to the live SnapRemark listing in `app/pages/index.vue`.
- `NUXT_PUBLIC_SITE_URL` is set to `https://snapremark.com` for local and production builds so canonical tags, `robots.txt`, and `sitemap.xml` use the live domain.
