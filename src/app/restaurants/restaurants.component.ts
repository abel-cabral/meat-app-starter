
import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestarantsService } from './restaurant/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  /*Objeto recebendo seu Tipo, assim poderei usar no meu component restaurant usando um ngFor do que eu receber*/
  restaurants: Restaurant[];
  /*Quero usar meu Service nesse component, assim inicializo ele no construtor e o angular se responsabiliza em entrega-lo pra mim*/
  constructor(private restaurantsService: RestarantsService) { }

  /*Funcáo nativa, melhor pra iniciar os componentes*/
  ngOnInit() {    
    /*Como a funcao retorna um Observable, faco um subscrible que ira executar uma funcao x sempre que um dado novo chegar*/
    this.restaurantsService.loadRestaurants().subscribe(response => this.restaurants = response);
   }
}