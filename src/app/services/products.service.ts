import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpContextToken, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Search } from '../models/product.model';
import { map } from 'rxjs/operators';
import { CONTENT_TYPE } from './add-header.interceptor';

const baseUrl = "http://localhost:8000/api/v1/Catalog";

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    
    constructor(private http: HttpClient){}

    getAllProducts(params: Search): Observable<any>{
        if(params){
            if(params.name !== '' && params.category == ''){
                return this.http.get<any>(`${baseUrl}/GetProductByName/${params.name}`,{
                   headers: new HttpHeaders({
                    'Accept': 'application/json'
                    })
                });
            }
            else if(params.category !== '' && params.name == ''){
                return this.http.get<any>(`${baseUrl}/GetProductByCategory/${params.category}`);
            }
        }
        return this.http.get<any>(`${baseUrl}/GetProducts/${params.page}`, {
            context: new HttpContext().set(CONTENT_TYPE,'application/json')
        });
    }

    addProduct(data: any): Observable<any>{
        return this.http.post(baseUrl, data);
    }

    deleteProduct(id: any): Observable<any>{
        return this.http.delete(`${baseUrl}/DeleteProductById/${id}`);
    }

    getProductById(id: string): Observable<Product> {
        return this.http.get<Product>(`${baseUrl}/${id}`)
        .pipe(
            map(p => <Product>{
                id: p.id,
                name: p.name,
                category: p.category,
                description: p.description,
                summary: p.summary,
                price: p.price,
                imageFile: p.imageFile
            })
        );
    } 

    updateProduct(product: Product): Observable<void>{
        return this.http.put<void>(baseUrl, product);
    } 
}
