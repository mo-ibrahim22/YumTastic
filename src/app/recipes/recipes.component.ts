import { Component } from '@angular/core';
import { RecipesserviceService } from '../recipesservice.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RecbodyComponent } from '../recbody/recbody.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, RecbodyComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {

  recipesobj: any;

  ingredientsobj: any;
  ingimg: any;
  showIngredientDetails: boolean = false;



  constructor(private recipesservice: RecipesserviceService) {


  }

  DisplayRec(event: any) {
    const selectedValue: string = event.target.value;
    this.recipesservice.getRecipes(selectedValue).subscribe((data) => {
      this.recipesobj = data.recipes;
    });
  }

  getingredients(recipeID: any) {
    this.recipesservice.getRecipeDetails(recipeID).subscribe((data) => {
      this.ingredientsobj = data.recipe.ingredients;
      this.ingimg = data.recipe.image_url;
      this.showIngredientDetails = true;
    });
  }
  closeIngredients() {
    this.showIngredientDetails = false;
  }

  toggleFavorite(recipe: any): void {
    if (this.recipesservice.isInFavorites(recipe)) {
      this.recipesservice.removeFromFavorites(recipe);
    } else {
      this.recipesservice.addToFavorites(recipe);
    }
  }

  checkFavorite(recipe: any): boolean {
    return this.recipesservice.isInFavorites(recipe);
  }

}