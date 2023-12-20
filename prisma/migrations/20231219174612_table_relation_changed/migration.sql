/*
  Warnings:

  - You are about to drop the column `courseId` on the `Lessons` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Course` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Lessons` DROP FOREIGN KEY `Lessons_courseId_fkey`;

-- AlterTable
ALTER TABLE `Course` MODIFY `name` VARCHAR(191) NOT NULL DEFAULT 'No Name';

-- AlterTable
ALTER TABLE `Lessons` DROP COLUMN `courseId`,
    ADD COLUMN `courseName` VARCHAR(191) NOT NULL DEFAULT 'No Name Provided';

-- CreateIndex
CREATE UNIQUE INDEX `Course_name_key` ON `Course`(`name`);

-- AddForeignKey
ALTER TABLE `Lessons` ADD CONSTRAINT `Lessons_courseName_fkey` FOREIGN KEY (`courseName`) REFERENCES `Course`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
