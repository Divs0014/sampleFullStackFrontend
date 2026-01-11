import { Routes } from '@angular/router';
import { HomeComponent } from './screen/home/home.component';
import { MenuComponent } from './screen/menu/menu.component';
import { ProductComponent } from './screen/product/product.component';
import { LoginComponent } from './screen/login/login.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
     {
        path:'',
        component:LoginComponent,
        data:{
            hideheader:true,
        }
       
    },
    {
        path:'home' ,component:HomeComponent,
         canActivate:[authGuard]
    },
    {
        path:'menu', component:MenuComponent,
         canActivate:[authGuard]
    },
    {
        path:'product', component:ProductComponent,
         canActivate:[authGuard]
    },
   

];
