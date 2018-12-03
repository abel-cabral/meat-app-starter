import { MenuItem } from './../../restaurant-detail/menu-item/menu-item.model';
import { ErrorHandler } from './../../app.error-handler';
import { Restaurant } from './restaurant.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MEAT_API } from './../../app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*Marcamos com esse decorator, quando pretentemos usar um servico via injecao de dependencia*/
@Injectable()
export class RestarantsService {
  url: string = MEAT_API;

  constructor(private http: Http) {}

  /*Informo que espero nao so receber um tipo restaurante, mas sim um Observable contendo o Tipo Restaurant*/
  loadRestaurants(): Observable < Restaurant[] > {
    /*Precisamos mapear a resposta ou seja, filtrar nos resultados o que é importante pra nós*/
    return this.http.get(this.url + '/restaurants')
      .map(response => response.json())
      /* Em caso de arreo chama minha classe de error rodando a mensagem de error */
      .catch(ErrorHandler.handlerError);
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get(this.url + '/restaurants/' + id)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);
  }

  /*Pega os reviews do restaurante*/
  reviewsOfRestaurant(id: string): Observable<any>{   
    return this.http.get(this.url + '/restaurants/' + id + '/reviews')
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]>{
    return this.http.get(this.url + '/restaurants/' + id + '/menu')
    .map(response => response.json())
    .catch(ErrorHandler.handlerError);
  }
}
