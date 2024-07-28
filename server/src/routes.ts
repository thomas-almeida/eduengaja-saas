import { Router } from "express"
import { Request, Response } from "express"
import userController from "./controllers/userController"
import unitController from "./controllers/unitController"
import registrationController from "./controllers/registrationController"

const api = Router()

api.get('/hello', (req: Request, res: Response) => {
    res.send('Hello World')
})

// create
api.post('/create-user', userController.createUser)
api.post('/create-unit', unitController.createUnit)
api.post('/create-registration', registrationController.createRegistration)

// login
api.post('/user/sign-in', userController.loginUser)

export default api