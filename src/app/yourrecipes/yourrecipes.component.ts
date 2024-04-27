import { Component } from '@angular/core';
import { ReclocservService } from '../reclocserv.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecbodyComponent } from '../recbody/recbody.component';

@Component({
  selector: 'app-yourrecipes',
  standalone: true,
  imports: [CommonModule, FormsModule, RecbodyComponent],
  templateUrl: './yourrecipes.component.html',
  styleUrl: './yourrecipes.component.scss'
})
export class YourrecipesComponent {

  recipes: any[] = [];
  selectedRecipe: any = {};
  searchTerm: string = '';
  showRecipeForm: boolean = false;

  constructor(private _reclocServ: ReclocservService) {
    this.loadRecipes();
  }

  loadRecipes(): void {
    this.recipes = this._reclocServ.getAllRecipes();
  }

  toggleRecipeForm(): void {
    this.showRecipeForm = !this.showRecipeForm;
    if (!this.showRecipeForm) {
      this.selectedRecipe = {};
    }
  }

  addRecipe(): void {
    if (window.confirm("Are you sure you want to add this recipe?")) {
      this._reclocServ.addRecipe(this.selectedRecipe);
      this.loadRecipes();
      this.toggleRecipeForm();
    }
  }

  updateRecipe(): void {
    if (confirm("Are you sure you want to update this recipe?")) {
      this._reclocServ.updateRecipe(this.selectedRecipe, this.selectedRecipe.id);
      this.loadRecipes();
      this.toggleRecipeForm();
    }

  }

  deleteRecipe(id: string): void {
    if (confirm("Are you sure you want to delete this recipe?")) {
      this._reclocServ.deleteRecipe(id);
      this.loadRecipes();
    }
  }

  search(): void {
    if (this.searchTerm.trim() !== '') {
      this.recipes = this._reclocServ.searchRecipes(this.searchTerm);
    } else {
      this.loadRecipes();
    }
  }

  editRecipe(recipe: any): void {
    this.selectedRecipe = { ...recipe };
    this.showRecipeForm = true;
  }

  cancel(): void {
    this.selectedRecipe = {};
    alert('Changes have been discarded.');
    this.toggleRecipeForm();
  }

  validateForm(): void {
    alert('Please fill in all fields.');
  }
}
