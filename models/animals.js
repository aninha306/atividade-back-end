import { v4 } from "uuid";

export class Animais {
    constructor(nome, idade, tipo, cor, imagem, status) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.cor = cor;
        this.imagem = imagem;
        this.status = status;
        this.id = this.gerarId();
    }
    gerarId(){
        return v4();
    }
}