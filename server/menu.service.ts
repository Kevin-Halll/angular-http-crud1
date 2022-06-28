import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu, Stats } from './interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private apiUrl: string = 'http://localhost:3000/menus';
  private api: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  createMenu(menu: Menu) {
    let obs = new Observable((observer) => {
      this.http.post(this.apiUrl, menu, { observe: 'response' }).subscribe({
        next: () => {
          this.http.get<Stats>(this.api + 'stats').subscribe({
            next: (data) => {
              this.http
                .put(this.api + 'stats', {
                  menus: data.menus + 1,
                  products: data.products,
                })
                .subscribe({
                  next: () => {
                    observer.next(true);
                  },
                  error: (err) => {
                    console.log(err);
                    console.log('Manually adjust stats in database.');
                    observer.next(false);
                  },
                });
            },
            error: (err) => {
              console.log(err);
              console.log('Manually adjust stats in database.');
              observer.next(false);
            },
          });
        },
        error: (err) => {
          console.log(err);
          observer.next(false);
        },
      });
    });
    return obs;
  }
  getMenus() {
    return this.http.get(this.apiUrl, { observe: 'response' });
  }
  getMenu(id: number) {
    return this.http.get(this.apiUrl + `/${id}`, { observe: 'response' });
  }
  updateMenu(menu: Menu, id: number) {
    return this.http.put(this.apiUrl + `/${id}`, menu, { observe: 'response' });
  }
  deleteMenu(id: number) {
    return this.http.delete(this.apiUrl + `/${id}`, { observe: 'response' });
  }
}
