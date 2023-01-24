import {DaoInterface} from "./DaoInterface";
import {Concessionaria} from "./Concessionaria";

export class ConcessionariaDao implements DaoInterface{
    nomeTabela: string = 'tb_concessionaria';

    atualizar(object: Concessionaria): boolean {
        console.log('Logica de update no banco de dados');
        return true;
    }

    inserir(object: Concessionaria): boolean {
        console.log('Logica de insert no banco de dados');
        return true;
    }

    remover(id: number): Concessionaria {
        console.log('Logica de delete no banco de dados');
        return new Concessionaria('', []);
    }

    selecionar(id: number): Concessionaria {
        console.log('Lógica selecionar');
        return new Concessionaria('', []);
    }

    selecionarTodos(): [Concessionaria] {
        console.log('Logica getAll');
        return [new Concessionaria('', [])];
    }

}