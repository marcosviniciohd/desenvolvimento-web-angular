import { Component } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  public instrucao: string = 'Traduza a frase';
  public frases: Frase[] = FRASES;
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;

  constructor(){
    this.rodadaFrase = this.frases[this.rodada];
    console.log(this.rodadaFrase)
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {

    if(this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta');
      // Trocar pergunda da rodada.
      this.rodada++;
      console.log(this.rodada);
      // Atualiza o objeto rodadaFrase
      this.rodadaFrase = this.frases[this.rodada];
      console.log(this.rodadaFrase);
    } else {
      alert('A tradução está errada.')
    }



  }

}
