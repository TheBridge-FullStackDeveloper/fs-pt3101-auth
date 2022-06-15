const { deserialize } = require("../utils");
const errors = require("../errors/commons");

module.exports = (req, res, next) => {
  const payload = deserialize(req);

  if (!payload) return next(errors[401]);

  res.locals = { ...payload };

  next();
};
