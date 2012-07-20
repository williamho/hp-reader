var App = {
	init: function() {
		App.router = new App.Router();
		Backbone.history.start();
		return this;
	}
};
