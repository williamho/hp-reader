App.Models.Category = Backbone.Model.extend({
	defaults: {
		key: null,
		title: 'Untitled',
		image: null,
		color: '#FFFFFF'
	}
});

App.Collections.Categories = Backbone.Collection.extend({
	model: App.Models.Category
});