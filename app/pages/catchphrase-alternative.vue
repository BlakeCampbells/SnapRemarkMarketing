<script setup lang="ts">
const appStoreUrl = "https://apps.apple.com/us/app/snapremark/id6738997529"
const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl.replace(/\/$/, "")
const canonicalUrl = siteUrl ? `${siteUrl}/catchphrase-alternative` : undefined

useSeoMeta({
  title: "Best CatchPhrase Alternative for iPhone",
  description:
    "Searching for a CatchPhrase alternative? SnapRemark is a fast-paced iPhone party word game with team rounds, hand-off mode, and category variety for repeat game nights.",
  ogTitle: "Best CatchPhrase Alternative for iPhone",
  ogDescription:
    "SnapRemark brings Catch Phrase style clue-game energy to iPhone with flexible modes, category packs, and quick setup for parties and family nights.",
  ogImage: "/app-icon.png",
  ogType: "article",
  ogUrl: canonicalUrl,
  twitterTitle: "Best CatchPhrase Alternative for iPhone",
  twitterDescription:
    "SnapRemark is a lively party word game for people looking for a CatchPhrase alternative on iPhone.",
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
        headline: "Best CatchPhrase Alternative for iPhone",
        description:
          "SnapRemark is a fast-paced iPhone party word game designed for players searching for a CatchPhrase alternative.",
        mainEntityOfPage: canonicalUrl,
        image: siteUrl ? `${siteUrl}/app-icon.png` : "/app-icon.png"
      })
    }
  ]
})

const reasons = [
  {
    title: "Fast clue-game energy",
    body: "SnapRemark keeps the same fast pace people expect from a Catch Phrase style game: quick turns, loud rooms, and constant pressure."
  },
  {
    title: "Flexible group play",
    body: "You can switch between structured team rounds and a hand-off mode that raises the tension when the timer is running out."
  },
  {
    title: "Better repeatability",
    body: "Category variety helps keep sessions fresh, whether you are hosting family night, a party, or a classroom icebreaker."
  }
]

const comparisonRows = [
  {
    label: "Best for",
    snapremark: "Players who want a mobile-first party word game with multiple play styles",
    catchphrase: "Players who want classic fast clue-game gameplay"
  },
  {
    label: "Modes",
    snapremark: "Team Round and Hand Off",
    catchphrase: "Classic pass-and-guess style play"
  },
  {
    label: "Variety",
    snapremark: "Category-driven replay value for repeat sessions",
    catchphrase: "Recognizable clue-game format"
  },
  {
    label: "Setup",
    snapremark: "Quick phone-based setup for parties and travel",
    catchphrase: "Quick to explain once your group is ready to play"
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
        <a href="#comparison-table">Comparison</a>
        <a href="#download">Download</a>
      </nav>
    </header>

    <main>
      <section class="hero hero-secondary">
        <div class="hero-copy">
          <p class="eyebrow">CatchPhrase alternative</p>
          <h1>SnapRemark is a strong CatchPhrase alternative for iPhone game nights.</h1>
          <p class="hero-text">
            If you are searching for a CatchPhrase or Catch Phrase alternative, SnapRemark gives you the same quick
            clue-game thrill with modern phone-first design, category variety, and two ways to play.
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
          <p class="eyebrow">Why players switch</p>
          <h2>Why SnapRemark works well for fans of Catch Phrase style games.</h2>
        </div>

        <div class="comparison-grid">
          <article v-for="reason in reasons" :key="reason.title" class="comparison-card">
            <h3>{{ reason.title }}</h3>
            <p>{{ reason.body }}</p>
          </article>
        </div>
      </section>

      <section id="comparison-table" class="table-section">
        <div class="section-heading">
          <p class="eyebrow">Quick comparison</p>
          <h2>SnapRemark vs. CatchPhrase search intent, at a glance.</h2>
          <p class="section-intro">
            This comparison is meant to help players decide what kind of party word game experience they want, not to
            overstate differences.
          </p>
        </div>

        <div class="comparison-table" role="table" aria-label="SnapRemark and CatchPhrase comparison">
          <div class="comparison-table-row comparison-table-head" role="row">
            <span role="columnheader">Category</span>
            <span role="columnheader">SnapRemark</span>
            <span role="columnheader">CatchPhrase</span>
          </div>

          <div
            v-for="row in comparisonRows"
            :key="row.label"
            class="comparison-table-row"
            role="row"
          >
            <span role="cell" class="comparison-table-label">{{ row.label }}</span>
            <span role="cell">{{ row.snapremark }}</span>
            <span role="cell">{{ row.catchphrase }}</span>
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
            games, and alternatives to CatchPhrase.
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

      <section class="cta-panel" id="download">
        <div>
          <p class="eyebrow">Ready to play?</p>
          <h2>Try SnapRemark for your next game night.</h2>
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
