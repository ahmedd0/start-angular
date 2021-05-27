import { Component, OnInit } from '@angular/core';
import { ImgsService } from './../imgs.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
 portfolioItems:any;
 currentIndex:any = 0;

  constructor(_ImgsService:ImgsService) {
    this.portfolioItems = _ImgsService.portfolioItems
   }
   showDetails(index:number){
     this.currentIndex = index;
   }
  ngOnInit(): void {
  }

}
