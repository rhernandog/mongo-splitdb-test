// expresss
const express = require("express");
// mongoose
const mongoose = require("mongoose");
// routes
const routes = require("./routes/routes");

console.log( "--------------\nnode environment:" );
console.log( process.env.NODE_ENV );
console.log( "--------------" );

// create the connection with mongoose
if ( process.env.NODE_ENV === "development" ) {
	console.log( "------------------\nconnect to the real DB" );
	mongoose.connect("mongodb://localhost/split_real", { useNewUrlParser: true });
}

const app = express();
// set the JSON parser middleware
app.use(express.json());

routes(app);

module.exports = app;
