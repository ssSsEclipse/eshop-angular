import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceFilterComponent } from './product-price-filter.component';

describe('ProductPriceFilterComponent', () => {
  let component: ProductPriceFilterComponent;
  let fixture: ComponentFixture<ProductPriceFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPriceFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
