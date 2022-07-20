const {
  createOneEditor,
  getAllEditor,
  getOneEditor,
  updateOneEditor,
  deleteOneEditor,
} = require("../models/editor");

const createOne = async (req, res) => {
  try {
    const editorCreated = await createOneEditor(req.body);
    return res.status(201).send(editorCreated);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de création de l'éditeur" });
  }
};

const getAll = async (req, res) => {
  try {
    const editors = await getAllEditor();
    if (!editors) {
      return res.status(404).send(`There are no editors yet`);
    }
    return res.status(200).json(editors);
  } catch (e) {
    return res.status(500).json({ error: "Problème de lecture des éditeurs" });
  }
};

const getOne = async (req, res) => {
  const editorId = parseInt(req.params.editorId, 10);

  try {
    const editor = await getOneEditor(editorId);
    if (!editor) {
      res.status(404).send("Aucun editeur trouvé");
    } else {
      return res.status(201).send(editor);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture de l'éditeur" });
  }
  return null;
};

const updateOne = async (req, res) => {
  const editorId = parseInt(req.params.editorId, 10);

  try {
    const editorUpdated = await updateOneEditor(editorId, req.body);
    return res.status(201).send(editorUpdated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de modification de l'entrée éditeur" });
  }
};

const deleteOne = async (req, res) => {
  const editorId = parseInt(req.params.editorId, 10);

  try {
    await deleteOneEditor(editorId);
    return res.status(200).send("L'éditeur a été supprimé avec succès");
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de suppression de l'entrée éditeur" });
  }
};
module.exports = {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
};
