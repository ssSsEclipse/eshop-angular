import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../../services/category/category.service';

@Component({
  selector: 'product-category-filter',
  templateUrl: './product-category-filter.component.html',
  styleUrls: ['./product-category-filter.component.css']
})
export class ProductCategoryFilterComponent implements OnInit {
  categories$;
  @Input('category') category: string;

  constructor(
    private categoryService: CategoryService) {

      this.categories$ = categoryService.getAll();
  }

  ngOnInit() {
  }

}
