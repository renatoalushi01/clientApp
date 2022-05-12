import { ProductDetailsComponent } from './app-components/product-details/product-details.component';
import { ProductEditComponent } from './app-components/product-edit/product-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './app-components/product-add/product-add.component';
import { ProductListComponent } from './app-components/product-list/product-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'home'},
  {path: 'product-list',component: ProductListComponent},
  {path: 'product-add',component: ProductAddComponent},
  {path: 'product-edit/:id',component: ProductEditComponent},
  {path: 'product-details/:id',component: ProductDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
