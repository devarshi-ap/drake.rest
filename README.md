
<h1 align="center">
  drake.rest
  <br>
  <img src="https://i.pinimg.com/originals/53/b6/88/53b6885e1f74752065df7e479c5403ee.gif" alt="Drake" width="200"></img>
  <br>
</h1>

<h4 align="center">A public REST API for random Drake quotes + lyrics (Drake as a Service).</h4>

<p align="center">
    <img src="https://vercelbadge.vercel.app/api/devarshi-ap/drake.rest"
            alt="VercelBadge">
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#usage">Usage</a> •
  <a href="#tech-specs">Tech Specs</a> •
  <a href="#a-blurb">A Blurb</a> •
</p>

https://user-images.githubusercontent.com/59234436/210021815-dbdfe7b3-0775-4029-a4a6-2831b282c470.mov

## Key Features

* API endpoints to serve random Drake quote(s) on request
    - `GET` `/api/quotes/random`
    - `GET` `/api/quotes/all`
    - `GET` `/api/_info`
        - idea: API's should have an endpoint dedicated to providing info about itself (much like `man man` in linux)
* Twitter Widget for sharing quote
* Beautiful UI (if i don't say so myself)
* Dark/Light mode
* Responsive Design

## Usage

###### GET /api/quotes/random
```json
{
    "quote": "Me and all the dogs acting like some dogs"
}
```

###### GET /api/quotes/all
```json
{
    "quote": {
        "quotes": [
            "Oh, who am I fooling?",
            // ...and so on
        ]
    }
}
```

###### GET /api/_info
```json
{
    "info": {
        "post": {
            "tally": 0,
            "endpoints": []
        },
        "get": {
            "tally": 3,
            "endpoints": [
                "/api/quotes/random",
                "/api/quotes/all"
                "/api/_info"
            ]
        },
        // ... and so forth
    }   
}
```
<br />

###### $ Dev. Setup
Ensure [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) are installed on your machine. From your command line:

```bash
# Clone this repo
$ git clone https://github.com/devarshi-ap/drake.rest.git

# Go into the repo
$ cd drake.rest

# Install dependencies
$ npm install

# Run the dev-server
$ npm run dev
```

## Tech Specs

Here's the toolkit I chose, and my ratinoale as to why:
<div style="display: inline">
    <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white">
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">
</div>
<br />
<span>Nextjs</span>
<ul>
    <li>out-of-the-box routing for Pages & API endpoints which helps keep the workdir organized.</li>
    <li>The GetStaticProps async function helps generate data on build-time also supports cache-control for the API responses</li>
    <li>For the future, test out the Edge API Routes which are fast and smaller in size</li>
    <li>Easy deployment to Vercel in a matter of seconds</li>
</ul>
<span>TypeScript</span>
<ul>
    <li>enforces type-safety to all functions & variables, reducing chances of type errors</li>
    <li>improves developer exp., refrence validation, and code maintainability</li>
</ul>
<span>Tailwind CSS</span>
<ul>
    <li>although inline Tailwind styling can get really long at times, I visioned the design to be minimalist, thus, Tailwind was perfect simply because I am most familiar with it</li>
</ul>

## A Blurb

> 💡 Project idea:
> Let this repo act as a template for a random <quote\general-string> generator!
> 1. Clone this repo
> 2. Change /json/quotes.json to include quotes from _, or a general set of strings.
> 3. Update UI in index.tsx accordingly
> 4. Deploy it and...💥 you're done!


> This project was inspired from [@ajzbc/kanye.rest](https://github.com/ajzbc/kanye.rest)
