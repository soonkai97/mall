import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AccountComponent } from './account/account.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminComponent } from './admin/admin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './products/cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: MainComponent },
 { path: 'user', component: UserComponent },
 { path: 'products', component: ProductsComponent,
  children: [
       { path: 'cart', component: CartComponent }     ]
 },
 { path: 'admin', component: AdminComponent,
  children: [
       { path: 'products', component: AdminProductsComponent },
       { path: 'users', component: AdminUsersComponent }
     ]
 },
 { path: 'contactus', component: ContactusComponent },
 { path: 'account', component: AccountComponent },
 { path: 'aboutus', component: AboutusComponent },
 { path: 'profile', component: ProfileComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
