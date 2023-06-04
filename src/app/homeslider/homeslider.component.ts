import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MovieResults } from '../interfaces/movie';

@Component({
  selector: 'app-homeslider',
  templateUrl: './homeslider.component.html',
  styleUrls: ['./homeslider.component.css'],
})
export class HomesliderComponent {
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  @Input() slides: MovieResults[] = [];

  customOptions: OwlOptions = {
    loop: true,
      mouseDrag: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 100,
      autoplay:true,
      autoplayTimeout:5000,
      autoplaySpeed:1000,
      navText: ['', ''],
      items: 1,
  };
}
