// import { Injectable } from '@angular/core';
// import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductDetailsService {

//   private url = 'https://dummyjson.com'

//   constructor(private http: HttpClient) { }


//   getDeatils():Observable<any> {
//     return this.http.get(this.url + '/products')
//   }

//   getDetailsById(id:number): Observable<any> {
//     console.log('id', id);
//     return this.http.get(`${this.url}/products/${id}`)
//   }
// }
// import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductListingService {

//   private url = 'https://dummyjson.com'

//   constructor(private http: HttpClient) { }


//   getProducts():Observable<any> {
//     return this.http.get(this.url + '/product')
//   }

//   getProductById(id:number): Observable<any> {
//     console.log('id', id);
//     return this.http.get(`${this.url}/product/${id}`)
//   }
// }

import { Observable } from 'rxjs';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
    private url = 'https://dummyjson.com'

    constructor(private http: HttpClient) { }
  
  
    getAllDetails():Observable<any> {
      return this.http.get(this.url + '/products')
    }
  
    getAllDetailsById(id:number): Observable<any> {
      console.log('id', id);
      return this.http.get(`${this.url}/products/${id}`)
    }
  }