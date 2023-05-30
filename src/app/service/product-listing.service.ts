// import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductListingService {

//   private url = 'https://dummyjson.com'

//   constructor(private http: HttpClient) { }


//   getAllProducts():Observable<any> {
//     return this.http.get(this.url + '/product')
//   }

//   getAllProductById(id:number): Observable<any> {
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
export class ProductListingService {
  private url = 'https://dummyjson.com'

    constructor(private http: HttpClient) { }
  
  
    getAllProduct():Observable<any> {
      return this.http.get(this.url + '/product')
    }
  
    getAllProductById(id:number): Observable<any> {
      console.log('id', id);
      return this.http.get(`${this.url}/product/${id}`)
    }
  }
  