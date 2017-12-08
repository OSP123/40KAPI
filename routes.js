module.exports = function(app){

		// Our model controllers (rather than routes)
		var application_controller = require('./controllers/application_controller');
		var users_controller = require('./controllers/users_controller');
		var trips_controller = require('./controllers/trips_controller');
		var apis_controller = require('./controllers/apis_controller');

		app.use('/', application_controller);
		app.use('/users', users_controller);
		app.use('/trips', trips_controller);
    //other routes..
    app.use('/apis/', apis_controller);
}