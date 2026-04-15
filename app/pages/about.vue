<script setup lang="ts">
const appStoreUrl = "https://apps.apple.com/us/app/snapremark/id6738997529"
const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl.replace(/\/$/, "")
const canonicalUrl = siteUrl ? `${siteUrl}/about` : undefined

useSeoMeta({
  title: "About SnapRemark",
  description:
    "Learn what SnapRemark is built for: fast clue-based rounds, flexible group play, and quick setup for parties, family nights, and team sessions.",
  ogTitle: "About SnapRemark",
  ogDescription:
    "An overview of the game philosophy behind SnapRemark and the kinds of social play it is designed to support.",
  ogImage: "/app-icon.png",
  ogType: "article",
  ogUrl: canonicalUrl,
  twitterTitle: "About SnapRemark",
  twitterDescription:
    "Read what SnapRemark is designed to do well and why the game is built around fast, social rounds.",
  twitterImage: "/app-icon.png",
  twitterCard: "summary_large_image"
})

useHead({
  link: canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : []
})

const principles = [
  {
    title: "Fast to start",
    body: "The best party games do not make a room sit through a long explanation. SnapRemark is designed to get to the fun quickly."
  },
  {
    title: "Social first",
    body: "The game is meant to keep attention on the players in the room, not on managing a complicated interface."
  },
  {
    title: "Replayable",
    body: "Different modes and category variety help the same group come back for multiple rounds without burning out immediately."
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
        <a href="#principles">Principles</a>
        <a href="#download">Download</a>
      </nav>
    </header>

    <main>
      <section class="hero hero-secondary">
        <div class="hero-copy">
          <p class="breadcrumb"><NuxtLink to="/">Home</NuxtLink> / About</p>
          <p class="eyebrow">About SnapRemark</p>
          <h1>SnapRemark is built for fast, social rounds that feel good in a real room.</h1>
          <p class="hero-text">
            The basic idea is simple: keep clue-giving quick, make the phone easy to pass, and let the people in the
            room create the energy. That is why the game stays lightweight and mode-driven instead of overcomplicated.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" :href="appStoreUrl" target="_blank" rel="noreferrer">
              Download SnapRemark
            </a>
            <NuxtLink class="button button-secondary" to="/how-to-play">Learn how to play</NuxtLink>
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

      <section id="principles" class="comparison-section">
        <div class="section-heading">
          <p class="eyebrow">What matters most</p>
          <h2>Three design priorities shape the experience.</h2>
        </div>

        <div class="comparison-grid">
          <article v-for="principle in principles" :key="principle.title" class="comparison-card">
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.body }}</p>
          </article>
        </div>
      </section>

      <section class="content-grid">
        <div class="section-copy">
          <p class="eyebrow">Where it shines</p>
          <h2>Built for parties, family nights, classrooms, and team sessions.</h2>
          <p>
            SnapRemark works best in settings where people want to get moving quickly, talk over each other a little,
            laugh at half-finished clues, and jump into another round without much friction.
          </p>
        </div>

        <ul class="mini-list">
          <li>Use Team Round when you want a more classic score-based structure.</li>
          <li>Use Hand Off when you want the phone moving and the room getting louder.</li>
          <li>Switch categories between rounds to keep repeat sessions fresh.</li>
          <li>Start with broad prompts if the group is mixed and you want everyone comfortable quickly.</li>
        </ul>
      </section>

      <section class="resource-section">
        <div class="section-heading">
          <p class="eyebrow">Helpful pages</p>
          <h2>Explore the parts of the game that matter most to your group.</h2>
        </div>

        <div class="resource-grid">
          <article class="resource-card">
            <div>
              <h3>How to play</h3>
              <p>Read the practical guide to getting a round started quickly.</p>
            </div>
            <NuxtLink to="/how-to-play">Open guide</NuxtLink>
          </article>
          <article class="resource-card">
            <div>
              <h3>Party word game</h3>
              <p>See the main game-night landing page for general social play.</p>
            </div>
            <NuxtLink to="/party-word-game">Open page</NuxtLink>
          </article>
          <article class="resource-card">
            <div>
              <h3>Family party game</h3>
              <p>Explore the family-night use case for trips, holidays, and casual group time.</p>
            </div>
            <NuxtLink to="/family-party-game">Open page</NuxtLink>
          </article>
        </div>
      </section>

      <section class="cta-panel" id="download">
        <div>
          <p class="eyebrow">Ready to try it?</p>
          <h2>Download SnapRemark and bring a little more energy to the next round.</h2>
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
