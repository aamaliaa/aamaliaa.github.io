import React from 'react';

class Social extends React.Component {

  render() {
    return (
      <div className="social">
        {this.props.social.map(function (src) {
          return <a href={src.link} key={src.name} target="_blank">{src.name}</a>;
        })}
      </div>
    );
  }

}

export default Social;
