<script setup lang="ts">
const appStoreUrl = "https://apps.apple.com/us/app/snapremark/id6738997529"
useSnapRemarkSeo({
  title: "Team Building Word Game: A 10-Minute Activity",
  description:
    "Run a 10-minute team building word game with SnapRemark. Follow a simple plan for 3–12 players with example clues, mode choices, and debrief questions.",
  path: "/team-building-word-game",
  socialDescription:
    "A practical plan for a short team activity: choose categories, give clues, rotate players, and talk about what helped your group guess."
})

const reasons = [
  {
    title: "Group and equipment",
    body: "The app supports 3–12 players. Bring one iPhone or iPad with SnapRemark installed and gather where everyone can hear the clues."
  },
  {
    title: "A mode to start with",
    body: "Start with Team Round so each team has its own turn to score. Try Hand Off once everyone knows the rules and wants to pass the phone after each correct guess."
  },
  {
    title: "Categories people share",
    body: "Choose familiar topics for the group. The built-in categories include Animals and History. Preview your choices, especially for mixed backgrounds or classroom use; the app is rated 13+."
  }
]

const agenda = [
  { title: "Minutes 0–2: Explain and demonstrate", body: "Form teams and choose your categories and round duration. Demonstrate the rule: describe the word without saying it. For an example word like ‘bicycle,’ try ‘two wheels, pedals, and handlebars.’" },
  { title: "Minutes 2–7: Play and rotate", body: "Run short Team Round turns and change clue givers between turns. Give each team a chance to play. Adjust the number and duration of rounds to fit the time available." },
  { title: "Minutes 7–10: Compare what worked", body: "Pause the game and ask which clues were easiest to understand. Invite players to share one example of a description that helped them guess. Finish with a takeaway about clear communication." }
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
        <a href="#activity-plan">Activity plan</a>
        <a href="#download">Download</a>
      </nav>
    </header>

    <main>
      <section class="hero hero-secondary">
        <div class="hero-copy">
          <p class="breadcrumb"><NuxtLink to="/">Home</NuxtLink> / Team-building word game</p>
          <p class="eyebrow">Team-building word game</p>
          <h1>A team word game for your next 10-minute break.</h1>
          <p class="hero-text">
            Bring 3–12 people together with SnapRemark, a free clue-giving game for iPhone and iPad. Players describe
            words while their teammates guess. Use the suggested plan below for a meeting warm-up or team gathering.
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
          <h2>Set up your group before the timer starts.</h2>
        </div>

        <div class="comparison-grid">
          <article v-for="reason in reasons" :key="reason.title" class="comparison-card">
            <h3>{{ reason.title }}</h3>
            <p>{{ reason.body }}</p>
          </article>
        </div>
      </section>

      <section id="activity-plan" class="comparison-section" aria-labelledby="activity-plan-heading">
        <div class="section-heading">
          <p class="eyebrow">Facilitator guide</p>
          <h2 id="activity-plan-heading">A suggested 10-minute activity plan.</h2>
          <p class="section-intro">This is a hosting schedule you can adapt, rather than a preset mode in the app.</p>
        </div>
        <div class="comparison-grid">
          <article v-for="step in agenda" :key="step.title" class="comparison-card">
            <h3>{{ step.title }}</h3>
            <p>{{ step.body }}</p>
          </article>
        </div>
      </section>

      <section class="content-grid" aria-labelledby="facilitator-tips-heading">
        <div class="section-copy">
          <p class="eyebrow">Keep everyone involved</p>
          <h2 id="facilitator-tips-heading">Make room for different ways of playing.</h2>
          <p>
            Offer a practice turn before keeping score. Let people choose whether to give clues, guess, or observe,
            and agree on any house rules before you begin. Use a longer round duration if the group needs more time.
          </p>
          <p>
            For more than 12 people, a suggested approach is to split into smaller groups with a device for each.
            Each group runs its own game. This plan is for people playing together in person.
          </p>
          <p><NuxtLink to="/how-to-play">Review the rules for Team Round and Hand Off</NuxtLink>.</p>
        </div>
        <div class="feature-stack">
          <article class="feature-card">
            <h3>Questions to close the activity</h3>
            <p>Which clue made a word click? Did an example help more than a definition? What did you change when someone did not understand?</p>
          </article>
          <article class="feature-card">
            <h3>Keep the stakes light</h3>
            <p>Use the game as a shared break and a conversation starter. Avoid treating scores or guessing speed as a measure of workplace ability.</p>
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
            <NuxtLink to="/party-word-game">Plan a party word game</NuxtLink>
          </article>
          <article class="resource-card">
            <div>
              <h3>Family party game</h3>
              <p>Explore the same format through the lens of family nights and holidays.</p>
            </div>
            <NuxtLink to="/family-party-game">Find family game night ideas</NuxtLink>
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
