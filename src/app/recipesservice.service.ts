import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class RecipesserviceService {
  private favorites: any[] = [];

  constructor(private _HttpClient: HttpClient) {
    this.loadFavorites();
  }

  getRecipes(query: string): Observable<any> {
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
  }

  getRecipeDetails(recipeID: string): Observable<any> {
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/get?rId=${recipeID}`);
  }
  addToFavorites(recipe: any): void {
    if (!this.isInFavorites(recipe)) {
      this.favorites.push(recipe);
      this.saveFavorites();
    }
  }

  removeFromFavorites(recipe: any): void {
    this.favorites = this.favorites.filter((favRecipe) => favRecipe.recipe_id !== recipe.recipe_id);
    this.saveFavorites();
  }

  getFavorites(): Observable<any[]> {
    return of(this.favorites);
  }

  isInFavorites(recipe: any): boolean {
    return this.favorites.some((favRecipe) => favRecipe.recipe_id === recipe.recipe_id);
  }

  private loadFavorites(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const favoritesData = localStorage.getItem('favorites');
      if (favoritesData) {
        this.favorites = JSON.parse(favoritesData);
      }
    }
  }

  private saveFavorites(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }

}

