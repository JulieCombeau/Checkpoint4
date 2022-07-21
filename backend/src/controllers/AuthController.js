const User = require("../models/user");
const { verifyPassword } = require("../helpers/argonHelper");
const { encodeJWT } = require("../helpers/jwtHelper");

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findOneByEmail(email).then((user) => {
    if (!user) {
      res.status(401).send("Invalid credentials");
    } else {
      verifyPassword(password, user.hashedPassword).then((verification) => {
        if (verification) {
          // eslint-disable-next-line no-param-reassign
          delete user.hashedPassword;
          const token = encodeJWT(user);
          res.cookie("auth_token", token, { httpOnly: true, secure: false });

          res.status(200).json({ user });
        } else {
          res.status(401).send("Invalid credentials");
        }
      });
    }
  });
};

exports.logout = (req, res) => {
  res.clearCookie("auth_token").sendStatus(200);
};
