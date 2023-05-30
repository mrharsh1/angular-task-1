import { Injectable } from '@angular/core';

import { ProductDetailsService } from './product-details.service';
import { ProductListingService } from './product-listing.service';
import { BehaviorSubject, forkJoin, pipe, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  private prodcutDetailsBS$ = new BehaviorSubject<any>([]);
  private productListingBS$ =  new BehaviorSubject<any>([]);

  prodcutDetails$ = this.prodcutDetailsBS$.asObservable();
  productListing$ =this.productListingBS$.asObservable();

  productDetails: any[] = [];
  productlisting: any[] = [];
  constructor(private productDetailsService:ProductDetailsService, 
    private productListingService: ProductListingService) { }

    getDetailsAndProduct() {
      return forkJoin ([
        this.productDetailsService.getAllDetails(),
        this.productListingService.getAllProduct(),
      ]) .pipe(take(1)).subscribe(([details, product]: any)=>{
        this.prodcutDetailsBS$.next(details);
        this.productListingBS$.next(product);
        this.productDetails = details;
        this.productlisting = product;
        console.log(details);
        console.log(product);
        
        
      })
    }
}
