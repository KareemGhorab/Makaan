/*
  Warnings:

  - You are about to drop the column `type` on the `Property` table. All the data in the column will be lost.
  - Added the required column `propertyTypeId` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "type",
ADD COLUMN     "propertyTypeId" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "PropertyType";

-- CreateTable
CREATE TABLE "PropertyType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PropertyType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_propertyTypeId_fkey" FOREIGN KEY ("propertyTypeId") REFERENCES "PropertyType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
