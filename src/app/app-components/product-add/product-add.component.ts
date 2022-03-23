import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product:Product = {
    name: '',
    category: '',
    summary: '',
    description: '',
    price: 0,
    imageFile: ''
  }
  submitted: boolean = false;
  constructor(private productServ: ProductsService) { }

  ngOnInit(): void {
  }

  saveNewProduct(): void{
      this.productServ.addProduct(this.product).subscribe(
        response => {
          this.submitted = true;
        },
        error =>{
          console.log(error);
        }
      );
  }

  addNewProduct():void {
    this.submitted = false;
    this.product = {
      name: '',
      category: '',
      summary: '',
      description: '',
      price: 0,
      imageFile: ''
    }
  }
}
