import { Router } from "express";
import { todosAnimais, encontrarAnimalPorId, criarAnimal, editarAnimal, deletarAnimal } from "../controllers/animals.controller.js";

const rotasAnimals = Router();

rotasAnimals.get("/", todosAnimais);

rotasAnimals.get("/:id", encontrarAnimalPorId);

rotasAnimals.post("/", criarAnimal);

rotasAnimals.put("/:id", editarAnimal);

rotasAnimals.delete("/:id", deletarAnimal);


export default rotasAnimals;