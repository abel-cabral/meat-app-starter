import { MenuItem } from './../menu-item/menu-item.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { RestarantsService } from './../../restaurants/restaurant/restaurants.service';


@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  menu: Observable<MenuItem[]>;

  constructor(
    /*Passamos a poder pegar o retorno das funcoes em service*/
    private RestarantsService: RestarantsService,
    /* Permite que capturemos dados das rotas e urls que estamos, basicamente tirando uma foto */
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.RestarantsService.menuOfRestaurant(this.router.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItem){
    console.log(item);
  }

}
