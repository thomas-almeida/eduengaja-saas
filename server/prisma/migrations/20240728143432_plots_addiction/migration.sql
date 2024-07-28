-- CreateTable
CREATE TABLE "Plots" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" REAL NOT NULL,
    "dueDate" DATETIME NOT NULL,
    "createdData" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "sendMethod" TEXT NOT NULL,
    "registrationId" INTEGER,
    CONSTRAINT "Plots_registrationId_fkey" FOREIGN KEY ("registrationId") REFERENCES "Registration" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
