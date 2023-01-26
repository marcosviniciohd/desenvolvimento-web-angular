import { Component } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  public i: number = 0;

  public instrucao: string = 'Traduza a frase';
  public frases: Frase[] = FRASES;

  constructor(){
    console.log(this.frases);
  }

  public atualizaResposta(): void {
    console.log('Teste ' + this.i++);
  }

}
