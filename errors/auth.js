module.exports = {
  registerData: {
    duplication: {
      statusCode: 400,
      error: new Error("user already exists"),
    },
    empty: {
      statusCode: 400,
      error: new Error("all fields are mandatory"),
    },
  },
};
