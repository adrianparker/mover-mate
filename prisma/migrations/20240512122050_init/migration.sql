-- CreateTable
CREATE TABLE "Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT,
    "color" TEXT,
    "content" TEXT,
    "room" TEXT NOT NULL DEFAULT 'master',
    "fragil" TEXT,
    "hand" TEXT,
    "creatAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
