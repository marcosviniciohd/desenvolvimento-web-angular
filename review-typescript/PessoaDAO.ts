import { DaoInterface } from './DAOInterface';
import Pessoa from './Pessoa';

export class PessoaDAO implements DaoInterface {
    nomeTabela: string = 'tb_pessoa';

    inserir(object: Pessoa): boolean {
        console.log('Lógica de insert');
        return true;
    }

    atualizar(object: Pessoa): boolean {
        console.log('Lógica update');
        return true;
    }

    remover(id: number): Pessoa {
        console.log('lógica delete');
        return new Pessoa('', '', '');
    }
    selecionar(id: number): Pessoa {
        console.log('lógica select');
        return new Pessoa('', '', '');
    }
    selecionarTodos(): [any] {
        console.log('lógica getAll');
        return [new Pessoa('', '', '')];
    }

}