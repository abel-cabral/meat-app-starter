import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { RestarantsService } from './../../restaurants/restaurant/restaurants.service';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent implements OnInit {
  /*Posso passar o Observable, evento quer aguarda a finalizacao de algo, aqui ao inves de chama-lo no ngOnInit*/
  reviews: Observable<any>;

  constructor(
    /*Passamos a poder pegar o retorno das funcoes em service*/
    private RestarantsService: RestarantsService,
    /* Permite que capturemos dados das rotas e urls que estamos, basicamente tirando uma foto */
    private router: ActivatedRoute)
    {}

  ngOnInit() {
    /* Estou indo na rota acima e capturando o id que esta nela listado */
    this.reviews = this.RestarantsService.reviewsOfRestaurant(this.router.parent.snapshot.params['id']);
    }

}
