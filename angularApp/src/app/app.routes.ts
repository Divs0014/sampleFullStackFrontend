import { Routes } from '@angular/router';
import { HomeComponent } from './screen/home/home.component';
import { MenuComponent } from './screen/menu/menu.component';

export const routes: Routes = [
    {
        path:'home' ,component:HomeComponent
    },
    {
        path:'menu', component:MenuComponent
    }

];
