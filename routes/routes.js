const app = require("../app");
// get the controllers
const userControllers = require("../controllers/user_controller");

module.exports = app => {
	app.get("/", (req, res) => {
		res.send("hi didly ho!!");
	});

	app.post("/new", userControllers.createUser);
	
};
