import { Router } from "express";

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

app.get("/personagens", (req, res) => {
    return res.status(200).send( personagens )
})