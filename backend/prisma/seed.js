const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createManyEditors = async () => {
  try {
    return await prisma.editors.createMany({
      data: [
        { name: "Philibert" },
        { name: "Playin" },
        { name: "Palais de Midgard" },
        { name: "Fnac" },
        { name: "Mille & un jeux" },
        { name: "Cultura" },
        { name: "Esprit Jeu" },
        { name: "Agorajeux" },
        { name: "Le Passe Temps" },
        { name: "Ludum" },
        { name: "Okkazeo" },
      ],
      skipDuplicates: true,
    });
  } finally {
    await prisma.$disconnect();
  }
};

createManyEditors();
