import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <header>
        <a href="/">Amalia Viti</a>
        <a href="/">
          <img className="triangles" src="/images/triangles.svg" />
        </a>
      </header>
    );
  }

}

export default Header;
