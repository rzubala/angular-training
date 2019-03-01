import { map, catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { throwError } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataStorageService {

    constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

    getRecipes() {
        const token = this.authService.getToken();

        this.httpClient.get<Recipe[]>('https://ng-recipe-book-89723.firebaseio.com/recipes.json?auth=' + token)
        .pipe(map((recipes) => {
            //const recipes: Recipe[] = response.json();    //http
            for (let recipe of recipes) {
                if (!recipe['ingredients']) {
                    console.log(recipe)
                    recipe['ingredients'] = [];
                }
            }
            return recipes;
        }))
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }

    storeRecipies() {
        const token = this.authService.getToken();

        return this.httpClient.put('https://ng-recipe-book-89723.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes())
        .pipe(catchError((error: Response) => {
            return throwError('Something went wrong on save');
        }))
        ;
    }
}