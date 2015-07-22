---
title: Fourplay
description: A hackathon mashup of Craigslist Missed Connections and Foursquare.
tags: hackathon
created: 05/01/2012
---
<div style='text-align:center; padding:15px;'>
	<iframe src='http://www.snappytv.com/snap/fourplay-mashes-up-foursqaure-checkins-and-craigslist-miss-about-techcrunch-disrupt-ny-hackathon-2012-on-techcrunch-disrupt-ny-hackathon?w=500&h=312' width='500' height='312' frameborder='0' scrolling='no' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>

Fourplay mashed up Craigslist Missed Connection listings and Foursquare User data to bring users missed connections that happened near or at their check-ins.

In order to achieve this we:
 - screenscaped Craigslist Missed Connections with a [Python script](https://scraperwiki.com/scrapers/ottawa_craigslist_missed_connections_1/)
 - analyzed each post for GPS data using the (now deprecated) Metalayer Text API
 - then used the GPS information to locate and map locations using the [Factual](http://developer.factual.com/display/docs/Factual+Developer+APIs+Version+3) and [Foursquare](https://developer.foursquare.com/) APIs

My team was awarded the Metalayer API Award for our use of their API to analyze the missed connection data.

### Press
 - [Fourplay and Sidewinder Win MetaLayer’s API Hackathon](http://blog.d8a.com/post/23444677000/fourplay-and-sidewinder-win-metalayers-api)
