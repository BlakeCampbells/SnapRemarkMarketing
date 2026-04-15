<script setup lang="ts">
const appStoreUrl = "https://apps.apple.com/us/app/snapremark/id6738997529"
const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl.replace(/\/$/, "")
const canonicalUrl = siteUrl ? `${siteUrl}/party-word-game` : undefined

useSeoMeta({
  title: "Party Word Game for iPhone",
  description:
    "SnapRemark is a fast-paced party word game for iPhone with team rounds, hand-off mode, and category variety for repeat game nights.",
  ogTitle: "Party Word Game for iPhone",
  ogDescription:
    "SnapRemark brings fast clue-game energy to iPhone with flexible modes, category packs, and quick setup for parties and family nights.",
  ogImage: "/app-icon.png",
  ogType: "article",
  ogUrl: canonicalUrl,
  twitterTitle: "Party Word Game for iPhone",
  twitterDescription:
    "SnapRemark is a lively iPhone party word game built for quick rounds, team play, and repeat game nights.",
  twitterImage: "/app-icon.png",
  twitterCard: "summary_large_image"
})

useHead({
  link: canonicalUrl
    ? [
        {
          rel: "canonical",
          href: canonicalUrl
        }
      ]
    : [],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Party Word Game for iPhone",
        description:
          "SnapRemark is a fast-paced iPhone party word game designed for players who want quick clue-based rounds and flexible group play.",
        mainEntityOfPage: canonicalUrl,
        image: siteUrl ? `${siteUrl}/app-icon.png` : "/app-icon.png"
      })
    }
  ]
})

const reasons = [
  {
    title: "Fast clue-game energy",
    body: "SnapRemark is built around quick turns, loud rooms, and just enough pressure to keep every round moving."
  },
  {
    title: "Flexible group play",
    body: "Switch between structured team rounds and a hand-off mode that spikes the tension when the timer is nearly gone."
  },
  {
    title: "Better repeatability",
    body: "Category variety helps keep parties, family nights, and classroom icebreakers from feeling repetitive."
  }
]

const fitRows = [
  {
    label: "Best for",
    snapremark: "Groups who want a mobile-first party word game with flexible play styles",
    detail: "Works well for parties, holidays, classrooms, and competitive friend groups"
  },
  {
    label: "Modes",
    snapremark: "Team Round and Hand Off",
    detail: "Choose a more classic team setup or a faster pass-the-phone format"
  },
  {
    label: "Replay value",
    snapremark: "Category-driven variety for repeat sessions",
    detail: "Useful when the same group wants to play again without the game feeling stale"
  },
  {
    label: "Setup",
    snapremark: "Quick phone-based setup for travel and game night",
    detail: "Easy to start when you want a group game without a long rules explanation"
  }
]

const relatedPages = [
  {
    title: "How to play SnapRemark",
    body: "Learn the flow of a round, how the two modes differ, and how to get a game started quickly.",
    to: "/how-to-play"
  },
  {
    title: "Word guessing game for iPhone",
    body: "A page focused on mobile-first players who are specifically looking for an iPhone word game.",
    to: "/word-guessing-game-iphone"
  },
  {
    title: "Family party game ideas",
    body: "A fit guide for family nights, holidays, and mixed-age groups that want a quick game.",
    to: "/family-party-game"
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
        <a href="#fit-table">Why it works</a>
        <a href="#download">Download</a>
      </nav>
    </header>

    <main>
      <section class="hero hero-secondary">
        <div class="hero-copy">
          <p class="breadcrumb"><NuxtLink to="/">Home</NuxtLink> / Party word game</p>
          <p class="eyebrow">Party word game</p>
          <h1>SnapRemark is a lively party word game for iPhone game nights.</h1>
          <p class="hero-text">
            If you are searching for a party word game, clue game, or quick iPhone game-night app, SnapRemark gives
            you fast rounds, modern phone-first design, category variety, and two ways to play.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" :href="appStoreUrl" target="_blank" rel="noreferrer">
              Download SnapRemark
            </a>
            <NuxtLink class="button button-secondary" to="/">Visit homepage</NuxtLink>
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

      <section class="comparison-section">
        <div class="section-heading">
          <p class="eyebrow">Why players stay</p>
          <h2>Why SnapRemark works well as a clue game for groups.</h2>
        </div>

        <div class="comparison-grid">
          <article v-for="reason in reasons" :key="reason.title" class="comparison-card">
            <h3>{{ reason.title }}</h3>
            <p>{{ reason.body }}</p>
          </article>
        </div>
      </section>

      <section id="fit-table" class="table-section">
        <div class="section-heading">
          <p class="eyebrow">Quick fit check</p>
          <h2>What kind of party word game experience does SnapRemark fit?</h2>
          <p class="section-intro">
            This page is aimed at players looking for a quick group word game they can start fast and replay often.
          </p>
        </div>

        <div class="comparison-table" role="table" aria-label="SnapRemark game fit">
          <div class="comparison-table-row comparison-table-head" role="row">
            <span role="columnheader">Category</span>
            <span role="columnheader">SnapRemark</span>
            <span role="columnheader">Why it matters</span>
          </div>

          <div
            v-for="row in fitRows"
            :key="row.label"
            class="comparison-table-row"
            role="row"
          >
            <span role="cell" class="comparison-table-label">{{ row.label }}</span>
            <span role="cell">{{ row.snapremark }}</span>
            <span role="cell">{{ row.detail }}</span>
          </div>
        </div>
      </section>

      <section class="content-grid">
        <div class="section-copy">
          <p class="eyebrow">Best use cases</p>
          <h2>Great for parties, family nights, classrooms, and competitive friend groups.</h2>
          <p>
            SnapRemark is especially strong when your group wants a game that starts fast, keeps people talking, and
            feels lively on a phone. That makes it a natural fit for people searching for iPhone word games, party word
            games, clue games, and quick game-night apps.
          </p>
        </div>

        <div class="feature-stack">
          <article class="feature-card">
            <h3>Party hosts</h3>
            <p>Use SnapRemark when you want a room-filling game that takes almost no explanation.</p>
          </article>
          <article class="feature-card">
            <h3>Families</h3>
            <p>Play quick rounds during holidays, trips, or after dinner without hauling extra gear around.</p>
          </article>
          <article class="feature-card">
            <h3>Teams and classrooms</h3>
            <p>Use category-based clue rounds as a fun warm-up or icebreaker that keeps everyone engaged.</p>
          </article>
        </div>
      </section>

      <section class="resource-section" aria-labelledby="related-heading">
        <div class="section-heading">
          <p class="eyebrow">Related guides</p>
          <h2 id="related-heading">More ways to figure out if SnapRemark fits your group.</h2>
        </div>

        <div class="resource-grid">
          <article v-for="page in relatedPages" :key="page.to" class="resource-card">
            <div>
              <h3>{{ page.title }}</h3>
              <p>{{ page.body }}</p>
            </div>
            <NuxtLink :to="page.to">Open guide</NuxtLink>
          </article>
        </div>
      </section>

      <section class="cta-panel" id="download">
        <div>
          <p class="eyebrow">Ready to play?</p>
          <h2>Try SnapRemark for your next game night.</h2>
        </div>

        <div class="cta-actions">
          <a class="button button-primary" :href="appStoreUrl" target="_blank" rel="noreferrer">
            Open App Store
          </a>
          <NuxtLink class="button button-secondary" to="/how-to-play">Learn how to play</NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>
