import {HttpClient, HttpResponse} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FileUploadService {
  // API url
  baseApiUrl = "https://file.io";

  constructor(private http: HttpClient) {}

  // Returns an observable
  upload(file: any): Observable<any> {
    // Create form data
    const formData = new FormData();
    console.log(formData);

    // Store form name as "file" with file data
    formData.append("file", file, file.name);
    console.log(file);
    console.log(formData);

    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl, formData);
  }

  upload2(file: any): Observable<any> {
    // Create form data
    const formData = new FormData();
    console.log(formData);

    // Store form name as "file" with file data
    formData.append("file", file, file.name);
    console.log(file);
    console.log(formData);

    // Make http post request over api
    // with formData as req
    return this.http.post("http://localhost:8082/file/upload", formData);
  }

  uploadMultiple(files: any):Observable<any>{
    const formData = new FormData();
    formData.append('files', files);
    for (const file of files){
      const ss:File = file;
      formData.append('files', ss);
    }
    console.log(files)
    console.log(formData);
    return this.http.post("http://localhost:8082/file/upload/multiple", formData);
  }

  uploadMultiple2(formData: FormData):Observable<any>{
    //formData.append('files', files);

    //console.log(files)
    //console.log(formData);
    return this.http.post("http://localhost:8082/file/upload/multiple", formData, {observe: 'response'});
  }
}
