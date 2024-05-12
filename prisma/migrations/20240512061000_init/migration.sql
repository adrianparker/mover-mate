-- CreateTable
CREATE TABLE "Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" INTEGER NOT NULL,
    "color" TEXT,
    "content" TEXT,
    "room" TEXT NOT NULL DEFAULT 'master',
    "fragil" BOOLEAN NOT NULL DEFAULT true,
    "hand" BOOLEAN NOT NULL DEFAULT false
);
