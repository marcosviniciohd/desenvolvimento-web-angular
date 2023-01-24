import { Carro } from './Carro';
import { Pessoa } from './Pessoa';
import { Concessionaria } from './Concessionaria';

let carroA = new Carro('Dodge journey', 4);
let carroB = new Carro('Veloster', 3);
let carroC = new Carro('Cerato', 4);

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros);

/** Exibir a lista de carros */
//console.log(concessionaria.mostrarListaDeCarros());
let cliente = new Pessoa('Marcos Vinício', 'Veloster');
//console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        //compra o carro
        cliente.comprarCarro(carro);
    }
})
console.log(cliente.dizerNome());
console.log(cliente.dizerCarroQueTem());
 
