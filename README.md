# Free Cricket API 🏏  

[![Github Workflow](https://github.com/mskian/cricket-api-nodejs/workflows/server-test/badge.svg)](https://github.com/mskian/cricket-api-nodejs/actions)  

Node.js Version - Get Live Cricket Score data from `Cricbuzz.com`  

This is an unofficial API and not Linked or Partnered with Any Brands/Company.  

## How it Works? 🤔

Build using Node.js and cheerio.js - using cheerio for Scrape the data and Converted in JSON API with the Help of Express Server.

Everything is scraped live and shown to end users in realtime.  

**API URL**

- Live Match Data - `http://localhost:3000/live`
- Get Live data from the URL - `http://localhost:3000/score?url=<Live Match URL>`  

**Note**

API Caching, CORS and API Rate limit Was Enabled by default you can update the settings accoding to your usage - Files are Located in `/routes/` folder  

## Requirements 📑

- Server With Latest LTS Node.JS Support and Nginx (For Self Host)
- HTTPS for Secure SSL Connection

(OR)

- use Vercel or Heroku Free Cloud Hosting

## Installation and Development 📥

- Download the Clone the Repo

```sh
git clone https://github.com/mskian/cricket-api-nodejs.git
cd cricket-api-nodejs
```

- install Node Modules via `yarn`

```sh
yarn
```

- Test Locally

```sh
yarn dev
```

- Production

```sh
yarn start
```

## Usage 🍟

- Get the Live Match Score URL from - `https://www.cricbuzz.com/cricket-match/live-scores`
- Enter them Directly or replace `www` with `m`

### Example 📋

```sh
http://localhost:3000/score?url=https://www.cricbuzz.com/live-cricket-scores/30524/53rd-match-indian-premier-league-2020
```

(OR)

- Update the Match URL on `/utlis/app.json` File

```sh
http://localhost:3000/live
```

## Free Hosting 😍

- Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fmskian%2Fcricket-api-nodejs)  

## Contributing 🙌

Your PR's are Welcome

## Disclaimer 🗃

- This is not an Offical API from Cricbuzz - it's an Unofficial API
- This is for Education Purpose only - use at your own risk on Production Site

All Credits Goes to <https://www.cricbuzz.com/>

## My other Projects 🤓

| # | Project Name | Description |
|---|:------|-------------|
| 01 | [Live Cricket Score Static Site](https://github.com/mskian/livescore) | A Simple Scrape Method - Fetch the Live Cricket Score from `espncricinfo.com` using Nodejs and Cheerio.js - **Not Maintained** |
| 02 | [IPL Special](https://github.com/mskian/iplscore) | Cricket API for Get the Live IPL Cricket Score **not maintained** |
| 03 | [Live IPL Score Update on Telegram](https://github.com/mskian/score-update) | Get Live IPL cricket Score on Telegram - **Partially maintained**  |
| 04 | [Live Cricket Score Wordpress Plugin (JS Version)](https://github.com/mskian/hello-cricket) | Get Live Cricket Score on Wordpress site call API using Javascript Fetch API - **not maintained** |
| 05 | [Live Cricket Score Wordpress Plugin (Wp Remote URL)](https://github.com/mskian/san-cricket) | Get Live Cricket Score on Wordpress site call API using Wordpress HTTP Remote URL - **not maintained** |  
| 06 | [PWA Web App](https://github.com/mskian/vue-cricket) | Real-time Live Cricket Score Web app + PWA Built using Nuxt.js - **not maintained** |  
| 07 | [Cricket API Nodejs](https://github.com/mskian/cricket-api-nodejs) | JSON API Node.js Version - **Active Development** |  
| 08 | [Cricket Score Widget](https://github.com/mskian/cricket-score-widget) | Live Cricket Score Javascript Widget Build using Svelte JS - **Partially maintained** |  
| 09 | [Live Cricket Score CLI](https://github.com/mskian/cricket-cli) | Get Live Cricket Score Update on Terminal and CMD - **Active Development** |  

## LICENSE 📕

MIT
