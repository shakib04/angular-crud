import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books!: Book[]

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    })
  }

  updateBook(id: number) {
    this.router.navigate(['update-book', id])
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(data => {
      this.getBooks();
    });
  }

}
