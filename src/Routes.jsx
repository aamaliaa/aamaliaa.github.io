var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Root = require('./components/Root.jsx');
var Home = require('./components/Home.jsx');
var Project = require('./components/Project.jsx');

var Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Home} />
    <Route name="project" path='/projects/:slug' handler={Project} />
  </Route>
);

module.exports = Routes;
