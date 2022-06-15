const router = require("express").Router();
const { authorizer } = require("../../middlewares");

module.exports = (db) => {
  router.get("/", authorizer, require("./get-user")(db));

  return router;
};
