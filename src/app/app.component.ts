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
  this.getBookes(); 
}

src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  public getBookes(): void {
    // this.bookService.getBooks().subscribe(
    //   (response: Book[]) => {
    //     //this.books = response;
    //     console.log(this.books);
    //   },
    //   (error: HttpErrorResponse) => {
    //     //alert(error.message);
    //   }
    // );
  }
}
