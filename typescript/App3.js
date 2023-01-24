"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = require("./Carro");
const Concessionaria_1 = require("./Concessionaria");
const Moto_1 = __importDefault(require("./Moto"));
let carro = new Carro_1.Carro('Veloster', 3);
carro.acelerar();
let moto = new Moto_1.default();
moto.acelerar();
let concessionaria = new Concessionaria_1.Concessionaria(' ', []);
console.log(carro);
console.log(moto);
console.log(concessionaria.fornecerHorariosDeFuncionamento());
