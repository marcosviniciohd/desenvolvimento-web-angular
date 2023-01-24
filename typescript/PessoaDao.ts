import {DaoInterface} from "./DaoInterface";
import {Pessoa} from "./Pessoa";

export class PessoaDao implements DaoInterface{
    nomeTabela: string = 'tb_pessoa';

    atualizar(object: Pessoa): boolean {
        console.log('Logica de update no banco de dados');
        return true;
    }

    inserir(object: Pessoa): boolean {
        console.log('Logica de insert no banco de dados');
        return true;
    }

    remover(id: number): Pessoa {
        console.log('Logica de delete no banco de dados');
        return new Pessoa('', '');
    }

    selecionar(id: number): Pessoa {
        console.log('Lógica selecionar');
        return new Pessoa('', '');
    }

    selecionarTodos(): [Pessoa] {
        console.log('Logica getAll');
        return [new Pessoa('', '')];
    }

}