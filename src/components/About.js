import React from 'react'
import TurnUp from './TurnUp.js'

import AvatarImage from '../images/amaliaviti.jpg'

const adjectivesList = [
  'an engineer',
  'a nerd',
  'crazy',
  'a dj',
  'a musician',
  'a developer',
  'creative',
  'a maker',
  'a technologist',
  'a hacker',
  'a tinkerer',
  'data-obsessed',
  'a creator',
  'a plant mom',
]

const thingsList = [
  'music',
  'apps',
  'websites',
  'clouds',
  'APIs',
  'things',
  'smart mirrors',
]

const About = ({ title, blurb }) => {
  const adjectives = <TurnUp things={adjectivesList} />
  const things = <TurnUp things={thingsList} offset={500} />

  return (
    <section className="about">
      <h1>
        {title} <span className="descriptor">is {adjectives} and makes {things}.</span>
      </h1>
      <img className="avatar" src={AvatarImage} alt="Amalia Viti" />
      <div
        className="blurb"
        dangerouslySetInnerHTML={{ __html: blurb}} />
    </section>
  )
}

export default About
