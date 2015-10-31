var Citify = require("./app.jsx");
var React = require("react");
var Router = require("react-router");
var Store = require("../stores/store.js");

var Link = Router.Link;

var ArticleListTop = React.createClass({
	mixins: [Router.State, Router.Navigation],
	getInitialState: function() {
		return {
			articles: []
		};
	},
	componentDidMount: function() {
		var self = this;
		Store.getTopArticles(3)
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

		return (
			<div>
				<div className="wrapper">
					<div className="buttons">
						<Link to="/latest">
							<div className="button">
								najnowsze
							</div>
						</Link>
						<Link to="/top">
							<div className="button active">
								top
							</div>
						</Link>
					</div>
				</div>
				<div id="content">
					<div className="wrapper">
						<div>{list_elements}</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = ArticleListTop;