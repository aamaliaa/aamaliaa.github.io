import React from 'react'

class TurnUp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: 0,
      hidden: 0,
      offset: this.props.offset || 0,
      delay: this.props.delay || 3000,
      things: this.props.things,
    }
  }

  componentDidMount() {
    setTimeout(
      () => { this.startInterval() },
      this.state.offset
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  startInterval() {
    var self = this
    var len = this.state.things.length
    this.interval = setInterval(() => {
      var nextActive = self.state.active + 1 === len ? 1 : self.state.active + 1
      self.setState({
        hidden: self.state.active,
        active: nextActive
      })
    }, this.state.delay)
  }

  render() {
    const { things, active, hidden } = this.state
    return (
      <span className="turnUp">
        {things.map((thing, i) => {
          var className
          if (i === active) {
            className = 'active'
          } else if (i === hidden) {
            className = 'hidden'
          }
          return (
            <span
              className={className}
              key={i}>
              {thing}
            </span>
          )
        })}
      </span>
    )
  }

}

export default TurnUp
