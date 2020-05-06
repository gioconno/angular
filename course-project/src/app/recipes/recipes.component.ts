import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Output() selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(selectedRecipe: Recipe) {
    console.log('onRecipeSelected: ' + selectedRecipe);
    this.selectedRecipe = selectedRecipe;
  }



}
