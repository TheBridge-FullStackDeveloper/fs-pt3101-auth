const { createUser } = require("../../queries/auth");
const { encrypt } = require("../../utils/hash");
const { registerData } = require("../../errors/auth");
const errors = require("../../errors/commons");

module.exports = (db) => async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) return next(registerData["empty"]);

  const queryResult = await createUser(db)({
    email,
    password: await encrypt(password),
  });

  if (!queryResult.ok)
    return next(registerData[queryResult.code] || errors[500]);

  res.status(200).json({
    success: true,
  });
};
