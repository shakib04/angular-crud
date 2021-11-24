import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;

  @Input() text?: string;

  @Input() color?: string;

  title: string = "hero dashboard";
  constructor() { }

  ngOnInit(): void {
  }

  ButtnClick() {
    prompt("Please enter your name", "Harry Potter");
    //https://youtu.be/3dHNOWTI7H8?t=1916


  }
}
