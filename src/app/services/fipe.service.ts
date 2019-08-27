import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of, Subject, BehaviorSubject } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Brand } from '../models/brand';
import { Model } from '../models/model';
import { Year } from '../models/year';
import { CarInfo } from '../models/car-info';

@Injectable({
  providedIn: 'root'
})
export class FipeService {

  public brandId = new BehaviorSubject<number>(0);
  public modelId = new BehaviorSubject<number>(0);
  public yearId = new BehaviorSubject<number>(0);

  public modelCharged = false;
  public yearCharged = false;
  public carInfoCharged = false;

  constructor(
    private http: HttpClient
  ) { }

  changeBrandIdSelected(brandId: number) {
    this.brandId.next(brandId);
  }

  changeModelIdSelected(modelId: number) {
    this.modelId.next(modelId);
  }

  changeYearIdSelected(yearId: number) {
    this.yearId.next(yearId);
  }

  getBrands(): Observable<Brand[]> {
    this.modelCharged = false;
    this.yearCharged = false;
    this.carInfoCharged = false;
    return this.http.get<Brand[]>('https://parallelum.com.br/fipe/api/v1/carros/marcas')
      .pipe(
        map(p => p.map(brand => new Brand(brand['codigo'], brand['nome']))),
        catchError((e) => {
          console.log(e);
          return throwError
        })
      );            
  }

  getModels(): Observable<Model[]> {
    this.modelCharged = false;
    this.yearCharged = false;
    this.carInfoCharged = false;

    if (this.brandId.value == 0) {
      return of([]);
    }

    return this.http.get<Model[]>(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${this.brandId.value}/modelos`)
      .pipe(
        map(p => p['modelos'].map(model => new Model(model['codigo'], model['nome']))),
        tap(p => {
          this.modelCharged = true;
        }),
        catchError((e) => {
          console.log(e);
          return throwError
        })
      );            
  } 
  
  getYears(): Observable<Year[]> {
    this.yearCharged = false;
    this.carInfoCharged = false;

    if (this.modelId.value == 0) {
      return of([]);
    }

    return this.http.get<Year[]>(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${this.brandId.value}/modelos/${this.modelId.value}/anos`)
      .pipe(
        map(p => p.map(model => new Model(model['codigo'], model['nome']))),
        tap(p => this.yearCharged = true),
        catchError((e) => {
          console.log(e);
          return throwError
        })
      )
  }

  getCarInfo(): Observable<CarInfo> {
    this.carInfoCharged = false;

    if (this.yearId.value == 0) {
      return of([]);
    }

    return this.http.get<CarInfo>(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${this.brandId.value}/modelos/${this.modelId.value}/anos/${this.yearId.value}`)
      .pipe(
        map(p => new CarInfo(
          p["Valor"],
          p["Marca"],
          p["Modelo"],
          p["AnoModelo"],
          p["Combustivel"],
          p["CodigoFipe"],
          p["MesReferencia"],
          p["TipoVeiculo"],
          p["SiglaCombustivel"]
        )),
        tap(p => this.carInfoCharged = true),
        catchError((e) => {
          console.log(e);
          return throwError
        })
      );
  } 
}
