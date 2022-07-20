const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllByGame = async (gameId) => {
  try {
    return await prisma.game_editors.findMany({
      where: { gameId },
      include: {
        fk_game_id: true,
        fk_editors_id: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneEditorByGameId = async (gameId, editorId) => {
  try {
    return await prisma.game_editors.findMany({
      where: { gameId, editorId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const createOneByGame = async (data) => {
  try {
    return await prisma.game_editors.create({
      data,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneByGame = async (id) => {
  try {
    return await prisma.game_editors.delete({
      where: { id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllByGame,
  createOneByGame,
  deleteOneByGame,
  getOneEditorByGameId,
};
