import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();

    ingredientAdded = new Subject<Ingredient>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.updateIngredientsList();
    }

    addIngredients(ingredients: Ingredient[]) {

        // This code works too, but there will be an event emitted for each ingredient
        // ingredients.forEach(ingredient => this.addIngredient(ingredient));

        // This works fine but the other code is really cool
        // ingredients.forEach(ingredient => this.ingredients.push(ingredient));

        this.ingredients.push(...ingredients);
        this.updateIngredientsList();
    }

    private updateIngredientsList() {
        this.ingredientsChanged.next(this.ingredients.slice());
    }


}
