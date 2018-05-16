---
title: 'Mirror'
description: 'My mirror is smarter than yours.'
github: 'https://github.com/aamaliaa/mirror'
created: "2018-02-15"
featured: true
---

I created a smart mirror for my apartment. This display hangs in my apartment and displays information useful at a glance--current time and date, the day's weather forecast, personal calendar events, nearby subway times, Citibike dock availability, and daily scheduled reminders.

#### V1 (2016)

![Mirror V1](images/mirror-v1.jpg)

I created the first non-interactive prototype using an old Dell netbook, plastic two-way mirror, and a custom-made wooden frame.

![Mirror V1 Inside](images/mirror-v1-inside.jpg)

The software ran a Node.js server on the backend and a React.js front-end. Glancing at it while getting ready quickly became a part of my morning routine.

#### V2 (2018)

![Mirror V2](images/mirror-v2.jpg)

The newest version is interactive via voice recognition (albeit a very crude version of it, currently). It is an Electron app running on Raspberry Pi that also utilizes React.js for the UI and has a much larger 1080p display.