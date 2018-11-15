import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';

export const ROUTES: Routes = [ 
    //Crio um array com minhas rotas
    //Em path coloco como vou chamar essa rota, ou seja um apelido
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },    
    { path: 'restaurant', component: RestaurantsComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    /* Quando queremos passar parametro por rota basta usar :nomeDoParametro */
    { path: 'restaurants/:id', component: RestaurantDetailComponent },

]