var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute
var Citify = require('./components/app.jsx');


// var createBrowserHistory = require('history');
// var history = createBrowserHistory();

var createBrowserHistory = require('history/lib/createBrowserHistory');


ReactDOM.render(
	<Router history={createBrowserHistory()}>
		<Route path="/" component={Citify.App}>
			<IndexRoute name="article-list" component={Citify.ArticleList}/>
			<Route path="latest" name="latest" component={Citify.ArticleList}/>
			<Route path="top" name="top" component={Citify.ArticleListTop}/>
			<Route path="article/:id" name="article-view" component={Citify.ArticleView}/>
		</Route>
	</Router>,
	document.getElementById('app')
);