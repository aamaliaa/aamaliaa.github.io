import React from 'react';

class TurnUp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      offset: this.props.offset || 0,
      delay: this.props.delay || 3000,
      things: this.props.things
    };
  }

  componentDidMount() {
    var self = this;
    setTimeout(function() { self.startInterval(); }, this.state.offset);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startInterval() {
    var self = this;
    var len = this.state.things.length;
    this.interval = setInterval(function () {
      var nextActive = self.state.active + 1 === len ? 1 : self.state.active + 1;
      self.setState({
        hidden: self.state.active,
        active: nextActive
      });
    }, this.state.delay);
  }

  render() {
    var self = this;
    return (
      <span className="turnUp">
        {this.state.things.map(function (thing, i) {
          var className;
          if (i === self.state.active) {
            className = 'active';
          } else if (i === self.state.hidden) {
            className = 'hidden';
          }
          return (
            <span
              className={className}
              key={i}>
              {thing}
            </span>
          );
        })}
      </span>
    );
  }

};

export default TurnUp;
