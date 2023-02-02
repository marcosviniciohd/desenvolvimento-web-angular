import { Component } from '@angular/core';
import { OfertasService } from '../ofertas.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent {

  constructor(private ofertasService: OfertasService){

  }

  ngOnInit() {
      console.log(this.ofertasService.getOfertas());
  }

}
