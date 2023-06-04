import { MediaType } from './../interfaces/movie';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../servcies/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MoviedetailsComponent implements OnInit {
  mediaId: any = '';
  mediaIdType: any = '';
  media: any;

  constructor(
    private _MoviesService: MoviesService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (res) => {
        this.mediaIdType = res.get('mt');
        this.mediaId = res.get('id');
      },
    });

    this._MoviesService.getMovieDetails(this.mediaIdType, this.mediaId).subscribe({
      next: (res)=>{console.log(res);
      }
    })
  }
}
