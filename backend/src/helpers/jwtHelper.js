const jwt = require("jsonwebtoken");

const accessTokenSecret = process.env.TOKEN_SECRET;

const encodeJWT = (payload) => {
  return jwt.sign({ payload }, accessTokenSecret, { expiresIn: "1h" });
};

const decodeJWT = (token) => {
  return jwt.decode(token, accessTokenSecret);
};

module.exports = { encodeJWT, decodeJWT };
