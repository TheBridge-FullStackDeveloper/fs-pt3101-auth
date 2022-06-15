const { createUser } = require("../../queries/auth");
const { hash } = require("../../utils");
const { register } = require("../../errors/auth");
const errors = require("../../errors/commons");

module.exports = (db) => async (req, res, next) => {
  const { email, password } = req.body;

  const queryResult = await createUser(db)({
    email,
    password: await hash.encrypt(password),
  });

  if (!queryResult.ok) return next(register[queryResult.code] || errors[500]);

  res.status(200).json({
    success: true,
  });
};
