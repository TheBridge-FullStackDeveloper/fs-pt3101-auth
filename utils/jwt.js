const jwt = require("jsonwebtoken");

const sign = (payload) => {
  return jwt.sign(payload, process.env.SECRET);
};

module.exports = {
  sign,
};
