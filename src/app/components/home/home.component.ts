import { Component, OnInit } from '@angular/core';
import { Products } from 'server/interface';
import { ProductsService } from 'server/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Products[] = [];
  // ///pagination//////
  totalLength: any;
  page: number = 1;
  ///////sorting////////
  asc: boolean = true;
  sort: string = 'id';

  constructor(private prodService: ProductsService) {}

  ngOnInit(): void {
    this.product_load();
  }

  product_load() {
    this.prodService.getProductsSorted(this.asc, this.sort).subscribe((data) => {
      this.products = data;
      this.totalLength = data.length;
    });
  }
}
