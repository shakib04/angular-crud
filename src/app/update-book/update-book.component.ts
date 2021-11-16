import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  id!: number
  book: Book = new Book()

  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data
    },error => console.log(error));
  }

  onSubmit() {
    //console.log(this.book);
    this.bookService.updateBook(this.book).subscribe(data => {
      this.gotoBookList();
    })
  }

  gotoBookList() {
    this.router.navigate(['/books']);
  }

}
