<script setup lang="ts">
const appStoreUrl = "https://apps.apple.com/us/app/snapremark/id6738997529"
const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl.replace(/\/$/, "")
const canonicalUrl = siteUrl ? `${siteUrl}/how-to-play` : undefined

useSeoMeta({
  title: "How to Play SnapRemark",
  description:
    "Learn how to play SnapRemark, including Team Round, Hand Off, pacing tips, and how to get a fun game going quickly on iPhone.",
  ogTitle: "How to Play SnapRemark",
  ogDescription:
    "A straightforward guide to starting a round, choosing a mode, keeping the pace up, and making SnapRemark fun for your group.",
  ogImage: "/app-icon.png",
  ogType: "article",
  ogUrl: canonicalUrl,
  twitterTitle: "How to Play SnapRemark",
  twitterDescription:
    "Simple instructions for getting SnapRemark running fast for parties, family nights, and team sessions.",
  twitterImage: "/app-icon.png",
  twitterCard: "summary_large_image"
})

useHead({
  link: canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : [],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How to play SnapRemark",
        description:
          "A quick guide to setting up SnapRemark, choosing a mode, and running a fun clue-based round on iPhone.",
        step: [
          { "@type": "HowToStep", name: "Choose a mode", text: "Start with Team Round or Hand Off depending on the energy you want." },
          { "@type": "HowToStep", name: "Pick categories", text: "Choose category prompts that fit the group and how broad or themed you want the round to feel." },
          { "@type": "HowToStep", name: "Start clue giving", text: "Describe the word without saying it directly and keep guesses moving quickly." },
          { "@type": "HowToStep", name: "Keep the room involved", text: "Rotate turns, reset quickly, and use the faster mode when the group wants more chaos." }
        ]
      })
    }
  ]
})

const steps = [
  {
    title: "Choose your mode",
    body: "Use Team Round if you want a more traditional score-based flow. Use Hand Off if you want the phone moving constantly and the pressure rising as the timer runs down."
  },
  {
    title: "Pick categories that fit the room",
    body: "Broad categories are great for mixed groups. More themed prompts work well when the room shares interests and wants the rounds to feel more specific."
  },
  {
    title: "Give clues fast",
    body: "The game works best when players keep descriptions short, keep guesses moving, and avoid turning each word into a long debate."
  },
  {
    title: "Reset quickly between rounds",
    body: "SnapRemark feels best when teams rotate fast and the room stays engaged instead of pausing too long between turns."
  }
]

const tips = [
  "Split large groups into teams before the first round so the game starts cleanly.",
  "Choose a mode that matches the room: structured for calmer groups, hand-off for louder ones.",
  "Keep clue-giving energetic and avoid over-explaining.",
  "Use varied categories when you expect people to play more than one round."
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
        <a href="#steps">Steps</a>
        <a href="#download">Download</a>
      </nav>
    </header>

    <main>
      <section class="hero hero-secondary">
        <div class="hero-copy">
          <p class="breadcrumb"><NuxtLink to="/">Home</NuxtLink> / How to play</p>
          <p class="eyebrow">How to play</p>
          <h1>How to play SnapRemark without slowing the room down.</h1>
          <p class="hero-text">
            SnapRemark is simple on purpose. Pick a mode, choose categories, start clue-giving, and keep the pace high
            enough that the fun comes from the room instead of the rules.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" :href="appStoreUrl" target="_blank" rel="noreferrer">
              Download SnapRemark
            </a>
            <NuxtLink class="button button-secondary" to="/party-word-game">See party game page</NuxtLink>
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

      <section id="steps" class="comparison-section">
        <div class="section-heading">
          <p class="eyebrow">Game flow</p>
          <h2>Four simple steps get the round moving.</h2>
        </div>

        <div class="comparison-grid">
          <article v-for="step in steps" :key="step.title" class="comparison-card">
            <h3>{{ step.title }}</h3>
            <p>{{ step.body }}</p>
          </article>
        </div>
      </section>

      <section class="content-grid">
        <div class="section-copy">
          <p class="eyebrow">Host tips</p>
          <h2>Small choices make the game feel much better.</h2>
          <p>
            The best rounds usually come from keeping things moving. The less time people spend negotiating the setup,
            the more the game feels spontaneous and social.
          </p>
        </div>

        <ul class="mini-list">
          <li v-for="tip in tips" :key="tip">{{ tip }}</li>
        </ul>
      </section>

      <section class="resource-section" aria-labelledby="next-heading">
        <div class="section-heading">
          <p class="eyebrow">Next steps</p>
          <h2 id="next-heading">Keep exploring the right fit for your group.</h2>
        </div>

        <div class="resource-grid">
          <article class="resource-card">
            <div>
              <h3>Party word game guide</h3>
              <p>See why SnapRemark fits parties, family nights, and other social group settings.</p>
            </div>
            <NuxtLink to="/party-word-game">Open guide</NuxtLink>
          </article>
          <article class="resource-card">
            <div>
              <h3>Word guessing game for iPhone</h3>
              <p>Explore the mobile-first side of the game if you are searching by device and format.</p>
            </div>
            <NuxtLink to="/word-guessing-game-iphone">Open guide</NuxtLink>
          </article>
          <article class="resource-card">
            <div>
              <h3>About SnapRemark</h3>
              <p>Read more about what the game is designed to do well and why the rules stay intentionally light.</p>
            </div>
            <NuxtLink to="/about">Read about</NuxtLink>
          </article>
        </div>
      </section>

      <section class="cta-panel" id="download">
        <div>
          <p class="eyebrow">Ready to start?</p>
          <h2>Download SnapRemark and get your first round going fast.</h2>
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
