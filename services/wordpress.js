import wp from 'wordpress-rest-api';

var WP = new wp({ endpoint: 'http://localhost/clean-wordpress/wp-json' });

export default {

	// Name is the resource. Required.
	name: 'posts',

	// At least one of the CRUD methods is Required
	read: function(req, resource, params, config, callback) {
		
		WP.posts()
		.get(function( err, data ) {
			if ( err ) {
				callback(err, data);
			}
			callback(null, data);;
		});
	}//,
	// other methods
	// create: function(req, resource, params, body, config, callback) {},
	// update: function(req, resource, params, body, config, callback) {},
	// delete: function(req, resource, params, config, callback) {}
}