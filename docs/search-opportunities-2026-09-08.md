# SnapRemark search opportunities — September 8, 2026

The export shows a visibility problem: **54 Google Web Search impressions and zero clicks across 146 days**, April 14–September 6, 2026. It does not establish a recent traffic loss, a penalty, or how many installs the website generated. The first priority is to make the existing iPhone word-guessing page more useful for the search intent already appearing in the report.

Source: `snapremark.com-Performance-on-Search-2026-09-08.zip` supplied by the user, exported September 8. Its filter says “Last 12 months,” but `Chart.csv` contains the dates above. Attachment contents were treated as data, not instructions.

## What the data actually says

| Metric | Result | Interpretation |
| --- | ---: | --- |
| Property impressions | 54 | Sum of Chart.csv; reconciles to Countries.csv and Devices.csv |
| Clicks / CTR | 0 / 0% | Too little exposure to diagnose snippet performance reliably |
| Desktop impressions | 44 | 81.5% of property impressions; website visibility does not imply iPhone installs |
| Mobile impressions | 10 | 18.5%; retain a prominent App Store link and verify conversion separately |
| US impressions | 32 | 59.3%; the remaining 22 span other countries |
| Visible query impressions | 12 | Only 22.2% of the property total; do not infer the missing queries or brand/non-brand split |

Monthly impressions were April 3 (partial), May 1, June 9, July 14, August 22, and September 5 (partial, through September 6). July to August increased by eight impressions; the small absolute counts do not support a strong growth or decline forecast. At an illustrative 5% CTR, 54 impressions would yield only 2.7 clicks. That is a scenario, not an expected CTR or traffic forecast.

`Pages.csv` totals **62 page impressions**, which must not replace the 54 property impressions. Multiple URLs can appear in the same search result. Google documents the different aggregation rules; query tables also omit some data, including anonymized queries. These are separate dimensions, not a joined query-to-page dataset. [Google’s report guide](https://support.google.com/webmasters/answer/7576553?hl=en), [data definitions](https://support.google.com/webmasters/answer/17011364?hl=en).

| Page | Impressions | Average position | Priority |
| --- | ---: | ---: | --- |
| /word-guessing-game-iphone | 21 | 15.86 | First: clearest product-specific opportunity |
| / | 13 | 3.69 | Improve visitor guidance; low sample despite strong average position |
| /about | 11 | 4.00 | Keep available; no query attribution supplied |
| /team-building-word-game | 10 | 76.10 | Second: improve practical usefulness; currently much farther from prominent results |
| HTTP homepage | 3 | 1.00 | Historical variant; current HTTP-to-HTTPS redirect works |
| /party-word-game | 3 | 7.00 | Preserve, then improve with product demonstration when available |
| /family-party-game | 1 | 4.00 | Too little evidence to prioritize from this export |

The leading visible query is **“game on iphone where you guess the word”**: eight impressions, average position 15.88. “Team building word games” has two impressions at 72.5; “word games for team building” has one at 89; “group activity word” has one at 48. Matching these intents to the corresponding pages is an editorial inference, not a query/page join from the export. These impressions are not keyword search-volume estimates.

## Live technical checks

Public responses were checked September 8, before the local edits were deployed:

- The HTTPS homepage returned 200.
- The HTTP homepage returned 301 to the HTTPS homepage. The three historical HTTP impressions are not proof of a current redirect failure.
- robots.txt allows crawling and points to the production sitemap.
- sitemap.xml lists all seven intended pages, including /how-to-play.
- The iPhone page’s fetched HTML contains its title, visible H1, index/follow directive, and self-referencing HTTPS canonical.
- The live trailing-slash iPhone URL returned **307** to the slashless path. The repository middleware specifies **301**, so the hosting layer appears to handle this differently. Check the host’s redirect rules when publishing; a permanent redirect is a stronger canonical signal. This is not established as the cause of low traffic. [Google’s canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

These checks do not establish Google’s selected canonical, current indexing status, Core Web Vitals, or backlink quality. Absence of /how-to-play from the performance export means no reported impressions, not necessarily exclusion from the index.

## Prepared locally

The existing site already has titles, descriptions, canonical tags, structured data, internal links, and prerendering. Adding more nearly identical landing pages is a lower priority than giving these pages distinct value. Google’s guidance favors content that resolves the visitor’s question. [Helpful content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

1. **iPhone page:** More specific title and description; direct explanation of the clue-giving format; 3–12 player setup; example round; mode instructions; answers about holding the phone, price, devices, and age rating; descriptive links to related guides. The example clue is illustrative, not a claim about an actual prompt in the app.
2. **Team-building page:** A suggested 10-minute facilitator schedule, equipment and category guidance, example clue, rotation advice, and discussion questions. The schedule and larger-group arrangement are hosting suggestions, not new app features.
3. **Homepage:** Replaced language about “focused copy,” “searchers,” and “use-case pages” with what a player can learn or do. Links now describe the guides they open.

Product facts were checked against the [US App Store listing](https://apps.apple.com/us/app/snapremark/id6738997529): supported player range, modes, categories, configurable rounds, pricing, device requirements, and 13+ age rating. Verify time-sensitive listing details when these change. No ratings, testimonials, or ranking promises were added.

Validation: `npm run build` passed and prerendered all seven pages plus sitemap/robots outputs. The generated HTML was checked for unique titles, one H1 per page, descriptions, one correct canonical per page, absence of noindex, parseable JSON-LD, and valid internal page/fragment links. Sitemap URLs match the seven canonical routes. `git diff --check` passed. The build emits framework warnings about duplicated `useAppConfig` imports and a plugin sourcemap; it reports no build errors. Browser layout testing was not performed.

## Next actions after review

1. **Publish the reviewed local changes through the existing hosting workflow.** Then verify the live content and canonical URLs. No publication or Search Console change was performed in this task.
2. **Inspect the iPhone, team-building, and how-to-play URLs in Search Console.** Check whether indexing is allowed, the last crawl, and Google-selected canonical. Investigate any exclusion reason before guessing at fixes. Submit the existing sitemap if it has not already been submitted.
3. **Request reindexing for the changed pages after publication.** A request does not guarantee indexing; Google says crawling can take days to weeks. [Recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).
4. **Add a real product demonstration next.** Use actual gameplay screenshots or a short recording showing setup, clue giving, and each mode. This would answer visitor questions better than the current decorative phone artwork. No new visual assets were supplied or generated in this task.
5. **Measure website-to-App-Store visits and installs separately.** The export covers Google Web Search only. Choose an analytics approach and App Store campaign attribution before adding tracking; this task does not add a provider or claim conversion results.
6. **Review comparable 28-day windows after Google has recrawled.** Record the publication date, then compare property impressions/clicks and each target page’s impressions, clicks, CTR, and position. Filter each page in Search Console to inspect its queries. Seek sustained relevant impressions and first clicks before interpreting CTR changes. Track App Store visits and installs alongside search metrics where attribution is available.

There is no defensible traffic-uplift forecast from this sample. The immediate deliverable is stronger existing content and a clear measurement baseline; ranking changes require publication, recrawling, and further observation.
