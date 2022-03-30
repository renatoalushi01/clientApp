import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Search } from '../models/product.model';

const baseUrl = "http://localhost:8000/api/v1/Catalog/";

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    
    constructor(private http: HttpClient){}

    getAllProducts(params: Search): Observable<any>{
        if(params){
            if(params.name !== '' && params.category == ''){
                return this.http.get<any>(baseUrl + "GetProductByName/" + params.name);
            }
            else if(params.category !== '' && params.name == ''){
                return this.http.get<any>(baseUrl + "GetProductByCategory/" + params.category);
            }
        }
        return this.http.get<any>(baseUrl + "GetProducts/" + params.page);
    }

    addProduct(data: any): Observable<any>{
        return this.http.post(baseUrl, data);
    }

    deleteProduct(id: any): Observable<any>{
        return this.http.delete(baseUrl + "DeleteProductById/" + id);
    }
}
