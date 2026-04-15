<script setup lang="ts">
const appStoreUrl = "https://apps.apple.com/us/app/snapremark/id6738997529"

useSeoMeta({
  title: "SnapRemark",
  description:
    "The quick-thinking clue game for parties, family nights, classrooms, and overly competitive friend groups.",
  ogTitle: "SnapRemark",
  ogDescription:
    "Bring fast-paced clue giving to any room with team rounds, hand-off mode, and category packs that keep the energy high.",
  ogImage: "/app-icon.png",
  twitterCard: "summary_large_image"
})

const stats = [
  { value: "2 modes", label: "Team Round and Hand Off for totally different kinds of chaos." },
  { value: "Fresh categories", label: "Mix broad prompts with themed clue packs to fit the room." },
  { value: "Offline-friendly", label: "Built-in play keeps game night moving even without service." }
]

const features = [
  {
    title: "Fast to learn",
    body: "Explain the word without saying it, tap when your team gets it, and keep the pace flying."
  },
  {
    title: "Actually social",
    body: "Designed for a room full of people, not heads-down solo play. It works at parties, holidays, and family nights."
  },
  {
    title: "Built for replay",
    body: "Switch categories, change teams, and choose the game mode that fits your crowd."
  }
]

const modes = [
  {
    name: "Team Round",
    description:
      "Take turns, rack up points, and manage the clock. Great when you want a classic team showdown."
  },
  {
    name: "Hand Off",
    description:
      "Pass the phone when a clue is guessed. When the timer runs out, the team holding it takes the hit."
  }
]

const highlights = [
  "Quick setup for game nights and parties",
  "Free to play with no ads interrupting the room",
  "Bright, playful interface that feels good in a group",
  "Category-based clue packs for different rooms and moods",
  "A mobile-first experience that keeps the action moving"
]
</script>

<template>
  <div class="page-shell">
    <header class="site-header">
      <a class="brand" href="#top" aria-label="SnapRemark home">
        <img src="/logo.png" alt="SnapRemark logo" class="brand-logo" />
      </a>

      <nav class="site-nav" aria-label="Primary">
        <a href="#how-it-works">How it works</a>
        <a href="#modes">Modes</a>
        <a href="#download">Download</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">The quick-thinking clue game</p>
          <h1>Bring instant game-night energy to the room.</h1>
          <p class="hero-text">
            SnapRemark is a free, ad-free clue game built for fast, funny rounds with bright visuals,
            quick pacing, and enough chaos to keep everyone locked in.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" :href="appStoreUrl" target="_blank" rel="noreferrer">
              Get it on the App Store
            </a>
            <a class="button button-secondary" href="#how-it-works">See how it plays</a>
          </div>
        </div>

        <div class="hero-art" aria-hidden="true">
          <div class="hero-card hero-card-main">
            <img src="/app-icon.png" alt="" class="app-icon" />
            <div class="phone-screen">
              <img src="/hero-mark.png" alt="" class="hero-mark" />
            </div>
          </div>
          <div class="hero-badge hero-badge-top">Party-ready</div>
          <div class="hero-badge hero-badge-bottom">Team chaos approved</div>
        </div>
      </section>

      <section class="stats" aria-label="Highlights">
        <article v-for="stat in stats" :key="stat.value" class="stat-card">
          <strong>{{ stat.value }}</strong>
          <p>{{ stat.label }}</p>
        </article>
      </section>

      <section id="how-it-works" class="content-grid">
        <div class="section-copy">
          <p class="eyebrow">How it works</p>
          <h2>Easy to start, hard to stay calm.</h2>
          <p>
            Pick a mode, choose your categories, hand someone the phone, and watch the room turn competitive in about
            ten seconds. The interface stays simple so the energy stays on the people playing.
          </p>

          <ul class="check-list">
            <li v-for="item in highlights" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div class="feature-stack">
          <article v-for="feature in features" :key="feature.title" class="feature-card">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.body }}</p>
          </article>
        </div>
      </section>

      <section id="modes" class="modes-section">
        <div class="section-heading">
          <p class="eyebrow">Choose your vibe</p>
          <h2>Two ways to play, one very loud room.</h2>
        </div>

        <div class="mode-grid">
          <article v-for="mode in modes" :key="mode.name" class="mode-card">
            <p class="mode-label">{{ mode.name }}</p>
            <p>{{ mode.description }}</p>
          </article>
        </div>
      </section>

      <section class="cta-panel" id="download">
        <div>
          <p class="eyebrow">Ready for your next round?</p>
          <h2>Download SnapRemark and start the next round in minutes.</h2>
        </div>

        <div class="cta-actions">
          <a class="button button-primary" :href="appStoreUrl" target="_blank" rel="noreferrer">
            Open App Store
          </a>
          <a class="button button-secondary" href="#top">Back to top</a>
        </div>
      </section>
    </main>
  </div>
</template>
