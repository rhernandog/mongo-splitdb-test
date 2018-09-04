const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
	coordinates: {
		type: [Number],
		index: "2dsphere"
	},
	type: {
		type: String,
		default: "Point"
	}
});

const UserSchema = new Schema({
	name: String,
	location: LocationSchema
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
