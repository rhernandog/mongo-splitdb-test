// chai assertion
const assert = require("chai").assert;
// supertest
const request = require("supertest");
// mongoose
const mongoose = require("mongoose");
// express app
const app = require("../app");
// the user model from mongoose instead of importing it from the schema
// file, to prevent more than one import
const User = mongoose.model("users");

describe("Test the user collection", () => {

	// user creation
	it("Should create a user in the test database", done => {
		const testData = {
			"name": "Moe Szyslak",
			"location": {
				"type": "Point",
				"coordinates": [-70.448878, -33.575905]
			}
		};

		// send the test data to the api to create a user
		request(app)
			.post("/new")
			.send(testData)
			.end( (err, res) => {
				if (err) done(err);// check the used database
				console.log("--------------------\nchecking database - CREATE TEST");
				console.log(mongoose.connection.db);
				console.log("--------------------");
				// get the created user
				User.findById( res.body._id )
					.then( user => {
						assert.equal(user.name, testData.name);
						done();
					})
					.catch( e => done(e) );
				// find user
			});
		// request post test
	});

});
