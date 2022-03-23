import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Search } from '../models/product.model';

const baseUrl = "http://localhost:8000/api/v1/Catalog";

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    
    constructor(private http: HttpClient){}

    getAllProducts(params: Search): Observable<any>{
        if(params.name !== ''){
            return this.http.get<any>(baseUrl + "/GetProductByName/" + params.name);
        }
        // if(params.category !== ''){
        //     return this.http.get<any>(baseUrl + "/GetProductByCategory/" + params.category);
        // }
        return this.http.get<any>(baseUrl);
    }

    addProduct(data: any): Observable<any>{
        return this.http.post(baseUrl, data);
    }
}
