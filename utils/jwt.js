const jwt = require("jsonwebtoken");

const sign = (payload) => {
  return jwt.sign(payload, process.env.SECRET);
};

const verify = (token) => {
  try {
    return jwt.verify(token, process.env.SECRET);
  } catch (error) {
    console.error("> [verify]: ", error.message);

    return false;
  }
};

module.exports = {
  sign,
  verify,
};
