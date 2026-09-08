<script setup lang="ts">
const appStoreUrl = "https://apps.apple.com/us/app/snapremark/id6738997529"
useSnapRemarkSeo({
  title: "Free Word Guessing Game for iPhone",
  description:
    "Give clues, guess words, and pass the phone. Play SnapRemark with 3–12 people in Team Round or Hand Off mode. Free on iPhone, with no ads or in-app purchases.",
  path: "/word-guessing-game-iphone",
  socialDescription:
    "Turn one iPhone into a group word game: give clues, guess together, and choose Team Round or Hand Off. Free, with no ads or in-app purchases."
})

const reasons = [
  {
    title: "One phone, 3–12 players",
    body: "Gather your group around one iPhone. The clue giver reads the word on screen while the other players listen and guess."
  },
  {
    title: "Choose your round",
    body: "Team Round gives each team a turn to score. Hand Off keeps the phone moving after correct guesses, with pressure building until time runs out."
  },
  {
    title: "Make it fit your group",
    body: "Choose built-in categories such as Animals or History, then adjust the round duration and team sizes before you start."
  }
]

const faqs = [
  {
    question: "What is a game on iPhone where you guess the word?",
    answer: "SnapRemark is one option for playing with a group in person. One player sees a word and describes it without saying the word itself. The other players guess aloud while the timer runs."
  },
  {
    question: "Do you hold the phone on your forehead?",
    answer: "In SnapRemark, the clue giver reads the word on the phone and gives clues to the guessers. You keep the screen where the clue giver can read it, then pass the phone when the mode calls for it."
  },
  {
    question: "Is it free, and does everyone need to download it?",
    answer: "SnapRemark is free with no ads or in-app purchases. Your group can play using one phone with the app installed."
  },
  {
    question: "Which devices and ages is it for?",
    answer: "The App Store lists support for iPhone with iOS 17.4 or later and iPad with iPadOS 17.4 or later. It has a 13+ age rating. Check the current listing before downloading."
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
        <a href="#how-to-guess">How to play</a>
        <a href="#download">Download</a>
      </nav>
    </header>

    <main>
      <section class="hero hero-secondary">
        <div class="hero-copy">
          <p class="breadcrumb"><NuxtLink to="/">Home</NuxtLink> / Word guessing game for iPhone</p>
          <p class="eyebrow">Word guessing game</p>
          <h1>Give clues. Guess words. Pass the iPhone.</h1>
          <p class="hero-text">
            SnapRemark is a free word guessing game for iPhone for 3–12 players. One person reads the word on screen
            and gives clues without saying it. Everyone else guesses aloud before the timer runs out.
          </p>
          <p class="hero-note">Play together on one phone, with no ads or in-app purchases.</p>
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
          <h2>What you need for your first game.</h2>
        </div>

        <div class="comparison-grid">
          <article v-for="reason in reasons" :key="reason.title" class="comparison-card">
            <h3>{{ reason.title }}</h3>
            <p>{{ reason.body }}</p>
          </article>
        </div>
      </section>

      <section id="how-to-guess" class="content-grid" aria-labelledby="how-to-guess-heading">
        <div class="section-copy">
          <p class="eyebrow">Try a round</p>
          <h2 id="how-to-guess-heading">How the word guessing works.</h2>
          <p>
            Imagine the word is “penguin.” Your clue might be “a bird that cannot fly, wears a tuxedo, and lives
            somewhere cold.” Your teammates call out their guesses. When they get it, mark the word correct and
            move on. This is an example clue to explain the rules.
          </p>
          <p><NuxtLink to="/how-to-play">Read the full SnapRemark rules and mode guide</NuxtLink>.</p>
        </div>
        <ol class="mini-list">
          <li><strong>1. Set up:</strong> Choose Team Round or Hand Off, pick categories, and set your round duration.</li>
          <li><strong>2. Give clues:</strong> Let the clue giver see the screen. Describe the word without saying it.</li>
          <li><strong>3. Guess:</strong> Teammates answer aloud. Mark correct guesses in the app.</li>
          <li><strong>4. Follow your mode:</strong> Keep scoring during your turn in Team Round, or pass the phone after a correct guess in Hand Off.</li>
        </ol>
      </section>

      <section class="faq-section" aria-labelledby="iphone-faq-heading">
        <div class="section-heading">
          <p class="eyebrow">Before you download</p>
          <h2 id="iphone-faq-heading">Questions about playing on iPhone.</h2>
        </div>
        <div class="faq-list">
          <article v-for="faq in faqs" :key="faq.question" class="faq-card">
            <h3>{{ faq.question }}</h3>
            <p>{{ faq.answer }}</p>
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
              <p>Choose a mode and get friends playing at your next game night.</p>
            </div>
            <NuxtLink to="/party-word-game">Plan a party word game</NuxtLink>
          </article>
          <article class="resource-card">
            <div>
              <h3>Family party game</h3>
              <p>See why the format works well for holidays, trips, and mixed-age rooms.</p>
            </div>
            <NuxtLink to="/family-party-game">Find ideas for family game night</NuxtLink>
          </article>
          <article class="resource-card">
            <div>
              <h3>Team-building word game</h3>
              <p>Learn how the same quick-round format can work for work groups and classroom teams.</p>
            </div>
            <NuxtLink to="/team-building-word-game">Run a team word game</NuxtLink>
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
