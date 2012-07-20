App.Router = Backbone.Router.extend({
	routes: {
		"": "showHome",
		"categories": "showCategories",
		"article/:id": "showArticle",
		"search": "showSearch",
		"search/:query": "showSearch",
		"*page": "defaultRoute"
	},
	showHome: function() {
		$(document.body).append("home<br>");
	},
	showCategories: function() {
		$(document.body).append("categories<br>");
	},
	showArticle: function(id) {
		$(document.body).append("article #"+id+"<br>");
	},
	showSearch: function(query) {
		$(document.body).append("search ");
		if (query)
			$(document.body).append("- " + query);
		$(document.body).append("<br>");
	},
	defaultRoute: function(page) {
		$(document.body).append("default<br>");
	}
});
