-- AlterTable
ALTER TABLE `Course` ADD COLUMN `duration` VARCHAR(191) NOT NULL DEFAULT 'No duration',
    ADD COLUMN `enrollmentStatus` VARCHAR(191) NOT NULL DEFAULT 'No enrollmentStatus',
    ADD COLUMN `location` VARCHAR(191) NOT NULL DEFAULT 'Online',
    ADD COLUMN `schedule` VARCHAR(191) NOT NULL DEFAULT 'No schedule';
