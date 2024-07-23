import { Router } from "express"
import { Request, Response } from "express"
import userController from "./controllers/userController"
import unitController from "./controllers/unitController"

const api = Router()

api.get('/hello', (req: Request, res: Response) => {
    res.send('Hello World')
})

// creating
api.post('/create-user', userController.createUser)
api.post('/create-unit', unitController.createUnit)

export default api