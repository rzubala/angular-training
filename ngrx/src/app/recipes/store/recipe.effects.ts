import { Effect, Actions, ofType } from "@ngrx/effects";
import { HttpClient, HttpRequest } from "@angular/common/http";

import * as RecipeActons from './recipe.actions';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Recipe } from "../recipe.model";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromRecipe from '../store/recipe.reducers';

@Injectable()
export class RecipeEffects {
    @Effect()
    recipeFetch = this.actions$.pipe(
        ofType(RecipeActons.FETCH_RECIPES),
        switchMap((action: RecipeActons.FetchRecipes) => {
            return this.httpClient.get<Recipe[]>('https://ng-recipe-book-89723.firebaseio.com/recipes.json', {
                observe: 'body',
                responseType: 'json'
            })
        }),
        map((recipes) => {
            console.log(recipes);
            for (let recipe of recipes) {
                if (!recipe['ingredients']) {
                    recipe['ingredients'] = [];
                }
            }
            return {
                type: RecipeActons.SET_RECIPES,
                payload: recipes
            };
        }
        )
    );

    @Effect({dispatch: false})
    recipeStore = this.actions$.pipe(
        ofType(RecipeActons.STORE_RECIPES),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([action, state]) => {
            const req = new HttpRequest('PUT', 'https://ng-recipe-book-89723.firebaseio.com/recipes.json', state.recipes, {reportProgress: true});
            return this.httpClient.request(req);
        })
    );

    constructor(private actions$: Actions, private httpClient: HttpClient,
                    private store: Store<fromRecipe.FeatureState>) { }
}