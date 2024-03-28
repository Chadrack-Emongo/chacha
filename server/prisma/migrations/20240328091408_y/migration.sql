/*
  Warnings:

  - You are about to drop the column `numero_telephone` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `numero_telephone` on the `Client` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "numero_telephone",
ADD COLUMN     "telephone" TEXT NOT NULL DEFAULT 'valeur_par_defaut';

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "numero_telephone",
ADD COLUMN     "telephone" TEXT NOT NULL DEFAULT 'valeur_par_defaut';
