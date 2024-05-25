import Carro from './Carro';
import Pessoa from './Pessoa';
import Concessionaria from './Concessionaria';

/** --- criar carros --- */
let carroA = new Carro('Dodge Journey', 4, 0);
let carroB = new Carro('Veloster', 3, 0);
let carroC = new Carro('Cerato', 4, 0);

/** Montar a lista de carros da concessinaria */
let listaDeCarros: Carro[] = [carroA, carroB, carroC];
let concessionaria = new Concessionaria('Av.: Paulista', listaDeCarros);
console.log('Lista de carros: ', concessionaria.mostrarListaDeCarros());

/** Exibir a lista de carros */
// console.log(concessionaria.mostrarListaDeCarros());

/** Comprar um carro */
let cliente = new Pessoa('Marcos Vinício', 'BMW', 'Punto');

