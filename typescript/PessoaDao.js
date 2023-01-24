"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDao = void 0;
const Pessoa_1 = require("./Pessoa");
class PessoaDao {
    constructor() {
        this.nomeTabela = 'tb_pessoa';
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
        return new Pessoa_1.Pessoa('', '');
    }
    selecionar(id) {
        console.log('Lógica selecionar');
        return new Pessoa_1.Pessoa('', '');
    }
    selecionarTodos() {
        console.log('Logica getAll');
        return [new Pessoa_1.Pessoa('', '')];
    }
}
exports.PessoaDao = PessoaDao;
