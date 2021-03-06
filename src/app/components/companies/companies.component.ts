import { UtilService } from './../../services/util.service';
import { NguCarousel } from '@ngu/carousel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  public topCompaniesUrl;
  public bottomCompaniesUrl;
  constructor(private utilService: UtilService) {
    this.utilService.getCompaniesURL().subscribe(res => {
      this.topCompaniesUrl = res.top;
      this.bottomCompaniesUrl = res.bottom;
    })
   }

  public companyCarousel: NguCarousel;
  ngOnInit() {
    this.companyCarousel = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 3,
      speed: 400,
      interval: 3000,
      point: {
        visible: false
      },
      load: 5,
      touch: true,
      loop: true,
      easing: 'ease'
    }
  }

}
