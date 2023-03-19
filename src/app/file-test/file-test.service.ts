import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../book.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileTestService {

  constructor(private http : HttpClient) { }

  d2  = 'downloadLargeFile2';

  public downloadFile(): Observable<any> {
    return this.http.get(`http://localhost:8082/your-api/get-video-file`, { responseType: 'blob' });
  }

  public downloadFile2(): Observable<Book[]> {
    return this.http.get<Book[]>(`http://localhost:8082/${(this.d2)}`);
  }
}
