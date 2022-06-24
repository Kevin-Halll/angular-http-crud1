import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from './interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private apiUrl: string = 'http://localhost:3000/menus';

  constructor(private http: HttpClient) {}

  createMenu(menu: Menu) {
    return this.http.post(this.apiUrl, menu, {observe: "response"});
  }
  getMenus() {
    return this.http.get(this.apiUrl, {observe: "response"});
  }
  getMenu(id:number) {
    return this.http.get(this.apiUrl + `/${id}`, {observe: "response"});
  }
  updateMenu(menu: Menu, id: number) {
    return this.http.put(this.apiUrl + `/${id}`, menu, {observe: "response"});
  }
  deleteMenu(id: number) {
    return this.http.delete(this.apiUrl + `/${id}`, {observe: "response"});
  }
}
