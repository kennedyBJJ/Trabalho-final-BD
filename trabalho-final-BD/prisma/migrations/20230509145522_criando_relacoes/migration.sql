-- CreateTable
CREATE TABLE "Sprint" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "start" DATETIME NOT NULL,
    "prev_conclusion" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Issue" (
    "number" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name_issue" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "start" DATETIME NOT NULL,
    "conclusion" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'a fazer',
    "id_sprint" INTEGER NOT NULL,
    CONSTRAINT "Issue_id_sprint_fkey" FOREIGN KEY ("id_sprint") REFERENCES "Sprint" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Developer" (
    "cod" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "level" TEXT NOT NULL DEFAULT 'Júnior'
);

-- CreateTable
CREATE TABLE "WorkAt" (
    "cod_dev" INTEGER NOT NULL,
    "number_issue" INTEGER NOT NULL,

    PRIMARY KEY ("cod_dev", "number_issue"),
    CONSTRAINT "WorkAt_cod_dev_fkey" FOREIGN KEY ("cod_dev") REFERENCES "Developer" ("cod") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WorkAt_number_issue_fkey" FOREIGN KEY ("number_issue") REFERENCES "Issue" ("number") ON DELETE RESTRICT ON UPDATE CASCADE
);
