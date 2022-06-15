const { getFullUser } = require("../../queries/auth");
const errors = require("../../errors/commons  ");

module.exports = (db) => async (_, res, next) => {
  const { email } = res.locals;

  const queryResult = await getFullUser(db)({ email });

  if (!queryResult.ok) return next(errors[400]);

  const { name, role, birthdate } = queryResult;

  res.status(200).json({
    success: true,
    data: {
      email,
      name,
      role,
      birthdate,
    },
  });
};
