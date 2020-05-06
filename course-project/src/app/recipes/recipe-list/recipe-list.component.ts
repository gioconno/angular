import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe #1', 'This is the first recipe', 'https://cdn.pixabay.com/photo/2018/11/05/12/42/food-3796017_960_720.jpg'),
    new Recipe('Recipe #2', 'This is the second recipe', 'https://cdn.pixabay.com/photo/2018/11/05/12/42/food-3796017_960_720.jpg')
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
