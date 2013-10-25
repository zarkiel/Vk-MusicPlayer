AppRouter = Backbone.Router.extend({
	routes: {
		'search/:query': 'search',
		"*actions": "root"
	}
});


