import { Component, OnInit, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Model } from 'src/app/models/model';
import { FipeService } from 'src/app/services/fipe.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-search-model',
  templateUrl: './search-model.component.html',
  styleUrls: ['./search-model.component.css']
})
export class SearchModelComponent implements OnInit {

  models: Model[];

  constructor(
    private fipeService: FipeService
  ) { }

  changeModel(el): void {
    this.fipeService.changeModelIdSelected(el);
  }

  ngOnInit() {
    this.fipeService.brandId.subscribe({
      next: (brandId) => this.fipeService.getModels().subscribe(response => this.models = response)
    });
  }
}
