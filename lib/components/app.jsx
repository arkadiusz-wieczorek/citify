var Citify = {};

var React = require("react");
var Router = require("react-router");
var Store = require("../stores/store.js");

module.exports = Citify;

Citify.ArticleListElement = require("./article-list-element.jsx");
Citify.ArticleList = require("./article-list.jsx");
Citify.ArticleListTop = require("./article-list-top.jsx");
Citify.ArticleView = require("./article-view.jsx");

Citify.App = React.createClass({
				// <Router.RouteHandler/>
	mixins: [Router.State, Router.Navigation],
	render: function() {
		return (
			<div className="app">
				<div className="navbar">
					<div className="wrapper">
						<div className="logo">
							<img src="img/logo.png" alt="Citify logo"/>
						</div>
					</div>
				</div>
				{this.props.children}
				<div className="wrapper">
					<div id="market">
						<div className="android">
							Stronę cały czas rozwijamy, więcej funkcjonalności znajdziesz w naszej aplikacji dla systemu Android
						</div>
						<a href="https://play.google.com/store/apps/details?id=com.citify">
							<img src="img/icons/ic_android_r.png"/>
						</a>
					</div>
				</div>
				<div id="footer">
					<div className="wrapper">
						citify © 2015
					</div>
				</div>
			</div>
		)
	}
});