import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Recipe #1', 'This is the first recipe', 'https://cdn.pixabay.com/photo/2018/11/05/12/42/food-3796017_960_720.jpg'),
        new Recipe('Recipe #2', 'This is the second recipe', 'https://cdn.pixabay.com/photo/2018/11/05/12/42/food-3796017_960_720.jpg')
    ];

    getRecipes() {
        return this.recipes.slice(); // Using slice() will return a copy of the array and not the (reference to) array iteself
    }
}
