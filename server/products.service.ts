import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl: string = 'http://localhost:3000/products'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl)
  }

  getProductsPage(page: Number): Observable<Products[]> {
    // return this.http.get<Products[]>(`${this.apiUrl}/?_page=${page}&_limit=48`)
    return this.http.get<Products[]>(this.apiUrl)
  }

}
