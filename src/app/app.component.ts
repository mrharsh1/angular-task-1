// import { Component } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';



// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'dashboard';
// }

import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ProductDetailsService } from './service/product-details.service';
import { ProductListingService } from './service/product-listing.service';
import { FacadeService } from './service/facade.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  productlisting$: Observable<any>;
  productDetails$: Observable<any>;
  

  get productlisting() {
    return this.facadeService.productlisting
  }
  get productDetails() {
    return this.facadeService.productDetails
  }
  constructor(private facadeService: FacadeService) {
    this.productlisting$ = this.facadeService.productListing$;
    this.productDetails$ = this.facadeService.prodcutDetails$;
    this.facadeService. getDetailsAndProduct();
   

    

  }
}
