import React from 'react';
import Social from './Social.jsx';

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <span className="copyright">
          <a href="/">&copy; 2015 Amalia Viti</a>
        </span>
        <Social
          social={this.props.social} />
      </footer>
    );
  }

}

export default Footer;
