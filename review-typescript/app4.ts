import { ConcessionariaDAO } from "./ConcessionariaDAO";
import Concessionaria from './Concessionaria';
import { PessoaDAO } from "./PessoaDAO";
import Pessoa from "./Pessoa";
import { CarroDAO } from "./CarroDAO";
import Carro from "./Carro";

let dao: ConcessionariaDAO = new ConcessionariaDAO();
let concessionaria = new Concessionaria('', []);

dao.inserir(concessionaria);

let dao2: PessoaDAO = new PessoaDAO();
let pessoa: Pessoa = new Pessoa('', '', '');

dao2.atualizar(pessoa);


let dao3: CarroDAO = new CarroDAO();
let carro: Carro = new Carro('', 0, 0);

dao3.atualizar(carro);