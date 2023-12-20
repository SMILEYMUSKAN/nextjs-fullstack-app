/*
  Warnings:

  - You are about to drop the column `courseName` on the `Lessons` table. All the data in the column will be lost.
  - Added the required column `courseId` to the `Lessons` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Lessons` DROP FOREIGN KEY `Lessons_courseName_fkey`;

-- DropIndex
DROP INDEX `Course_name_key` ON `Course`;

-- AlterTable
ALTER TABLE `Course` ALTER COLUMN `name` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Lessons` DROP COLUMN `courseName`,
    ADD COLUMN `courseId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Lessons` ADD CONSTRAINT `Lessons_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
