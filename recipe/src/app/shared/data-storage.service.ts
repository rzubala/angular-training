import { Http, Response } from "@angular/http";
import { map, catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { throwError } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

    getRecipes() {
        const token = this.authService.getToken();

        this.http.get('https://ng-recipe-book-89723.firebaseio.com/recipes.json?auth=' + token)
        .pipe(map((response: Response) => {
            const recipes: Recipe[] = response.json();
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

        return this.http.put('https://ng-recipe-book-89723.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes())
        .pipe(catchError((error: Response) => {
            return throwError('Something went wrong on save');
        }))
        ;
    }
}