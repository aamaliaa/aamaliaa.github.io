import React from 'react';
import TurnUp from './TurnUp.jsx';

class About extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      adjectives: [
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
        'a creator'
      ],
      things: [
        'music',
        'apps',
        'websites',
        'clouds',
        'APIs',
        'things'
      ]
    }
  }

  render() {
    var adjectives = <TurnUp things={this.state.adjectives} />;
    var things = <TurnUp things={this.state.things} offset={500} />;
    return (
      <section className="about">
        <h1>
          {this.props.title} <span className="descriptor">is {adjectives} and makes {things}.</span>
        </h1>
        <img className="avatar" src={this.props.avatar} alt="Amalia Viti" />
        <div
          className="blurb"
          dangerouslySetInnerHTML={{ __html: this.props.html}} />
      </section>
    );
  }

}

export default About;
