import {ConcessionariaDao} from "./ConcessionariaDao";
import {Concessionaria} from "./Concessionaria";
import {PessoaDao} from "./PessoaDao";
import {Pessoa} from "./Pessoa";

let concessionariaDao = new ConcessionariaDao();
let concessionaria = new Concessionaria('', []);

concessionariaDao.inserir(concessionaria);

let pessoDao = new PessoaDao();
let pessoa = new Pessoa('Marcos', 'Punto');

pessoDao.atualizar(pessoa);