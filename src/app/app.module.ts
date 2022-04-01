import { ProductEditComponent } from './app-components/product-edit/product-edit.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductListComponent } from './app-components/product-list/product-list.component';
import { ProductDetailsComponent } from './app-components/product-details/product-details.component';
import { ProductAddComponent } from './app-components/product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddHeaderinterceptor } from './services/add-header.interceptor';
import { LogResponseInterceptor } from './services/log-response.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductAddComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AddHeaderinterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LogResponseInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }