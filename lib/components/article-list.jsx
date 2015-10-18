var Citify = require("./app.jsx");
var React = require("react");
var Router = require("react-router");
var Store = require("../stores/store.js");

var ArticleList = React.createClass({
	getInitialState: function() {
		return {
			articles: []
		};
	},
	componentDidMount: function() {
		var self = this;
		Store.getAllArticles()
			.then(function(response){
				self.setState({
					articles : response.results
				})
			})	
	},

	render: function() {
		var list_elements = this.state.articles.map(function(article){
			return (
				<Citify.ArticleListElement key={article.id} article={article}/>
			)
		})
		// console.log(list_elements)
		// console.log(this.state.articles)
		return (
			<div id="content">
				<div className="wrapper">
					{list_elements}
				</div>
			</div>
		);
	}
});

module.exports = ArticleList;