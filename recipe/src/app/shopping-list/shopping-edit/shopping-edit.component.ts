import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shopingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem = (amountInput: HTMLInputElement) => {
    const ingredient = new Ingredient(this.nameInputRef.nativeElement.value, +amountInput.value);
    this.shopingListService.addIngredient(ingredient);
  }
}
