import { MovieResults } from './../interfaces/movie';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../servcies/authentication.service';
import { MoviesService } from '../servcies/movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  trendingMovies: MovieResults[] = [];
  trendingTv: any[] = [];
  TrendingActors: any[] = [];
  constructor(
    private _AuthenticationService: AuthenticationService,
    private _MoviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this._MoviesService.getTrendy('movie').subscribe({
      next: (res) => {
        this.trendingMovies = res.results;
        console.log(res.results);
      },
    });
  }
}
