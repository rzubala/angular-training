import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEmptyComponent } from "./recipes/recipe-empty/recipe-empty.component";

const appRoutes: Routes = [
    {path: "", redirectTo: "/recipes", pathMatch: 'full'},
    {path: "recipes", component: RecipesComponent, children: [
        {path: "empty", component: RecipeEmptyComponent},
        {path: ":id", component: RecipeDetailComponent}
    ]},
    {path: "shopping-list", component: ShoppingListComponent},
    {path: "not-found", component: ErrorPageComponent},
    {path: "**", redirectTo: "/not-found"}
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})  
export class AppRoutingModule {}