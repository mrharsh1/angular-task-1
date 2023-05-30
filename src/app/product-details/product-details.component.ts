import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../service/product-details.service';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  panelOpenState = false;
  [x: string]: any;

  displayedColumns: string[] = ['name', 'username', 'phone', 'website'];
  dataSource: any;
  cardDatas: any;
  id: any;
  smartphones: any;
  category: any;
  teams: any;
  productId: any;
  constructor(
    private productDetailsService: ProductDetailsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {

   
    this.getCardData();
    this.id = this.route.snapshot.paramMap.get('id')!
    // this.id = this.route.snapshot.params['id'];
    console.log('testing ============> ', this.id);

    // this.getCardDetails();
  }

  getCardData() {
    this.productDetailsService.getAllDetails().subscribe(
      (response: any) => {
        console.log(response, 'response is here');
        this.cardDatas = response.products;
        this.smartphones = this.cardDatas?.filter((item:any)=>item.category === 'smartphones')
       
       

        console.log(this.cardDatas, 'Card Data');
        console.log(this.smartphones, 'smartphone');
       
      },
      (error: any) => {
        console.log(error.message, 'error is here');
      }
    );
  }

  getDetailsById(id: string) {
    return this.cardDatas.filter((x: any) => {
      x.id === id;
    });
  }

  getCardDetails(event: any) {
    console.log('Clicked', event.target);
    this.router.navigate(['/product-details']);
  }

  getDataById(event: any) {
    console.log('event', event);
    
  }
}

