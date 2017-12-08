module.exports = function(app){

		// Our model controllers (rather than routes)
		var application_controller = require('./controllers/application_controller');
		var apis_controller = require('./controllers/apis_controller');

		app.use('/', application_controller);
    //other routes..
    app.use('/apis/', apis_controller);
}