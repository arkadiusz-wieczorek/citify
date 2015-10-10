var Citify = {};

var React = require("react");
var Router = require("react-router");
var Store = require("../stores/store.js");

module.exports = Citify;

Citify.ArticleListElement = require("./article-list-element.jsx");
Citify.ArticleList = require("./article-list.jsx");

Citify.App = React.createClass({
	mixins: [Router.State, Router.Navigation],
	render: function() {
		return (
			<div className="app">
				<Router.RouteHandler/>
			</div>
		);
	}
});