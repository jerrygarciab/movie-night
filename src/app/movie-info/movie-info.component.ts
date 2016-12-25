import {Component} from '@angular/core';

@Component({
  selector: 'movie-info',
  templateUrl: './app/movie-info/movie-info.component.html',
  styleUrls: ['./app/movie-info/movie-info.component.css']
})

export class MovieInfoComponent {
  movieInfo = 'This is the movie info component';
}
