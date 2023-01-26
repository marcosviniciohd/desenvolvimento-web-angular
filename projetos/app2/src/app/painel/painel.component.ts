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

  constructor(){
    console.log(this.frases);
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    //console.log(this.resposta);
  }

  public verificarResposta(): void {
    console.log('Verificar resposta: ' + this.resposta);
  }

}
