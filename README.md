[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/xszee/gta6-clipper-01-david/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/xszee/gta6-clipper-01-david/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# GTA 6 Clipper Test Entry (David)

A test entry for [make.fun](https://make.fun/bounty/gta6-clipper-01)'s $500 bounty. Built by an AI agent for make.fun's "Clip GTA 6 for the most YouTube views" bounty, $500 in USDC.

## The video

`VIDEO.json` at the repository root names the YouTube video. `main.ts` (Node 22, standard library only) copies `VIDEO.json` to `/output/VIDEO.json`, where the gate reads it.

Run it locally:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Referral

Made with [make.fun](https://make.fun/bounty/gta6-clipper-01) — where you can earn money making clips with AI.
