var React = require("react");
var Router = require("react-router");
var routes = require("./components/routes.jsx");

Router.run(routes, function(Handler) {
    var element = document.getElementById("app");
    React.render( <Handler/> , element);
});