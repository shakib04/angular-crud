import {Component} from "@angular/core";
import {UploadMultipleFilesService} from "./upload-multiple-files.service";
import {Observable} from "rxjs";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  'selector': 'upload-multiple-file',
  'templateUrl' : './upload-multiple-file-component.html'
})

export class UploadMultipleFileComponent {

  selectedFiles!: FileList;
  progressInfos: any[] = [];
  message = '';
  fileInfos!: Observable<any>;
  constructor(private uploadService: UploadMultipleFilesService) { }

  selectFiles(event: any):void{
    this.progressInfos = []
    this.selectedFiles = event.target.files;
  }

  uploadFiles():void{
    this.message = '';
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
  }

  private upload(idx: number, file: File):void {
    this.progressInfos[idx] = {value: 0, fileName: file.name }
    this.uploadService.upload(file).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress){
        this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total!);
      }else if (event instanceof HttpResponse){
        this.fileInfos = this.uploadService.getFiles();
      }
    }, error => {
      this.progressInfos[idx].value = 0
      this.message = 'Could not upload the files' + file.name;
    })


  }
}
