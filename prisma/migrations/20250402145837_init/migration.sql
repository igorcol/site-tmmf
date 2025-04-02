/*
  Warnings:

  - You are about to drop the `Nominata` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Presenca` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cargo]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `cargo` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Cargo" AS ENUM ('mestre_conselheiro', 'primeiro_conselheiro', 'segundo_conselheiro', 'mestre_de_cerimonias', 'primeiro_diacono', 'segundo_diacono', 'primeiro_mordomo', 'segundo_mordomo', 'capelão', 'porta_bandeira', 'escrivão', 'sentinela', 'tesoureiro', 'orador', 'hospitaleiro', 'primeiro_preceptor', 'segundo_preceptor', 'terceiro_preceptor', 'quarto_preceptor', 'quinto_preceptor', 'sexto_preceptor', 'setimo_preceptor');

-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'SEMI';

-- DropForeignKey
ALTER TABLE "Nominata" DROP CONSTRAINT "Nominata_eventoId_fkey";

-- DropForeignKey
ALTER TABLE "Nominata" DROP CONSTRAINT "Nominata_membroId_fkey";

-- DropForeignKey
ALTER TABLE "Presenca" DROP CONSTRAINT "Presenca_eventoId_fkey";

-- DropForeignKey
ALTER TABLE "Presenca" DROP CONSTRAINT "Presenca_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "cargo",
ADD COLUMN     "cargo" "Cargo" NOT NULL;

-- DropTable
DROP TABLE "Nominata";

-- DropTable
DROP TABLE "Presenca";

-- DropEnum
DROP TYPE "PresencaStatus";

-- CreateTable
CREATE TABLE "NominataEvento" (
    "eventoId" TEXT NOT NULL,
    "cargo" "Cargo" NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventoToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EventoToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "NominataEvento_cargo_key" ON "NominataEvento"("cargo");

-- CreateIndex
CREATE INDEX "_EventoToUser_B_index" ON "_EventoToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_cargo_key" ON "User"("cargo");

-- AddForeignKey
ALTER TABLE "NominataEvento" ADD CONSTRAINT "NominataEvento_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NominataEvento" ADD CONSTRAINT "NominataEvento_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventoToUser" ADD CONSTRAINT "_EventoToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Evento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventoToUser" ADD CONSTRAINT "_EventoToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
