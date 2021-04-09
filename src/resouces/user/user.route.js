const router = require("express").Router();
const userController = require("./user.controller");
const userValidator = require("./user.validator.js");

router
	.route("/")
	.get(userValidator.something, userController.something)
	.post(userValidator.something, userController.something);

router
	.route("/:id")
	.get(userValidator.something, userController.something)
	.put(userValidator.something, userController.something)
	.delete(userValidator.something, userController.something);

module.exports = router;