import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  /*Objeto recebendo seu Tipo, assim poderei usar no meu component restaurant usando um ngFor do que eu receber*/
  restaurants: Restaurant[];
  constructor() { }

  ngOnInit() {
    this.restaurants = [{
        id: "breadb-bakery",
        name: "Breadb & Bakery",
        category: "Bakery",
        deliveryEstimate: "25m",
        rating: 4.9,
        imagePath: 'assets/img/restaurants/breadbakery.png'
      },
      {
        id: "burger-house",
        name: "Burger House",
        category: "Hamburgers",
        deliveryEstimate: "100m",
        rating: 3.5,
        imagePath: 'assets/img/restaurants/burgerhouse.png'
      },
    ];
  }
}