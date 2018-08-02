import { Component, OnInit } from "../../../node_modules/@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component(
    {
        // selector: "pm-products",
        templateUrl: "./product-list.component.html",
        styleUrls: ['./product-list.component.css']
    })

//In .html view of this component we use Pipe to transform bound properties.
//Build-in pipes 
//date
//number,decimal,percent,currency
//json,slice 


export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    filteredProducts: IProduct[];
    products: IProduct[];
    private _listFilter: string;
    private errorMessage;

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this._listFilter) : this.products;

    }

    constructor(private productService: ProductService) {
    }

 
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    //This is lyfecycle Hook ,its execute when the component is initialized
    //Perform component initialization retrieve data
    ngOnInit(): void {
        this.productService.getProducts()
            .subscribe(products => {
                this.products = products
                this.filteredProducts = this.products
            }, error => this.errorMessage = error);
    }
    //Another hook is OnChanges:Perform action after change to input properties
    //And the last one is OnDestroy:Perform cleanup.

    onRatingClicked(message: string): void {
        this.pageTitle = this.pageTitle + ' ' + message;
    }

}