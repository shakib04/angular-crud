import { Component, OnInit } from '@angular/core';
import {Book} from "../book.model";

@Component({
  selector: 'app-app-move',
  templateUrl: './app-move.component.html',
  styleUrls: ['./app-move.component.css']
})
export class AppMoveComponent implements OnInit {

  books: Book[] = [];
  title = ''

  constructor() { }

  ngOnInit(): void {
  }

}
