"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = require("./Carro");
const Pessoa_1 = require("./Pessoa");
const Concessionaria_1 = require("./Concessionaria");
let carroA = new Carro_1.Carro('Dodge journey', 4);
let carroB = new Carro_1.Carro('Veloster', 3);
let carroC = new Carro_1.Carro('Cerato', 4);
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_1.Concessionaria('Av Paulista', listaDeCarros);
/** Exibir a lista de carros */
//console.log(concessionaria.mostrarListaDeCarros());
let cliente = new Pessoa_1.Pessoa('Marcos Vinício', 'Veloster');
//console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //compra o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerNome());
console.log(cliente.dizerCarroQueTem());
