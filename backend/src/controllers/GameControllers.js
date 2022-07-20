const {
  createOneGame,
  getAllGame,
  getOneGame,
  updateOneGame,
  deleteOneGame,
} = require("../models/game");

const { validateGame } = require("../utils/validate");

const createOne = async (req, res) => {
  const error = validateGame(req.body, true);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }
  try {
    const gameCreated = await createOneGame(req.body);
    return res.status(201).send(gameCreated);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de création du jeu" });
  }
};

const getAll = async (req, res) => {
  try {
    const games = await getAllGame();
    if (!games) {
      return res.status(404).send(`Il n'y a encore aucun jeu`);
    }
    return res.status(200).json(games);
  } catch (e) {
    return res.status(500).json({ error: "Problème de lecture des jeux" });
  }
};

const getOne = async (req, res) => {
  const gameId = parseInt(req.params.gameId, 10);

  try {
    const game = await getOneGame(gameId);
    if (!game) {
      res.status(404).send("Aucun jeu trouvé");
    } else {
      return res.status(201).send(game);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture du jeu" });
  }
  return null;
};

const updateOne = async (req, res) => {
  const gameId = parseInt(req.params.gameId, 10);

  try {
    const gameUpdated = await updateOneGame(gameId, req.body);
    return res.status(201).send(gameUpdated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de modification de l'entrée jeu" });
  }
};

const deleteOne = async (req, res) => {
  const gameId = parseInt(req.params.gameId, 10);

  try {
    await deleteOneGame(gameId);
    return res.status(200).send("Le jeu a été supprimée avec succès");
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de suppression de l'entrée jeu" });
  }
};
module.exports = {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
};
