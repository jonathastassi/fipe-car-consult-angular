import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCarInfoComponent } from './panel-car-info.component';

describe('PanelCarInfoComponent', () => {
  let component: PanelCarInfoComponent;
  let fixture: ComponentFixture<PanelCarInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCarInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
