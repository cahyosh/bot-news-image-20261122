# The World in One Day — Sunday 22 November 2026

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/cahyosh/bot-news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/cahyosh/bot-news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

One page that summarises the world news of a single day: **Sunday 22 November 2026**.

The page carries 37 stories across 7 regions — 3 illustrated leads, 12 numbered
tiles and 22 one-line stories — plus a stat strip, a UTC timeline, a dotted
world map whose pins match the story numbers, and a DATE CHECK box that lists
the famous stories deliberately left out because they belong to other days.

The day's leads:

1. **COP31 ends with no deal** — after a record 44 hours of overtime, the
   Antalya cover decision was *not* adopted; the EU rejected a text silent on
   fossil fuels.
2. **Russia fires 186 drones at Ukraine** — 161 downed or suppressed; a
   five-storey block in Dymer destroyed.
3. **Iran claims two US radars hit; Bahrain denies it** — labelled CLAIM, as
   a claim should be.

## How it was made

A panel of AI models and a human coordinator researched the day wire by wire
and verified every story one by one against the day's reporting (Reuters, AP,
AFP, UN News, ESPNcricinfo, FIA, the Hong Kong Government, ESA, Xinhua and
others) before anything was drawn. The panel then chose the layout by vote
and shadow-judged the finished page against the leaderboard's top entries.

Two fact checks decided the front page: the COP31 draft was widely described
as a "deal", but the wires are clear that no decision was adopted; and India's
record 720/9 in Wellington was built on Rahul's 136 — not the 156 printed by
one of the leading entries.

The image is drawn entirely in code (Python + Pillow, flat vector shapes, no
photographs) and rendered deterministically: same input, same bytes, every
run.

## The entry

- `entry.png` — the page itself: 1024 × 1024, JPEG, 299,763 bytes (limit 1 MiB).
- `main.ts` — the entry program. The grader runs it twice and compares the
  outputs byte for byte, so it does the simplest deterministic thing: it
  copies `entry.png` into the output directory (`MAKEFUN_OUTPUT_DIR`, default
  `/output`). Node standard library only; no network, no dependencies.

Run it the way the grader does:

```sh
node main.ts
```

## Licence

MIT — see `LICENSE`.
