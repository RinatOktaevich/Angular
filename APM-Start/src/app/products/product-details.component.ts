import { Component, OnInit } from '@angular/core'; 
import {ActivatedRoute} from '@angular/router'
import { IProduct } from './product';
import {Router} from '@angular/router'

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle:string='Product Details';
  product:IProduct;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    let id=+this.route.snapshot.paramMap.get('id');
    this.pageTitle+=":"+id;
    this.product={
      "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2016",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    }

  }

  onBack():void{
    this.router.navigate(['/products']);
  }

}
