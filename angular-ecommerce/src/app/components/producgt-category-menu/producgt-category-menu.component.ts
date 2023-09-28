import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-producgt-category-menu',
  templateUrl: './producgt-category-menu.component.html',
  styleUrls: ['./producgt-category-menu.component.css']
})
export class ProducgtCategoryMenuComponent implements OnInit{
  productCategories: ProductCategory [] = []; 
  constructor(private productService: ProductService){}
  
  ngOnInit(): void {
    this.listProductCategories();
  }
  listProductCategories() {
    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories: '+ JSON.stringify(data));
        this.productCategories = data;
      }
    );
  }


  /*
      this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.productCategories = data;
      }
    );
  */
}
