import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http : HttpClient) { }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`http://localhost:8080/book`);
  }

  public addBook(employee: Book): Observable<Book> {
    return this.http.post<Book>(`http://localhost:8080/book`, employee);
  }
}
