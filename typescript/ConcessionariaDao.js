"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDao = void 0;
const Concessionaria_1 = require("./Concessionaria");
class ConcessionariaDao {
    constructor() {
        this.nomeTabela = 'tb_concessionaria';
    }
    atualizar(object) {
        console.log('Logica de update no banco de dados');
        return true;
    }
    inserir(object) {
        console.log('Logica de insert no banco de dados');
        return true;
    }
    remover(id) {
        console.log('Logica de delete no banco de dados');
        return new Concessionaria_1.Concessionaria('', []);
    }
    selecionar(id) {
        console.log('Lógica selecionar');
        return new Concessionaria_1.Concessionaria('', []);
    }
    selecionarTodos() {
        console.log('Logica getAll');
        return [new Concessionaria_1.Concessionaria('', [])];
    }
}
exports.ConcessionariaDao = ConcessionariaDao;
