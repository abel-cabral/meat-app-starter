import { RestarantsService } from './../restaurants/restaurant/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
/* Passa os parametros que foram passadas pra uma determinada URL  */
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;

  constructor(
    public RestarantsService: RestarantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    /* É como se no momento que a pagina carregou com x parametros o sistema tirasse uma foto e guardasse dos dados passados para ele */
    let snapshot = this.route.snapshot.params['id']; /* informo o parametro que passei junto com a rota */
    /*To inscrevendo minha funcao para escutar a resposta da funcao que to chamando, assim que houver retorno ela executa*/
    this.RestarantsService.restaurantById(snapshot)
      .subscribe(response => this.restaurant = response);
  }
}
