import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/model/frase.model';
import { FRASES } from '../shared/mock/frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase: ';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase = new Frase('', '');

  public progresso: number = 0;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
    console.log(this.rodadaFrase);
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value);
    //console.log(this.resposta);
  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta');
      // trocar pergunta da rodada
      this.rodada++;

      // progresso
      this.progresso = this.progresso + (100 / this.frases.length);
      console.log(this.progresso);

      // atualiza o objeto rodadaFrase
      this.rodadaFrase = this.frases[this.rodada];
    } else {
      alert('A tradução está errada');
    }

  }

}
