import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function createRegistration(req: Request, res: Response) {

  const { student, guardian, plots, address, phone1, phone2, unitId } = req.body

  try {
    const studentData = await prisma.student.upsert({
      where: { cpf: student?.cpf },
      update: student,
      create: student
    })

    const guardianData = await prisma.guardian.upsert({
      where: { cpf: guardian?.cpf },
      update: guardian,
      create: guardian
    })

    const registration = await prisma.registration.create({
      data: {
        studentId: studentData?.id,
        guardianId: guardianData?.id,
        plots,
        address,
        phone1,
        phone2,
        unitId
      }
    })

    res.json({
      message: 'success',
      registration: registration.id
    })

  } catch (error) {
    res.status(500).json({
      message: 'internal server error'
    })
  }

}

export default {
  createRegistration
}