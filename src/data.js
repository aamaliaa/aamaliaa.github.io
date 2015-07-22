var _ = require('underscore');
var fs = require('fs');
var path = require('path');
var fm = require('front-matter');
var marked = require('marked');

var contentDir = './src/content';
var projectDir = path.join(contentDir, 'projects');
var regex = /\.md$/;
var routes = [ '/' ];
var projectFile;

var getFile = function (dir, filename) {
  var content = fs.readFileSync(path.join(dir, filename), 'utf8');
  var matter = fm(content);
  return _.extend(matter.attributes, {
    slug: filename.replace(regex, ''),
    body: matter.body,
    html: marked(matter.body)
  });
};

var main = getFile(contentDir, 'index.md');

var projects = fs
  .readdirSync(path.join(projectDir))
  .filter(function (file) {
    return regex.test(file);
  })
  .map(function (file) {
    projectFile = getFile(projectDir, file);

    // add project route
    routes.push('/projects/' + projectFile.slug);

    return projectFile;
  })
  .sort(function (a, b) {
    return new Date(b.created) - new Date(a.created);
  });

module.exports = {

  title: 'Amalia Viti',
  main: main,
  routes: routes,
  projects: projects,
  social: [
    { name: 'Twitter', link: '//twitter.com/amaliaviti' },
    { name: 'Github', link: '//github.com/aamaliaa' },
    { name: 'LinkedIn', link: '//www.linkedin.com/in/amaliaviti' },
    { name: 'Instagram', link: '//www.instagram.com/aamaliaa' },
    { name: 'Soundcloud', link: '//soundcloud.com/amalia' }
  ],
  scripts: {
    ga: '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');ga(\'create\',\'UA-65420021-1\',\'auto\');ga(\'send\',\'pageview\');'
  }

};
