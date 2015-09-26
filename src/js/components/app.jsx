var Citify = {};

var React = require("react");
var Router = require("react-router");
var Store = require("../store.js");

module.exports = Citify;

// Citify.ViewArticles = require("./view-articles.jsx");


Citify.App = React.createClass({
	mixins : [Router.State, Router.Navigation],
	getInitialState: function(){
		return{
			articles : {},
		};
	},

	componentDidMount: function(){
		this.getArticles("get", "http://citify.in/api/article/list?limit=20");
	},

	componentWillMount: function(){

	},
	
	getArticles: function(method, url, data){
		Store.request(method, url, data)
			.then(function(response){
				self.setState({
					articles: response
				});
			});
	},

	cli: function(){
		console.log(this.state.articles);
	},

	render: function() {
		return (
			<div>test
				<button onClick={this.cli}>test</button>
			</div>
		);
	}
})