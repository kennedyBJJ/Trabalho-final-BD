-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Developer" (
    "cod" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "level" TEXT DEFAULT 'Júnior'
);
INSERT INTO "new_Developer" ("cod", "level", "name") SELECT "cod", "level", "name" FROM "Developer";
DROP TABLE "Developer";
ALTER TABLE "new_Developer" RENAME TO "Developer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
