import { Component } from '@angular/core';
import { RecbodyComponent } from '../recbody/recbody.component';
import { RecipesserviceService } from '../recipesservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favourite',
  standalone: true,
  imports: [RecbodyComponent,CommonModule],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.scss'
})
export class FavouriteComponent {
  favorites: any[] = [];
  constructor(private recipesservice: RecipesserviceService) {
    this.getFavorites();

  }

  getFavorites(): void {
    this.recipesservice.getFavorites().subscribe(favorites => {
      this.favorites = favorites;
    });
  }

  removeFromFavorites(recipe: any): void {
    this.recipesservice.removeFromFavorites(recipe);
    this.getFavorites(); // Update the list after removing a favorite
  }

}
