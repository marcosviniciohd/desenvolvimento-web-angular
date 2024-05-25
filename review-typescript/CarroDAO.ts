import Carro from "./Carro";
import { DaoInterface } from "./DAOInterface";

export class CarroDAO implements DaoInterface {

    nomeTabela: string = 'tb_carro';

    inserir(object: Carro): boolean {
        console.log('inserido com sucesso!');
        return true;
    }
    atualizar(object: Carro): boolean {
        console.log('atualizado com sucesso!');
        return true;
    }
    remover(id: number): Carro {
        console.log('Carro removido com sucesso!');
        return new Carro('', 0, 0);
    }
    selecionar(id: number): Carro {
        console.log('Carro atualizado com sucesso!');
        return new Carro('', 0, 0);
    }
    selecionarTodos(): [any] {
        console.log('Carros selecionados com sucesso!');
        return [new Array];
    }

}