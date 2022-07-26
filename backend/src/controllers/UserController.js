const { Prisma } = require("@prisma/client");
const { hashPassword, verifyPassword } = require("../helpers/argonHelper");
const user = require("../models/user");
const { validateUser } = require("../utils/validate");

const createOne = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const error = validateUser({
    firstname,
    lastname,
    email,
    password,
  });
  if (error) {
    res.status(422).json(error);
  } else {
    try {
      const hashedPassword = await hashPassword(password);
      const message = await user.createOne({
        firstname,
        lastname,
        email,
        hashedPassword: hashedPassword.toString(),
      });
      req.userCreated = message;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          return res.status(409).json({
            erreur: "Cette adresse email est déjà utilisée.",
          });
        }
      }
    }
  }
  return res.status(200).json("Utilisateur coorectement crée");
};

const getAll = async (req, res) => {
  const result = await user.findAll();
  const newResults = result.map((elem) => ({
    id: elem.id,
    firstname: elem.firstname,
    lastname: elem.lastname,
    email: elem.email,
  }));
  res.status(200).json(newResults);
};

const getOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);

  const result = await user.findOne(userId);

  if (result) {
    delete result.hashedPassword;
    return res.status(200).json({ result });
  }
  return res.status(404).json({ Erreur: "L'utilisateur n'existe pas" });
};

const updateOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);

  if (req.body.passwordChangeRequest) {
    const userToVerify = await user.findOne(userId);
    const currentPasswordTest = await verifyPassword(
      req.body.passwordChangeRequest.currentPassword,
      userToVerify.hashedPassword
    );
    if (!currentPasswordTest) {
      return res.status(401).send("Mot de passe incorrect");
    }
    const newHashedPassword = await hashPassword(
      req.body.passwordChangeRequest.newPassword
    );
    delete req.body.passwordChangeRequest;
    const result = await user.updateOne(userId, {
      hashedPassword: `${newHashedPassword}`,
    });
    if (result) {
      res.status(200).json({ "Utilisateur mis jour :": { result } });
    } else {
      res.status(404).json({ Erreur: "L'utilisateur n'existe pas" });
    }
  } else if (req.body.password) {
    req.body.hashedPassword = await hashPassword(req.body.password);
    delete req.body.password;
    const result = await user.updateOne(userId, req.body);
    if (result) {
      delete result.hashedPassword;
      res.status(200).json({ "Utilisateur mis jour :": { result } });
    } else {
      res.status(404).json({ Erreur: "L'utilisateur n'existe pas" });
    }
  } else {
    const result = await user.updateOne(userId, req.body);
    if (result) {
      delete result.hashedPassword;
      res.status(200).json({ "Utilisateur mis jour :": { result } });
    } else {
      res.status(404).json({ Erreur: "L'utilisateur n'existe pas" });
    }
  }
  return null;
};

const deleteOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);

  const result = await user.deleteOne(userId);
  if (result) {
    delete result.hashedPassword;
    res.status(200).json({ "Utilisateur supprimé :": { result } });
  } else {
    res.status(404).json({ Erreur: "L'utilisateur n'existe pas" });
  }
};

module.exports = {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
};
