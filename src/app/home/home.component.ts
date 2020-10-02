import { Component } from '@angular/core';
import {movieData} from '../mock-movies';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'Welcome';
  movies = movieData;
  


}
