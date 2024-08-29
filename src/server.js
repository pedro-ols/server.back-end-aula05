import express from "express"
import {config} from "dotenv"

config()

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())

const emocoes = [
    {
        id: 1,
        nome: "Nojinho",
        cor: "Verde"
    },
    {
        id: 2,
        nome: "Medo",
        cor: "Roxo"
    },
    {
        id: 3,
        nome: "Alegria",
        cor: "Amarelo"
    }
]

const personagens = [
    {
        id: 100,
        nome: "Woody",
        studio: "Disney/Pixar",
        vivo: true
    },
    {
        id: 101,
        nome: "Shrek",
        studio: "Dreamworks",
        vivo: true
    },
    {
        id: 102,
        nome: "Scooby",
        studio: "Hanna-Barbera",
        vivo: true
    },
]

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World!" })
})

app.get("/2tds2", (req, res) => {
    return res.status(200).send({ message: "Hello, World!" })
})

app.get("/emocoes", (req, res) => {
    return res.status(200).send( emocoes )
})

app.get("/personagens", (req, res) => {
    return res.status(200).send( personagens )
})

app.listen(serverPort, () => {
    console.log(`🐧 Server started on http://localhost:${serverPort}`)
})