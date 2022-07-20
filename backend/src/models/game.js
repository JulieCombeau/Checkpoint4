const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneGame = async (game) => {
  try {
    return await prisma.game.create({
      data: { ...game },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllGame = async () => {
  try {
    return await prisma.game.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

const getOneGame = async (id) => {
  try {
    return await prisma.game.findFirst({
      where: { id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneGame = async (id, data) => {
  try {
    const game = await prisma.game.update({
      where: { id },
      data: { ...data },
    });
    return game;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneGame = async (id) => {
  try {
    return await prisma.game.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllGame,
  getOneGame,
  createOneGame,
  updateOneGame,
  deleteOneGame,
};
