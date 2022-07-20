const Joi = require("joi");

exports.validateUser = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    firstname: Joi.string().min(3).max(100).presence(presence),
    lastname: Joi.string().max(100).presence(presence),
    email: Joi.string().email().max(100).presence(presence),
    password: Joi.string().min(8).max(255).presence(presence),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};

exports.validateGame = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    title: Joi.string().min(3).max(100).presence(presence),
    description: Joi.string().presence(presence),
    content: Joi.string().presence(presence),
    picture: Joi.string().max(1000).presence("optional").allow(null, ""),
    players: Joi.string().max(100).presence(presence),
    age: Joi.string().max(100).presence(presence),
    duration: Joi.string().max(100).presence(presence),
    category: Joi.string().max(100).presence(presence),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};
