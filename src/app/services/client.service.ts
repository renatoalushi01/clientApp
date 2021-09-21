import { Injectable } from '@angular/core';
import { MailBox } from 'src/app/models/app.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url: string = "https://localhost:44392/api/client";
  constructor(private http: HttpClient) { }

  getAllData() {
    
    return this.http.get<any>(this.url);
  }
}

