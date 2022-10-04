-- CreateTable
CREATE TABLE "scoreHistory" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "evaluatorId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "scoreHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "scoreHistory" ADD CONSTRAINT "scoreHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scoreHistory" ADD CONSTRAINT "scoreHistory_evaluatorId_fkey" FOREIGN KEY ("evaluatorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
