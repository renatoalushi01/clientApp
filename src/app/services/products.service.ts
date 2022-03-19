import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "";

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    
    constructor(private http: HttpClient){}

    getAllProducts(): Observable<any>{
        return this.http.get<any>(baseUrl);
    }
}
