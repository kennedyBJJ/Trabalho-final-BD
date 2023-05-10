-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Issue" (
    "number" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name_issue" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "start" DATETIME NOT NULL,
    "conclusion" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'a fazer',
    "id_sprint" INTEGER NOT NULL,
    CONSTRAINT "Issue_id_sprint_fkey" FOREIGN KEY ("id_sprint") REFERENCES "Sprint" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Issue" ("conclusion", "id_sprint", "name_issue", "number", "priority", "start", "status") SELECT "conclusion", "id_sprint", "name_issue", "number", "priority", "start", "status" FROM "Issue";
DROP TABLE "Issue";
ALTER TABLE "new_Issue" RENAME TO "Issue";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
