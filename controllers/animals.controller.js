import { animalsList } from "../models/animalsList.js";
import { Animais } from "../models/animals.js";

const listAnimais = new animalsList();

function validarURL(url){
    const validar = /\.(jpeg, jpg, png, gif)$/i;
    return validar.test(url);
}
if(validarURL(validar)){
    return(imagem);
} else{
}

export const todosAnimais = (req, res) => {
    const Animais = listAnimais.todosAnimais();

    if (!Animais.length) {
        return res.status(404).send({
            message: "Nenhum animal encontrado",
            status: "Not Found"
        })
    }
    return res.status(200).send({ message: "Todos animais via controller", status: "ok", data: Animais });
};

export const encontrarAnimalPorId = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Animal com ID ${id}`, origem: "Controller" });
};

export const criarAnimal = (req, res) => {
    const { nome, idade, tipo, cor, status, imagem, vacinado } = req.body;

    if (!nome || !idade || !tipo || !cor || !status || !imagem || !vacinado) {
        return res.status(400).send({ message: "Dados Inválidos", origem: "Controller" });
    }

    return res.status(201).send({ message: "Rota POST informações animais", origem: "Controller" });
};

export const editarAnimal = (req, res) => {
    const { id } = req.params;
    const { nome, idade, tipo, cor, status, imagem, vacinado } = req.body;

    if (!nome || !idade || !tipo || !cor || !status || !imagem || !vacinado) {
        return res.status(400).send({ message: "Dados Inválidos" });
    }

    return res.status(200).send({ message: `Rota PUT animal com ID ${id}`, origem: "Controller" });
};

export const deletarAnimal = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Rota DELETE animal com id ${id} foi deletado`, origem: "Controller" });
};