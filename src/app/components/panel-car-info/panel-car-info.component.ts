import { Component, OnInit } from '@angular/core';
import { FipeService } from 'src/app/services/fipe.service';
import { CarInfo } from 'src/app/models/car-info';

@Component({
  selector: 'app-panel-car-info',
  templateUrl: './panel-car-info.component.html',
  styleUrls: ['./panel-car-info.component.css']
})
export class PanelCarInfoComponent implements OnInit {

  public info: CarInfo;

  constructor(
    public fipeService: FipeService
  ) { }

  ngOnInit() {
    this.fipeService.yearId.subscribe({
      next: (modelId) => this.fipeService.getCarInfo().subscribe(response => this.info = response)
    });
  }

}
