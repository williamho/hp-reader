App.Router = Backbone.Router.extend({
	routes: {
		"": "showHome",
		"categories": "showCategories",
		"category/:id": "showCategory",
		"article/:id": "showArticle",
		"search": "showSearch",
		"search/:query": "showSearch",
		"*page": "defaultRoute"
	},
	showHome: function() {
		this.hideAll();
		App.Views.CategoryList.render();
	},
	showCategories: function() {
		this.hideAll();
		App.Views.CategoryList.render();
	},
	showCategory: function(id) {
		this.hideAll();
		App.Views.Category.load(id);
		App.Views.Category.render();
	},
	showArticle: function(id) {
		this.hideAll();
		App.Views.Article.load(id);
		App.Views.Article.render();
	},
	showSearch: function(query) {
		$(document.body).append("search ");
		if (query)
			$(document.body).append("- " + query);
		$(document.body).append("<br>");
	},
	defaultRoute: function(page) {
		$(document.body).append("default<br>");
	},
	hideAll: function() {
		$.each(App.Views, function(key,item) {
			item.hide()
		});
	}
});
