import { Router } from "express";
import rotasAnimals from "./animals.routes.js"

const animais = Router();

animais.use("/animais", rotasAnimals);

animais.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor Funcionando!" });
});

export default animais;