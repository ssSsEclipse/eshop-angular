import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-price-filter',
  templateUrl: './product-price-filter.component.html',
  styleUrls: ['./product-price-filter.component.css']
})
export class ProductPriceFilterComponent implements OnInit {
  @Input('filteredProductsPriceRange') priceRange: {
    min: number,
    max: number
  };
  rangeValues: number[];

  constructor() { }

  ngOnInit() {
    this.priceRange = {
      min: 0,
      max: 100
    };
    this.rangeValues = [this.priceRange.min, this.priceRange.max];
  }

  handleChange($event) {
    console.log(this.rangeValues);
  }
}
