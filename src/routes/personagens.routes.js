import { Router } from "express";

const personagensRoutes = Router()

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

personagensRoutes.get("/", (req, res) => {
    return res.status(200).send(personagens);
});

personagensRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    const personagem = personagens.find((character) => character.id == id);
    if (!personagem) {
        return res.status(404).send({
            message: "Personagem não encontrado",
        });
    };
    return res.status(200).send({
        message: "Personagem encontrado!", personagem,
    });
});

personagensRoutes.post("/", (req, res) => {
    const { nome, studio, vivo } = req.body;

    const novoPersonagem = {
        id: personagens.length + 1,
        nome: nome,
        studio: studio,
        vivo: vivo,
    };
    personagens.push(novoPersonagem);
    return res.status(201).send(personagens);

})
personagensRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const personagem = personagens.find((character) => character.id == id);
    if (!personagem) {
        return res.status(404).send({
            message: "Personagem não encontrado",
        });
    };
    const { nome, studio, vivo } = req.body;
    personagem.nome = nome;
    personagem.studio = studio;
    personagem.vivo = vivo;

    return res.status(200).send({
        message: "Personagem atualizado!", personagem,
    });
});

export default personagensRoutes;