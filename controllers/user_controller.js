const User = require("../models/user");

module.exports = {
	createUser(req, res, next){
		User.create(req.body)
			.then( user => {
				console.log( "-----------------\nuser created succesfully!!!\n-----------------" );
				res.send(user);
			})
			.catch( e => res.send(e) );
	}
};
