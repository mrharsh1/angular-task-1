import { Component, OnInit } from '@angular/core';
import { ProductListingService } from '../service/product-listing.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
})
export class ProductListingComponent implements OnInit {
  panelOpenState = false;
  [x: string]: any;

  displayedColumns: string[] = ['name', 'username', 'phone', 'website'];
  dataSource: any;
  cardData: any;
  id: any;
  smartphone: any;
  category: any;
  teams: any;

  constructor(
    private productListingService: ProductListingService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCardData();

    this.id = this.route.snapshot.params['id'];
    console.log('testing ');

    // this.getCardDetails();
  }

  getCardData() {
    this.productListingService.getAllProduct().subscribe(
      (response: any) => {
        console.log(response, 'response is here');
        this.cardData = response.products;
        // this.smartphone = this.cardData?.filter((item:any)=>item.category === 'smartphones')
        this.category = this.cardData?.map(function (smartphone: any) {
          return smartphone.category;
        });
        this.teams = this.cardData
          .map((item: { category: any; team: any }) => item.category)
          .filter(
            (value: any, index: any, self: string | any[]) =>
              self.indexOf(value) === index
          );

        console.log(this.cardData, 'Card Data');
        console.log(this.smartphone, 'smartphone');
        console.log(this.category, 'category');
        console.log(this.teams, 'teams');
      },
      (error: any) => {
        console.log(error.message, 'error is here');
      }
    );
  }

  getDetailsById(id: string) {
    return this.cardData.filter((x: any) => {
      x.id === id;
    });
  }

  getCardDetails(event: any) {
    console.log('Clicked', event.target);
    this.router.navigate(['/product-details']);
  }

  getID(event: any) {
    console.log('Event --------------->', event);
    
  }
}
