import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookListComponent } from '../book-list/book-list.component';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {


  book: Book = new Book()

  constructor(private bookService: BookService, private router: Router) { }

  saveBook() {
    this.bookService.addBook(this.book).subscribe(data => {
      console.log(data);
      this.gotoBookList();
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    //console.log(this.book);\
    this.saveBook();
  }

  gotoBookList() {
    this.router.navigate(['/books']);
  }

}
