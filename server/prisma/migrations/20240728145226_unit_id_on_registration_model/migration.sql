/*
  Warnings:

  - You are about to drop the `_RegistrationToUnit` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `unitId` to the `Registration` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_RegistrationToUnit_B_index";

-- DropIndex
DROP INDEX "_RegistrationToUnit_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_RegistrationToUnit";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Registration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "studentId" INTEGER,
    "guardianId" INTEGER,
    "address" TEXT NOT NULL,
    "phone1" TEXT NOT NULL,
    "phone2" TEXT NOT NULL,
    "detailId" INTEGER,
    "unitId" INTEGER NOT NULL,
    CONSTRAINT "Registration_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Registration_guardianId_fkey" FOREIGN KEY ("guardianId") REFERENCES "Guardian" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Registration_detailId_fkey" FOREIGN KEY ("detailId") REFERENCES "Detail" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Registration_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Registration" ("address", "detailId", "guardianId", "id", "phone1", "phone2", "studentId") SELECT "address", "detailId", "guardianId", "id", "phone1", "phone2", "studentId" FROM "Registration";
DROP TABLE "Registration";
ALTER TABLE "new_Registration" RENAME TO "Registration";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
