<script setup lang="ts">
const appStoreUrl = "https://apps.apple.com/us/app/snapremark/id6738997529"
const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl.replace(/\/$/, "")
const canonicalUrl = siteUrl ? `${siteUrl}/team-building-word-game` : undefined

useSeoMeta({
  title: "Team-Building Word Game",
  description:
    "SnapRemark is a team-building word game with fast clue-based rounds that work for work groups, classroom teams, and icebreaker sessions.",
  ogTitle: "Team-Building Word Game",
  ogDescription:
    "A quick group word game for teams that want a low-friction icebreaker with plenty of energy.",
  ogImage: "/app-icon.png",
  ogType: "article",
  ogUrl: canonicalUrl,
  twitterTitle: "Team-Building Word Game",
  twitterDescription:
    "SnapRemark works well for group sessions that need a fast, social word game without a long rules lecture.",
  twitterImage: "/app-icon.png",
  twitterCard: "summary_large_image"
})

useHead({
  link: canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : []
})

const reasons = [
  {
    title: "Easy icebreaker energy",
    body: "Short rounds help groups talk quickly, settle into the room, and stop overthinking the format."
  },
  {
    title: "Clear team structure",
    body: "Team Round gives facilitators a straightforward way to organize players without turning the game into a complicated activity."
  },
  {
    title: "Good for short time blocks",
    body: "SnapRemark can fit into a warm-up window before a class, meeting, retreat, or workshop activity."
  }
]
</script>

<template>
  <div class="page-shell">
    <header class="site-header">
      <NuxtLink class="brand" to="/" aria-label="SnapRemark home">
        <img src="/logo.png" alt="SnapRemark logo" class="brand-logo" />
      </NuxtLink>

      <nav class="site-nav" aria-label="Primary">
        <NuxtLink to="/">Home</NuxtLink>
        <a href="#reasons">Benefits</a>
        <a href="#download">Download</a>
      </nav>
    </header>

    <main>
      <section class="hero hero-secondary">
        <div class="hero-copy">
          <p class="breadcrumb"><NuxtLink to="/">Home</NuxtLink> / Team-building word game</p>
          <p class="eyebrow">Team-building word game</p>
          <h1>SnapRemark is a team-building word game that works best when the room needs energy fast.</h1>
          <p class="hero-text">
            For classroom groups, team events, and icebreaker sessions, the main advantage is speed. The rules stay
            light, the clue-giving starts quickly, and the room gets involved almost immediately.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" :href="appStoreUrl" target="_blank" rel="noreferrer">
              Download SnapRemark
            </a>
            <NuxtLink class="button button-secondary" to="/how-to-play">See game flow</NuxtLink>
          </div>
        </div>

        <div class="hero-art" aria-hidden="true">
          <div class="hero-card hero-card-main">
            <img src="/app-icon.png" alt="" class="app-icon" />
            <div class="phone-screen">
              <img src="/hero-mark.png" alt="" class="hero-mark" />
            </div>
          </div>
        </div>
      </section>

      <section id="reasons" class="comparison-section">
        <div class="section-heading">
          <p class="eyebrow">Why it helps</p>
          <h2>Why the format works for groups that do not want a complicated icebreaker.</h2>
        </div>

        <div class="comparison-grid">
          <article v-for="reason in reasons" :key="reason.title" class="comparison-card">
            <h3>{{ reason.title }}</h3>
            <p>{{ reason.body }}</p>
          </article>
        </div>
      </section>

      <section class="resource-section">
        <div class="section-heading">
          <p class="eyebrow">Related guides</p>
          <h2>Explore other ways SnapRemark fits real-world group settings.</h2>
        </div>

        <div class="resource-grid">
          <article class="resource-card">
            <div>
              <h3>Party word game</h3>
              <p>See the broader social game-night view for casual groups and friend gatherings.</p>
            </div>
            <NuxtLink to="/party-word-game">Open page</NuxtLink>
          </article>
          <article class="resource-card">
            <div>
              <h3>Family party game</h3>
              <p>Explore the same format through the lens of family nights and holidays.</p>
            </div>
            <NuxtLink to="/family-party-game">Open page</NuxtLink>
          </article>
          <article class="resource-card">
            <div>
              <h3>About SnapRemark</h3>
              <p>Read the product story and the design goals behind the app.</p>
            </div>
            <NuxtLink to="/about">Read about</NuxtLink>
          </article>
        </div>
      </section>

      <section class="cta-panel" id="download">
        <div>
          <p class="eyebrow">Ready to use it?</p>
          <h2>Try SnapRemark when you want an icebreaker that starts fast and keeps people talking.</h2>
        </div>

        <div class="cta-actions">
          <a class="button button-primary" :href="appStoreUrl" target="_blank" rel="noreferrer">
            Open App Store
          </a>
          <NuxtLink class="button button-secondary" to="/">Back to home</NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>
