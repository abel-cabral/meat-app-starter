import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {
  /*Injetamos nosso serviço */
  constructor(private ShoppingCartService: ShoppingCartService) { }

  ngOnInit() {
   
  }
  /*Criamos métodos para expor nossos elementos dp service */
  items(): any {
    return this.ShoppingCartService.items;
  }

  total(): number {
    return this.ShoppingCartService.total();
  }
}
