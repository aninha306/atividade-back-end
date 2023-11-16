export class animalsList{
    constructor(){
        this.animais = [];
    }
    todosAnimais(){
        return this.animais;
    }
    encontrarAnimalPorId(id){
        return this.animais.find((animais)=> animais.id == id);
    }
    criarAnimal(animal){
        this.animais.push(animal);
    }
    editarAnimal(id, nome, idade, tipo, cor, status, imagem, vacinado){
        const animal = this.encontrarAnimalPorId(id);

        if(!animal) {
            return null;
        }

        animal.nome = nome;
        animal.idade = idade;
        animal.tipo = tipo;
        animal.cor = cor;
        animal.status = status;
        animal.imagem = imagem;
        animal.vacinado = vacinado;

        return animal;
    }
    deletarAnimal(AnimalId){
        this.animais = this.animais.filter((Animal) => Animal.id == AnimalId);
    }
}
