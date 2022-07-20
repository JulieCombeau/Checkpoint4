const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneEditor = async (editor) => {
  try {
    return await prisma.editors.create({
      data: { ...editor },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllEditor = async () => {
  try {
    return await prisma.editors.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

const getOneEditor = async (id) => {
  try {
    return await prisma.editors.findFirst({
      where: { id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneEditor = async (id, data) => {
  try {
    const diploma = await prisma.editors.update({
      where: { id },
      data: { ...data },
    });
    return diploma;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneEditor = async (id) => {
  try {
    return await prisma.editors.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllEditor,
  getOneEditor,
  createOneEditor,
  updateOneEditor,
  deleteOneEditor,
};
