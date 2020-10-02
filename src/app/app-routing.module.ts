import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SignComponent} from './sign/sign.component';
import {RegisterComponent} from './register/register.component';
import {WatchlistComponent} from './watchlist/watchlist.component'
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'signin',component:SignComponent},
  {path:'register',component:RegisterComponent},
  {path:'watchlist',component:WatchlistComponent},
  {path:'movie',component:MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
