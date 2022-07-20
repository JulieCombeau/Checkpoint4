const express = require("express");

const UserController = require("./controllers/UserController");
const AuthController = require("./controllers/AuthController");

const auth = require("./middlewares/auth");

const router = express.Router();

// Routes for Users

router.post("/users", UserController.createOne);
router.get("/users", UserController.getAll);
router.get("/users/:userId", UserController.getOne);
router.put("/users/:userId", UserController.updateOne);
router.delete("/users/:userId", UserController.deleteOne);

// Routes for Authentification

router.post("/auth/login", AuthController.login);
router.get("/auth/logout", auth, AuthController.logout);

module.exports = router;
