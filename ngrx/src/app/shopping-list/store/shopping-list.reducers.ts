import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
          return {
              ...state,
              ingredients: [
                  ...state.ingredients,
                  action.payload
              ]
          }
        case ShoppingListActions.ADD_INGREDIENTS:
          return {
              ...state,
              ingredients: [
                  ...state.ingredients,
                  ...action.payload
              ]
          }
        case ShoppingListActions.DELETE_INGREDIENT:
          const indexD: number = state.editedIngredientIndex;
          const ingredientsD = [...state.ingredients];
          ingredientsD.splice(indexD, 1);
          return {
              ...state,
              ingredients: [
                  ...ingredientsD
              ],
              editedIngredient: null,
              editedIngredientIndex: -1              
          }
        case ShoppingListActions.UPDATE_INGREDIENT:
          const indexU: number = state.editedIngredientIndex;
          const ingredient = state.ingredients[indexU];
          const updatedIngredient = {
              ...ingredient,
              ...action.payload
          }
          const ingredients = [...state.ingredients]
          ingredients[indexU] = updatedIngredient;
          return {
              ...state,
              ingredients: [
                  ...ingredients
              ],
              editedIngredient: null,
              editedIngredientIndex: -1              
          }
        case ShoppingListActions.START_EDIT:
          const editedIngredient = {...state.ingredients[action.payload]};
          return {
              ...state,
              editedIngredient: editedIngredient,
              editedIngredientIndex: action.payload
          }
        case ShoppingListActions.STOP_EDIT:
          return {
              ...state,
              editedIngredient: null,
              editedIngredientIndex: -1     
          }
          default:
            return state;
    }
}