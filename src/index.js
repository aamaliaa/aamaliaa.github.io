var React = require('react');
var Router = require('react-router');
var Routes = require('./Routes.jsx')

// if client-side render
if (typeof document !== 'undefined') {
  var props = JSON.parse(document.getElementById('props').innerHTML);
  Router.run(Routes, Router.HistoryLocation, function (Handler) {
    React.render(React.createElement(Handler, props), document);
  });
}

module.exports = function (locals, callback) {
  Router.run(Routes, locals.path, function (Handler) {
    var html = React.renderToString(React.createElement(Handler, locals));
    callback(null, '<!DOCTYPE html>' + html)
  })
};
