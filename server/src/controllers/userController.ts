import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function createUser(req: Request, res: Response) {
    const { name, password, unitId, roleId } = req.body

    const user = await prisma.user.create({
        data: {
            name,
            password,
            unitId,
            roleId
        }
    })

    res.json(user)
}

export default {
    createUser
}