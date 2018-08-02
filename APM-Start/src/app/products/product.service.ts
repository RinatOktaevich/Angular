import { Injectable } from "../../../node_modules/@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "../../../node_modules/@angular/common/http";
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators';

//This service for delivering data to components 
//There we register our service to whore app,so we can access to this service 
//in various components  
@Injectable({
    providedIn: "root"
})
export class ProductService {
    private productUrl = 'api/products/products.json';
    constructor(private http: HttpClient) {
    }

    //'tap'-function uses to watch received data without transforming
    //pipe -function uses for make something with data,don`t required
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl);
            // .pipe(
            //     tap(data =>
            //         console.log('All:' + JSON.stringify(data))
            //     ), catchError(this.handleError)
            // );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = 'An error occured:' + err.error.message;
        } else {
            //The backend returned an unsuccessfull code or responce body contain clues to what went wrong
            errorMessage = 'Server returned code:' + err.status + ',error message is:' + err.message;
        }
        console.log("error message");
        return throwError('errorMessage');
    }
}

//But if we need to have multipal service instances we need to register 
//service in target component instead
// like this @Component({
//             providers:[ProductService]
//           })
