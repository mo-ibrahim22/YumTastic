import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { YourrecipesComponent } from './yourrecipes/yourrecipes.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'favourite', component: FavouriteComponent },
    { path: 'yourrecipes', component: YourrecipesComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },

];
