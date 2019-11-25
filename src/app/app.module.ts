import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SearchBrandComponent } from './components/search-brand/search-brand.component';
import { SearchModelComponent } from './components/search-model/search-model.component';
import { SearchYearComponent } from './components/search-year/search-year.component';
import { PanelCarInfoComponent } from './components/panel-car-info/panel-car-info.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SearchBrandComponent,
    SearchModelComponent,
    SearchYearComponent,
    PanelCarInfoComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
