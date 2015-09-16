var Citify = require("./app.jsx");
var React = require("react");
var Router = require("react-router");

var routes = (
	<Router.Route handler={Citify.App} path="/">
		<Router.DefaultRoute name="start" path="/articles" handler={Citify.NavigationBox}/>
	    <Router.Route handler={Citify.NavigationBox} path="/articles">
	    	<Router.DefaultRoute name="view-articles" path="/articles" handler={Citify.ViewArticles}/>
	    </Router.Route>
	</Router.Route>
);

Router.run(routes, function(Handler) {
    var element = document.getElementById("content");
    React.render( <Handler/> , element);
});