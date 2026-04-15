<script setup lang="ts">
const appStoreUrl = "https://apps.apple.com/us/app/snapremark/id6738997529"
const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl.replace(/\/$/, "")
const canonicalUrl = siteUrl ? `${siteUrl}/word-guessing-game-iphone` : undefined

useSeoMeta({
  title: "Word Guessing Game for iPhone",
  description:
    "SnapRemark is a fast-paced word guessing game for iPhone with team rounds, hand-off mode, and category variety for social game nights.",
  ogTitle: "Word Guessing Game for iPhone",
  ogDescription:
    "A mobile-first word guessing game built for quick clue-based rounds, lively groups, and repeat play.",
  ogImage: "/app-icon.png",
  ogType: "article",
  ogUrl: canonicalUrl,
  twitterTitle: "Word Guessing Game for iPhone",
  twitterDescription:
    "SnapRemark is an iPhone word guessing game designed for quick setup and loud, social rounds.",
  twitterImage: "/app-icon.png",
  twitterCard: "summary_large_image"
})

useHead({
  link: canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : []
})

const reasons = [
  {
    title: "Made for the phone first",
    body: "SnapRemark is designed around quick taps, easy handoffs, and rounds that feel natural on a phone instead of cramped."
  },
  {
    title: "Fast rounds for real rooms",
    body: "The pace works well when people are standing around, sitting on a couch, or trying to get a game started without a long explanation."
  },
  {
    title: "Flexible enough to replay",
    body: "Category variety and multiple modes help the game feel less repetitive across several sessions."
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
        <a href="#reasons">Why it fits</a>
        <a href="#download">Download</a>
      </nav>
    </header>

    <main>
      <section class="hero hero-secondary">
        <div class="hero-copy">
          <p class="breadcrumb"><NuxtLink to="/">Home</NuxtLink> / Word guessing game for iPhone</p>
          <p class="eyebrow">Word guessing game</p>
          <h1>SnapRemark is a word guessing game for iPhone that stays social.</h1>
          <p class="hero-text">
            If you know you want an iPhone word guessing game, SnapRemark keeps the setup simple and the rounds quick so
            the game feels like a group activity instead of a solo screen experience.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" :href="appStoreUrl" target="_blank" rel="noreferrer">
              Download SnapRemark
            </a>
            <NuxtLink class="button button-secondary" to="/how-to-play">See how it plays</NuxtLink>
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
          <p class="eyebrow">Why it fits</p>
          <h2>Why mobile-first players end up liking SnapRemark.</h2>
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
          <p class="eyebrow">Related pages</p>
          <h2>See how the same game fits different group settings.</h2>
        </div>

        <div class="resource-grid">
          <article class="resource-card">
            <div>
              <h3>Party word game</h3>
              <p>Explore the broader social game-night angle.</p>
            </div>
            <NuxtLink to="/party-word-game">Open page</NuxtLink>
          </article>
          <article class="resource-card">
            <div>
              <h3>Family party game</h3>
              <p>See why the format works well for holidays, trips, and mixed-age rooms.</p>
            </div>
            <NuxtLink to="/family-party-game">Open page</NuxtLink>
          </article>
          <article class="resource-card">
            <div>
              <h3>Team-building word game</h3>
              <p>Learn how the same quick-round format can work for work groups and classroom teams.</p>
            </div>
            <NuxtLink to="/team-building-word-game">Open page</NuxtLink>
          </article>
        </div>
      </section>

      <section class="cta-panel" id="download">
        <div>
          <p class="eyebrow">Ready to try it?</p>
          <h2>Download SnapRemark for a fast iPhone word game that works in a room full of people.</h2>
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
