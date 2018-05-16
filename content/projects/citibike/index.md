---
title: 'Citibike'
description: 'An exploration with the NYC Citibike API.'
link: 'http://citibike.amaliaviti.com'
github: 'http://github.com/aamaliaa/citibike'
created: "2013-06-01"
featured: false
---
When Citibike was announced, I think I was more excited about the data that would be generated and shared publicly than the bikes themselves. This project was a quick experiment built on top of the real-time Citibike stations data.

I used Google Maps and d3.js to plot out each of the stations on the map:

- <span style="color: green;">green</span> stations have > 5 bikes available
- <span style="color: orange;">orange</span> stations have between 1 and 5 bikes available
- <span style="color: red;">red</span> stations have 0 bikes available
- a <span style="color: green;">green</span> station with a larger circle radius has more available bikes

To use the tool, simply enter an origin address and a destination address (both NYC addresses), and hit the "plot" button. Bicycle directions between the closest stations to each of the two points that you've specified will be plotted on the map.
