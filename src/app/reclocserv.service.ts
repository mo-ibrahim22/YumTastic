import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ReclocservService {

  constructor() { }

  getAllRecipes(): any[] {
    if (typeof window !== 'undefined' && window.localStorage) {
      return JSON.parse(localStorage.getItem('recipes') || '[]');
    } else {
      return [];
    }
  }

  addRecipe(recipe: any): void {
    let recipes = this.getAllRecipes();
    recipe.id = uuidv4(); // Generate a unique ID
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }

  updateRecipe(recipe: any, id: string): void {
    let recipes = this.getAllRecipes();
    const index = recipes.findIndex((r: any) => r.id === id);
    if (index !== -1) {
      recipes[index] = recipe;
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }
  }

  deleteRecipe(id: string): void {
    let recipes = this.getAllRecipes();
    recipes = recipes.filter((recipe: any) => recipe.id !== id);
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }

  searchRecipes(title: string): any[] {
    let recipes = this.getAllRecipes();
    return recipes.filter((recipe: any) => recipe.title.toLowerCase().includes(title.toLowerCase()));
  }
}
