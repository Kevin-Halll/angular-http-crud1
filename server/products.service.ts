import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl: string = 'http://localhost:3000/products'
  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl)
  }
  /**
   * HTTP Request to sort the products prior to reception.
   * @param ascending Create a UI aspect to accept ascending or descending, preferably a checkbox, it defaults to ASC
   * @param sort Create a ui aspect to accept either ID or Price for sorting, it defaults to ID
   * @returns Observable
   */
   getProductsSorted(ascending: boolean = true, sort: string = 'id'):Observable<Products[]> {
    return this.http.get<Products[]>(
      this.apiUrl +
        `?_sort=${sort}&_order=${ascending ? 'ASC' : 'DESC'}`
    );
  }
}
