class CarroAntigo {
    private modelo: string;
    private fabricante: string;
    private numeroDePortas: number;
    private cor: string;
    private velocidade: number;

    constructor(modelo: string, fabricante: string, numeroDePortas: number, cor: string, velocidade: number) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroDePortas = numeroDePortas;
        this.cor = cor;
        this.velocidade = velocidade;
    }

    public getModelo(): string {
        return this.modelo;
    }
    
    public getVelocidade(): number {
        return this.velocidade;
    }

}

let opala = new CarroAntigo('Opala', 'Chevrolet', 4, 'Preto', 180);
console.log(opala);
console.log('O modelo do carro é ' + opala.getModelo());