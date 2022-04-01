import { RouterModule } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private productService: ProductsService,private route: ActivatedRoute) { }
  product: Product = {

  };
  ngOnInit() {
    this.setDateUp();
    
  }
  setDateUp(): void{
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id)
    .subscribe(
      response => {
        this.product = response
      },
      err => {
        console.log(err);
      }
    );
  }

  saveChanges(): void{
    this.productService.updateProduct(this.product)
    .subscribe(
      res =>{
        console.log("product updated successfully")
      },
      err => {
        console.log(err);
      }
    );
  }
}
