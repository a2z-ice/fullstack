import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducgtCategoryMenuComponent } from './producgt-category-menu.component';

describe('ProducgtCategoryMenuComponent', () => {
  let component: ProducgtCategoryMenuComponent;
  let fixture: ComponentFixture<ProducgtCategoryMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducgtCategoryMenuComponent]
    });
    fixture = TestBed.createComponent(ProducgtCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
