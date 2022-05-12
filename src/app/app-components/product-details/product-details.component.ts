import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private prodService: ProductsService, private route: ActivatedRoute) { }
  product: Product = {

  };

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById(): void{
    const id = String(this.route.snapshot.paramMap.get('id'));
     this.prodService.getProductById(id).subscribe(
      response => {
        this.product = response
      },
      err => {
        console.log(err);
      }
    );
  }
}
