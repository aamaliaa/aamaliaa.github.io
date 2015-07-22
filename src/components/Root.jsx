import React from 'react';
import { RouteHandler } from 'react-router';
import Footer from './Footer.jsx';

var css = require('../stylus/Main.styl');

class Root extends React.Component {

  render() {
    var props = {
      __html: safeStringify(this.props)
    };

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>{this.props.title}</title>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
          <RouteHandler
            {...this.props} />
          <Footer
            social={this.props.social} />
          <script id='props'
            type='application/json'
            dangerouslySetInnerHTML={props} />
          <script src='/bundle.js' />
          <script dangerouslySetInnerHTML={{ __html: this.props.scripts.ga }} />
        </body>
      </html>
    );
  }

}

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

export default Root;
