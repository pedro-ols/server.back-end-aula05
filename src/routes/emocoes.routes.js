import { Router } from "express"

const emocoesRoutes = Router()

let emocoes = [
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

emocoesRoutes.get("/", (req, res) => {
    return res.status(200).send(emocoes);
});

emocoesRoutes.post("/", (req, res) => {
    const { nome, cor } = req.body;

    const novaEmocao = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor,
    };
    emocoes.push(novaEmocao);

    return res.status(200).send(emocoes);
})

export default emocoesRoutes