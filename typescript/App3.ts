import { Carro } from "./Carro";
import { Concessionaria } from "./Concessionaria";
import Moto from "./Moto";
import Veiculo from "./Veiculo";

let carro = new Carro('Veloster', 3);
carro.acelerar();

let moto = new Moto();
moto.acelerar();

let concessionaria = new Concessionaria(' ', []);

console.log(carro);
console.log(moto);
console.log(concessionaria.fornecerHorariosDeFuncionamento());
