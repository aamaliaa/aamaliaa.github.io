---
title: Bathroom Vacancy Light
description: An internet of things project with Raspberry Pi and Arduino.
github: http://github.com/aamaliaa/arduino-raspi-bathroom-monitor
created: 10/15/2012
---

I used to live in a 3-bedroom apartment with only one bathroom and wanted an easy way to know when the bathroom was unoccupied without leaving my room (and my bed, for that matter). So, like any other normal person, I decided the solution was to design my own airplane-style lavatory vacancy light for my room.

I used an Arduino equipped with a magnetic reed switch and a WiFly attached to my bathroom doorframe that transmitted signals using Pusher via wifi. On the receiving end in my bedroom was a Raspberry Pi which was subscribed to the Arduino's Pusher channel. When signal was received upon door open and close, the Pi triggered an LED via its GPIO.

<iframe src="http://player.vimeo.com/video/54831393" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
