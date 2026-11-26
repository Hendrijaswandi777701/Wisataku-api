-- CreateTable
CREATE TABLE `Reservasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaPemesan` VARCHAR(191) NOT NULL,
    `destinasiId` INTEGER NOT NULL,
    `jumlahOrang` INTEGER NOT NULL,
    `tanggal` DATETIME(3) NOT NULL,
    `totalHarga` DOUBLE NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
