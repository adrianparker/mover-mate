-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT,
    "color" TEXT,
    "content" TEXT,
    "room" TEXT NOT NULL DEFAULT 'master',
    "fragil" TEXT,
    "hand" TEXT
);
INSERT INTO "new_Item" ("color", "content", "fragil", "hand", "id", "number", "room") SELECT "color", "content", "fragil", "hand", "id", "number", "room" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
