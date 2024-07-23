import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function createUnit(req: Request, res: Response) {
    const { name, address, phone1, phone2 } = req.body
    const unit = await prisma.unit.create({
        data: {
            name,
            address,
            phone1,
            phone2
        }
    })

    res.json(unit)
}

export default {
    createUnit
}