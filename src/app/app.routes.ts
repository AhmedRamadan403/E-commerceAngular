import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuardGuard } from './auth-guard.guard';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:ProductListComponent,canActivate:[authGuardGuard]},
    {path:'ProductDit/:id',component:ProductDetailsComponent},
    {path:'login',loadComponent:()=>import('./login/login.component').then(c=>c.LoginComponent)},
    {path:'**',component:NotfoundComponent}
];
