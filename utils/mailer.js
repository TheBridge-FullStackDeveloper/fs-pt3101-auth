const mailer = require("../configs/mail");

const patterns = {
  welcome: {
    subject: "Bienvenido a mi web, gracias por registrarte",
    text: "Gracias por registrarte en mi web, disfruta el contenido",
  },
};

const messageFactory = ({ to, type }) => {
  const { subject, text } = patterns[type];

  return {
    from: process.env.MAILER_ORIGIN,
    to,
    subject,
    text,
  };
};

const send = async ({ to, type }) => {
  try {
    const message = messageFactory({ to, type });
    console.info("> message: ", message);

    const mailerResponse = await mailer.sendMail(message);

    console.info("> mail response: ", mailerResponse);
    return true;
  } catch (error) {
    console.error("> [email]: ", error.message);
    return false;
  }
};

module.exports = {
  send,
};
