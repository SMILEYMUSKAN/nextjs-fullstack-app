-- AlterTable
ALTER TABLE `Course` ADD COLUMN `description` VARCHAR(191) NOT NULL DEFAULT 'No Description',
    ADD COLUMN `instructor` VARCHAR(191) NOT NULL DEFAULT 'No Name';
