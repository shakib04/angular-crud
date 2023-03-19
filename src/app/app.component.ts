import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-tour-of-heroes';
  public books!: Book[];

  constructor(private bookService: BookService){}

ngOnInit(){
  this.getBooks();
}

  public getBooks(): void {
    alert('hello')
  }
}
