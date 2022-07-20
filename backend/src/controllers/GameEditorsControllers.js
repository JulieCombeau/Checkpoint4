const {
  getAllByGame,
  createOneByGame,
  deleteOneByGame,
  getOneEditorByGameId,
} = require("../models/GameEditors");

const getAll = async (req, res) => {
  const gameId = parseInt(req.params.gameId, 10);
  try {
    const editorsList = await getAllByGame(gameId);
    if (editorsList.length === 0) {
      return res.status(404).send("Aucune réponses trouvé");
    }
    return res.status(200).json(editorsList);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const getOneByGameId = async (req, res) => {
  const gameId = parseInt(req.params.gameId, 10);
  const editorId = parseInt(req.params.editorId, 10);

  try {
    const editor = await getOneEditorByGameId(gameId, editorId);
    if (editor.length === 0) {
      res.status(404).send("Il n'y a pas encore d'éditeur");
    } else {
      return res.status(201).send(editor);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture de l'éditeur" });
  }
  return null;
};

const createOne = async (req, res) => {
  const gameId = parseInt(req.params.gameId, 10);
  const editorId = parseInt(req.params.editorId, 10);
  try {
    const editorCreated = await createOneByGame({
      gameId,
      editorId,
    });
    return res.status(201).json({ editorCreated });
  } catch (e) {
    console.warn(e);
    return res.status(500).json(e);
  }
};

const deleteOne = async (req, res) => {
  const gameId = parseInt(req.params.gameId, 10);
  const editorId = parseInt(req.params.editorId, 10);
  const editorCheck = await getOneEditorByGameId(gameId, editorId);
  if (!editorCheck) {
    return res.status(404).json({ Erreur: "Aucune réponse trouvée" });
  }
  try {
    await deleteOneByGame(parseInt(editorCheck[0].id, 10));
    return res.status(200).json({ Succès: `Editeur supprimé avec succès ` });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

module.exports = {
  getAll,
  createOne,
  deleteOne,
  getOneByGameId,
};
