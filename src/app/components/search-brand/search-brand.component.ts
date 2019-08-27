import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { FipeService } from 'src/app/services/fipe.service';

@Component({
  selector: 'app-search-brand',
  templateUrl: './search-brand.component.html',
  styleUrls: ['./search-brand.component.css']
})
export class SearchBrandComponent implements OnInit {

  brands: Brand[];

  constructor(
    private fipeService: FipeService
  ) { }

  changeBrand(el): void {
    this.fipeService.changeBrandIdSelected(el);
  }

  ngOnInit() {
    this.fipeService.getBrands()
      .subscribe(response => {
        this.brands = response;
      })
  }
}
