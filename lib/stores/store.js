var qwest = require('qwest');
var EventEmitter = require('event-emitter');
var Promise = require("bluebird");

var Store = new function() {

	var ee = new EventEmitter();
	this.on = ee.on.bind(ee);

	var cached_response = null;

	this.getAllArticles = function() {
		if (cached_response === null) {
			return qwest.get('http://citify.in/api/article/list?limit=10')
				.then(function(xhr, response) {
					cached_response = response;
					return response;
				});
		} else {
			return new Promise(function(resolve, reject) {
				resolve(cached_response);
			})
		}
	};

	this.getArticleById = function(id) {
		if (cached_response === null) {
			this.getAllArticles()
				.then(function() {
					var results = cached_response.results;
					for (var i = 0; i < results.length; i++) {
						if (results[i].id == id) {
							return results[i];
							break;
						}
					}
				})
		} else {
			var results = cached_response.results;
			for (var i = 0; i < results.length; i++) {
				if (results[i].id == id) {
					return results[i];
					break;
				}
			}
		}
	};

	this.request = function(method, url, data) {
		return qwest.map(method, url, data)
			.then(function(xhr, response) {
				// console.log(xhr)
				ee.emit('change');
				return response;
			});
	};


};

module.exports = Store;
