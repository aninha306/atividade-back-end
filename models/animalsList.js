export class animalsList{
    constructor(){
        this.animais = [];
    }
    getAllAnimals(){
        return this.animais;
    }
    getAnimalById(id){
        return this.animais.find((animais)=> animais.id == id);
    }
    createAnimals(animal){
        this.cursos.push(animal);
    }
    updateAnimal(id, nome, idade, tipo, cor, status, imagem){
        const animal = this.getAnimalById(id);

        if(!animal) {
            return null;
        }

        animal.nome = nome;
        animal.idade = idade;
        animal.tipo = tipo;
        animal.cor = cor;
        animal.status = status;
        animal.imagem = imagem;

        return animal;
    }
    removeAnimal(AnimalId){
        this.animais = this.animais.filter((Animal) => Animal.id == AnimalId);
    }
}
