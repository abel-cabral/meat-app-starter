import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';

export const ROUTES: Routes = [ 
    //Crio um array com minhas rotas
    //Em path coloco como vou chamar essa rota, ou seja um apelido
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'restaurants/:id', component: RestaurantDetailComponent,
        //Regras de navegacao children, permitem passar sub-rotas
        children: [
            //Quando acessado pela primeira vez o caminho será restaurants
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent },
        ]},
    { path: 'about', component: AboutComponent }]