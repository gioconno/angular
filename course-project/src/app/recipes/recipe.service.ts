import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Pizza',
            'Ricetta della pizza napoletana',
            'https://upload.wikimedia.org/wikipedia/commons/4/46/Pizza-napoletana.jpg',
            [
                new Ingredient('pomodoro', 1),
                new Ingredient('mozzarella', 1)
            ]),
        new Recipe(
            'Cannolo siciliano',
            'Ricetta del cannolo siciliano',
            'https://upload.wikimedia.org/wikipedia/commons/a/a8/Typical_american_cannolo.jpg',
            [
                new Ingredient('ricotta ovina', 1),
                new Ingredient('cioccolato', 100)
            ])
    ];

    getRecipes() {
        return this.recipes.slice(); // Using slice() will return a copy of the array and not the (reference to) array iteself
    }

    getRecipe(index: number): Recipe {
        return this.recipes.slice()[index];
    }
}
