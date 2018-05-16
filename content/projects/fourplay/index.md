---
title: 'Fourplay'
description: 'A hackathon mashup of Craigslist Missed Connections and Foursquare.'
tags: ['hackathon']
link: 'https://techcrunch.com/video/fourplay-mashes-up-foursqaure-checkins-and-craigslist-missed-connections/'
created: "2012-05-01"
featured: false
---

Fourplay mashed up Craigslist Missed Connection listings and Foursquare User data to bring users missed connections that happened near or at their check-ins.

In order to achieve this we:
 - scraped Craigslist Missed Connections with a [Python script](https://scraperwiki.com/scrapers/ottawa_craigslist_missed_connections_1/)
 - analyzed each post for GPS data using the (now deprecated) Metalayer Text API
 - then used the GPS information to locate and map locations using the Factual and [Foursquare](https://developer.foursquare.com/) APIs

My team was awarded the Metalayer API Award for our use of their API to analyze the missed connection data.

### Press
 - [Metalayer Gives Their Awards to Sidewinder, Fourplay and Serendipity](https://techcrunch.com/video/metalayer-gives-their-awards-to-sidewinder-fourplay-and-serendipity/)
