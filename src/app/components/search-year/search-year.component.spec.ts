import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchYearComponent } from './search-year.component';

describe('SearchYearComponent', () => {
  let component: SearchYearComponent;
  let fixture: ComponentFixture<SearchYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
