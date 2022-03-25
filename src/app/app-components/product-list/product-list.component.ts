import { Component, NgModule, OnInit } from '@angular/core';
import { Product, Search } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private prodService: ProductsService) { }
  products: Product[] = []; 
  currentIndex = -1;
  search: Search = {
    name: '',
    page: 1,
    category: ''
  };
  
  count = 0;
  pageSize = 3;
  ngOnInit(): void {
    this.retriveProducts();
  }

  getRequestParams(search: Search): any {
    let params: any = {};

    if (search.name) {
      params[`name`] = search.name;
    }
    
    if (search.category) {
      params[`category`] = search.category;
    }

    if (search.page) {
      params[`page`] = search.page - 1;
    }

    return search;
  }

  retriveProducts():void {
    const params = this.getRequestParams(this.search);
    this.prodService.getAllProducts(params).subscribe(
      response => {
        this.products = response;
      },
      error => {
        console.log(error);
      });
  }

  // handlePageSizeChange(event: any): void {
  //   this.pageSize = event.target.value;
  //   this.search.page = 1;
  //   this.retriveProducts();
  // }
  handlePageChange(event: number): void {
    this.search.page = event;
    this.retriveProducts();
  }

  searchName(): void {
    this.search.page = 1;
    this.retriveProducts();
  }
  clearSearch(): void{
    this.search = {
      name: '',
      page: 1,
      category: ''
    };
  }

  confirmDelete(id: string): void{
    if(confirm("Are you sure to delete ")) {
      this.prodService.deleteProduct(id).subscribe(
        response => {
          this.retriveProducts();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}
