import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'server/products.service';
import { Products } from 'server/interface';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  prod: any;
  pIndex: any;

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(result => {
      this.prod = result[this.pIndex - 1]
      console.log(this.prod);
      
    })

    this.route.paramMap.subscribe((params: ParamMap) => {
      let detail = params.get('id');
      this.pIndex = detail
      console.log(this.pIndex);
      
    })
  }

}
