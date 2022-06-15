const { cookie } = require("../../utils");

module.exports = () => async (_, res) => {
  cookie.clear(res);

  res.status(200).json({
    success: true,
  });
};
