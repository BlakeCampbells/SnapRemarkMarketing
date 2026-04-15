<script setup lang="ts">
const appStoreUrl = "https://apps.apple.com/us/app/snapremark/id6738997529"
const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl.replace(/\/$/, "")
const canonicalUrl = siteUrl ? `${siteUrl}/family-party-game` : undefined

useSeoMeta({
  title: "Family Party Game for iPhone",
  description:
    "SnapRemark is a family party game for iPhone with quick setup, clue-based rounds, and flexible modes for holidays, trips, and game nights.",
  ogTitle: "Family Party Game for iPhone",
  ogDescription:
    "A clue-based game for families who want something quick to start, easy to explain, and fun to replay.",
  ogImage: "/app-icon.png",
  ogType: "article",
  ogUrl: canonicalUrl,
  twitterTitle: "Family Party Game for iPhone",
  twitterDescription:
    "SnapRemark works well for family nights because it starts quickly and keeps the room engaged.",
  twitterImage: "/app-icon.png",
  twitterCard: "summary_large_image"
})

useHead({
  link: canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : []
})

const scenarios = [
  {
    title: "Holiday gatherings",
    body: "A quick clue game works well when people want something social without committing to a long setup."
  },
  {
    title: "Travel and vacations",
    body: "Phone-first play makes it easy to start a round in a hotel, on a trip, or whenever a family wants a lightweight game."
  },
  {
    title: "After-dinner game nights",
    body: "SnapRemark fits short windows well, so it can work as the main activity or a fast add-on round."
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
        <a href="#scenarios">Use cases</a>
        <a href="#download">Download</a>
      </nav>
    </header>

    <main>
      <section class="hero hero-secondary">
        <div class="hero-copy">
          <p class="breadcrumb"><NuxtLink to="/">Home</NuxtLink> / Family party game</p>
          <p class="eyebrow">Family party game</p>
          <h1>SnapRemark works well as a family party game when you want something quick and social.</h1>
          <p class="hero-text">
            Family groups often need a game that starts fast, is easy to explain, and still feels lively across
            multiple rounds. SnapRemark is built around exactly that kind of rhythm.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" :href="appStoreUrl" target="_blank" rel="noreferrer">
              Download SnapRemark
            </a>
            <NuxtLink class="button button-secondary" to="/how-to-play">Read how to play</NuxtLink>
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

      <section id="scenarios" class="comparison-section">
        <div class="section-heading">
          <p class="eyebrow">Where it fits</p>
          <h2>Good moments for a quick family word game.</h2>
        </div>

        <div class="comparison-grid">
          <article v-for="scenario in scenarios" :key="scenario.title" class="comparison-card">
            <h3>{{ scenario.title }}</h3>
            <p>{{ scenario.body }}</p>
          </article>
        </div>
      </section>

      <section class="resource-section">
        <div class="section-heading">
          <p class="eyebrow">Related guides</p>
          <h2>See other ways the game fits different kinds of groups.</h2>
        </div>

        <div class="resource-grid">
          <article class="resource-card">
            <div>
              <h3>Party word game</h3>
              <p>Broader game-night guidance for friend groups and bigger rooms.</p>
            </div>
            <NuxtLink to="/party-word-game">Open page</NuxtLink>
          </article>
          <article class="resource-card">
            <div>
              <h3>Team-building word game</h3>
              <p>A more structured page for work events, classroom groups, and icebreaker sessions.</p>
            </div>
            <NuxtLink to="/team-building-word-game">Open page</NuxtLink>
          </article>
          <article class="resource-card">
            <div>
              <h3>About SnapRemark</h3>
              <p>Read what the game is trying to optimize for and why the design stays lightweight.</p>
            </div>
            <NuxtLink to="/about">Read about</NuxtLink>
          </article>
        </div>
      </section>

      <section class="cta-panel" id="download">
        <div>
          <p class="eyebrow">Ready for family night?</p>
          <h2>Try SnapRemark when you want a game that gets moving without much setup.</h2>
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
