import {Component, OnInit} from '@angular/core';
import { BackandService } from 'angular2bknd-sdk';

@Component({
  selector: 'movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})

export class MovieInfoComponent {
  movieInfo = 'This is the movie info component';

  constructor(private backandService:BackandService) { }

  ngOnInit() {
  }
}
