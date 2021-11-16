import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http : HttpClient) { }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`http://localhost:8080/book`);
  }

  public addBook(book: Book): Observable<Object> {
    return this.http.post(`http://localhost:8080/book`, book);
  }

  getBookById(id: number): Observable<Book>{
    return this.http.get<Book>(`http://localhost:8080/book/${id}`)
  }

  updateBook(book: Book){
    return this.http.put(`http://localhost:8080/book/`,book)
  }

  deleteBook(id: number):Observable<Object>{
    return this.http.delete(`http://localhost:8080/book/${id}`)
  }
}
