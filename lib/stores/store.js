var qwest = require('qwest');
var EventEmitter = require('event-emitter');

var Store = new function() {

	var ee = new EventEmitter();
	this.on = ee.on.bind(ee);

	var last_response = {};

	this.getAllArticles = function() {
		return qwest.get('http://citify.in/api/article/list?limit=10')
			.then(function(xhr, response) {
				return response;
			});
	};
	this.request = function(method, url, data) {
		return qwest.map(method, url, data)
			.then(function(xhr, response) {
				// console.log(xhr)
				ee.emit('change');
				return response;
			});
	};

	this.getLastResponse = function() {
		return last_response;
	};

};

module.exports = Store;
