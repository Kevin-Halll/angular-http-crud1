import { Component, OnInit } from '@angular/core';
import { Products } from 'server/interface';
import { ProductsService } from 'server/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Products[] = []

  constructor(private prodService: ProductsService) { }

  ngOnInit(): void {

    this.prodService.getProducts().subscribe( data => {
      this.products = data
      
    })

  }

}
