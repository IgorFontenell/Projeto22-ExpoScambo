/*
  Warnings:

  - You are about to drop the column `categoryId` on the `posts` table. All the data in the column will be lost.
  - Added the required column `categoryName` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_categoryId_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "categoryId",
ADD COLUMN     "categoryName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "category"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
