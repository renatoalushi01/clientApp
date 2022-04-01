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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
