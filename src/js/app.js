var App = {
	init: function() {
		App.Router = new App.Router();
		Backbone.history.start();
		return this;
	}
};
