import { Component } from '@angular/core';

import { OfertasService } from '../ofertas.services';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent {

  public ofertas: Oferta[] | undefined

  constructor(private ofertasService: OfertasService){}

  ngOnInit() {
      this.ofertas = this.ofertasService.getOfertas();
      console.log(this.ofertas);
      
  }

}
