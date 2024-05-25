
import Veiculo from "./Veiculo";

export default class Carro extends Veiculo {
    private numeroDePortas: number;

    constructor(modelo: string, numeroDePortas: number, velocidade: number) {
        super();
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
        this.velocidade = velocidade;
    }
}