const { createUser } = require('../../queries/auth');
const { hash, sendEmail } = require('../../utils');
const { register } = require('../../errors/auth');
const errors = require('../../errors/commons');

module.exports = db => async (req, res, next) => {
  const { email, password } = req.body;

  const queryResult = await createUser(db)({
    email,
    password: await hash.encrypt(password),
  });

  if (!queryResult.ok) return next(register[queryResult.code] || errors[500]);

  const message = 'Gracias por registrarte en mi web, disfruta el contenido';

  try {
    await sendEmail({
      email,
      subject: 'Bienvenido a mi web, gracias por registrarte',
      message,
    });
  } catch (error) {
    console.log('> error: ', error.message);
  }

  res.status(200).json({
    success: true,
  });
};
