var Citify = {};

var React = require("react");
var Router = require("react-router");
var Dispatcher = require("../js/dispatcher.js");

Citify.ViewArticles = require("./view-articles.jsx");

Citify.App = React.createClass({
	mixins : [Router.State, Router.Navigation],
	getInitialState: function(){
		return{
			articles : {},
		};
	},

	componentDidMount: function(){

	},

	componentWillMount: function(){

	},

	changeAttributeValue: function(attribute_name, value){
		var obj = {};
		obj[attribute_name] = value;
		this.setState(obj);
	},

	readArticles: function(){
		Dispatcher.getArticles().done(this.storeArticles.bind(this));
	},

	storeArticles: function(articles){
		this.setState({
			articles: articles
		})
	},

	render: function() {
		return (
			<div />
		);
	}
})