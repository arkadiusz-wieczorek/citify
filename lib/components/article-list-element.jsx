var React = require("react");
var Router = require("react-router");

var ArticleListElement = React.createClass({
	mixins: [Router.State, Router.Navigation],
	render: function() {
		var article = this.props.article;

						// <Link name="Link" to={article.id}/>
						// <Router.Link to="article-view" params={{resource_type_name:resource_type.name}}>
						// 	<li id={resource_type.name} key={resource_type.name}>{resource_type.human_readable_name}</li>
						// </Router.Link>
						// <Router.Link to="article-view">
						// 	<span>link</span>
						// </Router.Link>
		return (
			<article className="preview-post">
					<div className="image">
						<img src={article.thumbnail}/>
					</div>
					<div className="content">
						<h2>{article.title}</h2>
						<p>Dodane przez @{article.author.username}</p>
						<div className="post-meta">
							<p className="icon">&#xe800;</p>
							<p>{article.datetime_add}</p>
							<p className="icon">&#xe803;</p>
							<p>{article.comments_count}</p>
						</div>
						<span>{article.content}</span>
					</div>
				</article>
		)
	}
});

module.exports = ArticleListElement;
