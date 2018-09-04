const mongoose = require("mongoose");

// connect to the db before starting the test suite
before( done => {
	console.log( "------------------\nconnect to the test DB" );
	console.log( process.env.NODE_ENV );
	console.log( "------------------" );
	mongoose.connect("mongodb://localhost/split_test", { useNewUrlParser: true });
	mongoose.connection
		.once("open", () => done() )
		.on("error", e => console.warn( "error", e ) );
	// 
});

// before running any test drop the users collection
beforeEach(done => {
	const { users } = mongoose.connection.collections;
	// check the used database
	console.log("--------------------\nchecking database - before each");
	console.log(mongoose.connection.db);
	console.log("--------------------");

	users.drop()
		.then( () => done() )
		.catch( e => {
			// the collection might be empty, so check if the error
			// returned is from the drop method or because there is
			// no collection to be dropped
			e.message.match(/ns not found/) ? done() : done(e);
		});
	// 
});

