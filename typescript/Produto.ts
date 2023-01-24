import { InterfaceProduto } from "./InterfaceProduto";

export class Produto implements InterfaceProduto{
    fornecerNomeProduto(): string {
        throw new Error("Method not implemented.");
    }
    private nome: string;
    private fabricante: string;
    private preco: number;

}