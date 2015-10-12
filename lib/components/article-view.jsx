var React = require("react");
var Router = require("react-router");
var Store = require("../stores/store.js");

var ArticleView = React.createClass({
	mixins: [Router.State, Router.Navigation],
	getInitialState: function() {
		return {
			article: null 
		};
	},

	componentDidMount: function() {
		this.storeArticle();
	},
	componentWillReceiveProps: function(nextProps) {
		this.storeArticle();
	},

	storeArticle: function(){
		var self = this;
		Store.getArticleById(this.props.params.id)
			.then(function(article){
				self.setState({
					article: article
				})
			})
	},
	render: function() {
		console.log(this.props.params.id)
		return (
			<div className="ArticleView">
				<span>{this.state.article}</span>
			</div>
		);
	}
});

module.exports = ArticleView;