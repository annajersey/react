var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter.jsx');


var first='QQQwww';
ReactDOM.render(
    <Greeter name={first} message1="rererer"/>,
    document.getElementById('app')
);
