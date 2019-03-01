import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { ErrorPageComponent } from "./core/error-page/error-page.component";
import { HomeComponent } from "./core/home/home.component";

const appRoutes: Routes = [
    // {path: "", redirectTo: "/recipes", pathMatch: 'full'},
    {path: "", component: HomeComponent},
    {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
    {path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},
    {path: "not-found", component: ErrorPageComponent},
    {path: "**", redirectTo: "/not-found"}
  ];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})  
export class AppRoutingModule {}