const { generic } = require("../errors/auth");

module.exports =
  (...fields) =>
  (req, _, next) => {
    for (const field of fields) {
      if (!req.body[field]) return next(generic["empty"]);
    }

    next();
  };
