const create = (res, token, extTime = 300000) => {
  res.cookie("access_token", token, {
    expires: new Date(Date.now() + extTime),
    secure: false,
    httpOnly: true,
  });
};

module.exports = {
  create,
};
