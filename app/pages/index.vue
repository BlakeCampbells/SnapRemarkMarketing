<script setup lang="ts">
const appStoreUrl = "https://apps.apple.com/us/app/snapremark/id6738997529"
const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl.replace(/\/$/, "")
const canonicalUrl = siteUrl ? `${siteUrl}/` : undefined

useSeoMeta({
  title: "SnapRemark Party Word Game",
  description:
    "SnapRemark is a fast-paced party word game for iPhone with team rounds, hand-off chaos, and category packs that make it a strong CatchPhrase alternative.",
  ogTitle: "SnapRemark Party Word Game",
  ogDescription:
    "A lively clue game for parties, family nights, classrooms, and competitive friend groups. Play fast rounds, swap modes, and keep the room loud.",
  ogImage: "/app-icon.png",
  ogType: "website",
  ogUrl: canonicalUrl,
  twitterTitle: "SnapRemark Party Word Game",
  twitterDescription:
    "Fast rounds, bright visuals, team play, and hand-off chaos for your next game night.",
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
        "@type": "SoftwareApplication",
        name: "SnapRemark",
        applicationCategory: "GameApplication",
        operatingSystem: "iOS",
        description:
          "SnapRemark is a fast-paced party word game for team rounds, hand-off mode, and category-based clue play.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD"
        },
        url: canonicalUrl,
        downloadUrl: appStoreUrl,
        image: siteUrl ? `${siteUrl}/app-icon.png` : "/app-icon.png"
      })
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What kind of game is SnapRemark?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SnapRemark is a clue-giving party word game for iPhone. Players describe words quickly, score points in team rounds, and can switch to a hand-off mode for a more chaotic pace."
            }
          },
          {
            "@type": "Question",
            name: "Is SnapRemark a good CatchPhrase alternative?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SnapRemark works well for people searching for a CatchPhrase or Catch Phrase alternative because it keeps the same fast clue-game energy while adding category packs, bright mobile-first design, and multiple ways to play."
            }
          },
          {
            "@type": "Question",
            name: "Can you play SnapRemark at parties or family nights?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. SnapRemark is designed for parties, family gatherings, classrooms, team events, and any group that wants a quick game-night activity without a long setup."
            }
          }
        ]
      })
    }
  ]
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

const comparisonPoints = [
  {
    title: "More than one style of round",
    body: "SnapRemark gives groups a choice between classic team play and pass-the-phone chaos, so the game can match the room."
  },
  {
    title: "Built for modern phones",
    body: "The interface is made for fast taps, quick resets, and lively in-person play instead of feeling like a digital afterthought."
  },
  {
    title: "Category variety for repeat sessions",
    body: "Switching categories helps keep repeat game nights from feeling too familiar."
  }
]

const faqs = [
  {
    question: "What makes SnapRemark different from other party word games?",
    answer:
      "SnapRemark focuses on quick setup, high-energy clue giving, and multiple styles of play so the game feels flexible for parties, family nights, and classrooms."
  },
  {
    question: "Why might someone search for SnapRemark instead of CatchPhrase?",
    answer:
      "People often want the same fast clue-game format with a mobile-first feel, different modes, and more variety for repeated rounds. SnapRemark is built to meet that search intent."
  },
  {
    question: "Is SnapRemark good for large groups?",
    answer:
      "Yes. It works best with lively groups that want a simple phone-driven game they can start quickly and keep moving without complicated rules."
  }
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
        <a href="#comparison">CatchPhrase alternative</a>
        <a href="#download">Download</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">The quick-thinking clue game</p>
          <h1>Bring instant game-night energy to the room.</h1>
          <p class="hero-text">
            SnapRemark is a free, ad-free party word game for iPhone built for fast, funny rounds with bright visuals,
            quick pacing, and enough chaos to keep everyone locked in.
          </p>
          <p class="hero-note">
            If you are looking for a CatchPhrase alternative that feels great on mobile, SnapRemark gives you fast team
            play, hand-off pressure, and category variety in one app.
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

      <section id="comparison" class="comparison-section">
        <div class="section-heading">
          <p class="eyebrow">CatchPhrase alternative</p>
          <h2>Looking for a CatchPhrase-style game that feels great on iPhone?</h2>
          <p class="section-intro">
            SnapRemark is built for the same fast clue-giving energy people love in Catch Phrase style party games,
            while adding flexible modes and category variety for repeat game nights.
          </p>
        </div>

        <div class="comparison-grid">
          <article v-for="point in comparisonPoints" :key="point.title" class="comparison-card">
            <h3>{{ point.title }}</h3>
            <p>{{ point.body }}</p>
          </article>
        </div>

        <div class="comparison-cta">
          <p>
            Want the fuller breakdown? Visit the dedicated
            <NuxtLink to="/catchphrase-alternative">CatchPhrase alternative page</NuxtLink>.
          </p>
        </div>
      </section>

      <section class="faq-section" aria-labelledby="faq-heading">
        <div class="section-heading">
          <p class="eyebrow">FAQ</p>
          <h2 id="faq-heading">Answers for players, hosts, and search engines.</h2>
        </div>

        <div class="faq-list">
          <article v-for="faq in faqs" :key="faq.question" class="faq-card">
            <h3>{{ faq.question }}</h3>
            <p>{{ faq.answer }}</p>
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
