const { sql } = require("slonik");

const selectFullUser = ({ email }) => {
  return sql`
    SELECT * FROM users
    WHERE email = ${email};
  `;
};

const insertUser = ({ email, password }) => {
  return sql`
    INSERT INTO users (
      email, password
    ) VALUES (
      ${email}, ${password}
    );
  `;
};

module.exports = {
  selectFullUser,
  insertUser,
};
