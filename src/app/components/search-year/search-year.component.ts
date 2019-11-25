import { Component, OnInit } from '@angular/core';
import { FipeService } from 'src/app/services/fipe.service';
import { Year } from 'src/app/models/year';

@Component({
  selector: 'app-search-year',
  templateUrl: './search-year.component.html',
  styleUrls: ['./search-year.component.css']
})
export class SearchYearComponent implements OnInit {

  years: Year[];

  constructor(
    public fipeService: FipeService
  ) { }

  changeYear(el): void {
    this.fipeService.changeYearIdSelected(el);
  }

  ngOnInit() {
    this.fipeService.modelId.subscribe({
      next: (modelId) => this.fipeService.getYears().subscribe(response => this.years = response)
    });
  }

}
