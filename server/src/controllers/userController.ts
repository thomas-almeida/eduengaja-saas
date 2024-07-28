import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function createUser(req: Request, res: Response) {
    const { name, password, unitId, roleId } = req.body

    const userNameAlreadyExist = await prisma.user.findFirst({
        where: { name }
    })

    if (userNameAlreadyExist) {
        return res.status(400).json({
            message: 'Este nome de usuário já esta em uso'
        })
    }

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

async function loginUser(req: Request, res: Response) {
    const { name, password } = req.body

    const user = await prisma.user.findFirst({
        where: { name }
    })

    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Usuário ou Senha Inválidos' })
    }

    res.json({
        message: 'success',
        userLogged: user.id
    })

}

export default {
    createUser,
    loginUser
}