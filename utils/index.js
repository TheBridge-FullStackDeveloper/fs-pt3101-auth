const hash = require("./hash");
const cookie = require("./cookie");
const jwt = require("./jwt");

const serialize = (res, payload) => {
  const token = jwt.sign(payload);
  cookie.create(res, token);
};

module.exports = {
  hash,
  cookie,
  jwt,
  serialize,
};
