/*
  Warnings:

  - You are about to drop the column `editorsId` on the `game_editors` table. All the data in the column will be lost.
  - Added the required column `editorId` to the `game_editors` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `game_editors` DROP FOREIGN KEY `game_editors_editorsId_fkey`;

-- AlterTable
ALTER TABLE `game_editors` DROP COLUMN `editorsId`,
    ADD COLUMN `editorId` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `game_editors_editorsId_fkey` ON `game_editors`(`editorId`);

-- AddForeignKey
ALTER TABLE `game_editors` ADD CONSTRAINT `game_editors_editorId_fkey` FOREIGN KEY (`editorId`) REFERENCES `editors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
