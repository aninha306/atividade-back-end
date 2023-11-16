import { animalsList } from "../models/animalsList.js";
import { Animais } from "../models/animals.js";

const listAnimais = new animalsList();

const isURL = (url) => {
    return url.match(/\.(jpeg|jpg|png|gif)$/) != null;
}

export const todosAnimais = (req, res) => {
    const animais = listAnimais.todosAnimais();
    if (animais.length) {
        return res.status(200).json(animais);
    }
    return res.status(200).json({ message: "Não há animais cadastrados" });
};

export const encontrarAnimalPorId = (req, res) => {
    const { id } = req.params;
    const animal = listAnimais.encontrarAnimalPorId(id);

    if (!animal) return res.status(400).send({ message: "Nenhum animal encontrado" })

    return res.send(animal);
};

export const criarAnimal = (req, res) => {
    const { nome, idade, tipo, cor, imagem, status } = req.body;

    if (nome.length < 3 || nome.length > 50) {
        return res.status(400).send({ message: "Nome inválido" })
    }
    if (tipo.length > 30) {
        return res.status(400).send({ message: "Tipo inválido" })
    }
    if (idade < 0 || !(Number.isInteger(idade))) {
        return res.status(400).send({ message: "Idade inválida" })
    }
    if (cor.length > 20) {
        return res.status(400).send({ message: "Cor inválida" })
    }
    /*if (typeof (status) != "boolean") {
        return res.status(400).send({ message: "Status inválida, use true ou false" })
    }*/
    if (!(isURL(imagem))) {
        return res.status(400).send({ message: "Imagem inválida" })
    }
    const animal = new Animais(nome, idade, tipo, cor, imagem, status);

    listAnimais.criarAnimal(animal);

    return res.status(201).send(animal);
};

export const editarAnimal = (req, res) => {
    const { id } = req.params;
    const { nome, idade, tipo, cor, imagem, status } = req.body;
    const animal = listAnimais.encontrarAnimalPorId(id);

    if (!animal) return res.status(404).send({ message: "Dados não encontrados" });

    listAnimais.editarAnimal(nome, idade, tipo, cor, imagem, status);

    return res.send(animal);
};

export const deletarAnimal = (req, res) => {
    const { id } = req.params;
    const animal = listAnimais.encontrarAnimalPorId(id);

    if (!animal) res.status(404).send({ message: "Animal não encontrado !" });

    listAnimais.deletarAnimal(id);

    return res.status(200).send(animal);
};