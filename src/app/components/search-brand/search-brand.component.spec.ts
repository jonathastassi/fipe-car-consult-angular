import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBrandComponent } from './search-brand.component';

describe('SearchBrandComponent', () => {
  let component: SearchBrandComponent;
  let fixture: ComponentFixture<SearchBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
