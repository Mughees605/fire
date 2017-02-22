var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//import "bootstrap/dist/css/bootstrap.min.css"
var TodoApp = require('TodoApp');

// Load foundation
//$(document).foundation();
//import 'bootstrap/dist/css/bootstrap.css';
// App css
require('style!css!app/styles/main.css')
require("style!css!node_modules/bootstrap/dist/css/bootstrap.css")

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
require("./redux-example")
//require("./redux-todo-example")