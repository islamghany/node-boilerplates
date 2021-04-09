const Joi = require("joi");

exports.something = (req, res, next) => {
	next();
};
exports.login = (req, res, next) => {
	const schema = Joi.object({
		email: Joi.string().required(),
		password: Joi.string().required(),
		remember: Joi.boolean(),
	});

	const { error, value } = schema.validate(req.body);
	if (error) {
		return res.status(400).json({ message: error.message });
	}
	next();
};