import api from './routes'
import express from 'express'
import cors from 'cors'

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())
app.use(api)

app.listen(port, () => {
    console.log('Edu Engaja Online ✅')
})