App.Views.CategoryList = Backbone.Views.extend({
	el: $("#categorylist"),
	initialize: function() {
		this.collection = App.Collections.CategoryList;
		this.collection.bind("add", this.addCategory);
		
	},
	events: {
	
	},
	render: function() {
		var data = {
			categories: this.collection.models,
			_: _
		};
		
		var compiledTemplate = _.template( $("#categorylist_template").html(), data );
		this.el.html( compiledTemplate ); 
	},
	addCategory: function(model) {
		
	}
});
