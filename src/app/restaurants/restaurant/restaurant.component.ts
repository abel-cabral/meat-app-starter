import { Restaurant } from './restaurant.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  /*Porque ele espera receber entrada via DOM, assim se eu passar um obj com o nome restaurant do tipo Restaurant ele irá aceitar*/
  @Input() domRestaurant: Restaurant;
  constructor() { }

  ngOnInit() {
  }

}
