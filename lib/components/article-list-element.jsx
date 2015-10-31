var React = require("react");
var Router = require("react-router");

var ArticleListElement = React.createClass({
	mixins: [Router.State, Router.Navigation],
	render: function() {
		var article = this.props.article;

		if (article.images[0] !== undefined) {
			var link_to_image = article.images[0].image;

			var image_div = (
				<div className="image">
					<img src={link_to_image}/>
				</div>
			)
		}

		var date = new Date(article.datetime_add * 1000);
		var time = date.toTimeString().substr(0,5);
		var cal = date.toISOString().substr(0,10);
		var formatted_time = cal + " " + time;

		//<h2><Router.Link to="article-view" path="article-view" params={{id:article.id}}>{article.title}</Router.Link></h2>

		return (
			<article className="preview-post">
				<div className="content">
					<div className="title">
						<h2>{article.title}</h2>
					</div>
					<div className="who">
						<p>DODANE PRZEZ </p><span className="user"> @{article.author.username.toUpperCase()}</span>
					</div>
					<div className="description">
						<span>{article.content}</span>
					</div>
				</div>
				<div>{image_div}</div>
				<div className="meta">
					<span>
						<img src="img/icons/ic_place.png"/><p>{article.city.repr_name}</p>
						<img src="img/icons/ic_comments.png"/><p>{article.comments_count}</p>
						<img src="img/icons/ic_calendar.png"/><p>{formatted_time}</p>
						<img src="img/icons/ic_upvote.png"/><p>{article.votes_plus}</p>
						<img src="img/icons/ic_downvote.png"/><p>{article.votes_minus}</p>
					</span>
				</div>
			</article>

		)
	}
});

module.exports = ArticleListElement;
