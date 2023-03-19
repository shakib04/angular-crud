import { Component, OnInit } from '@angular/core';
import {FileTestService} from "./file-test.service";

@Component({
  selector: 'app-file-test',
  templateUrl: './file-test.component.html',
  styleUrls: ['./file-test.component.css']
})
export class FileTestComponent implements OnInit {

  constructor(public fileTestService: FileTestService) { }

  ngOnInit(): void {
  }

  downloadFile() {
    this.fileTestService.downloadFile().subscribe(response => {
      console.log(response);
      var binaryData = [];
      binaryData.push(response.data);
      var url = window.URL.createObjectURL(new Blob(binaryData));
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.setAttribute('target', 'blank');
      a.href = url;
      a.download = response.filename;
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
      console.log('download success')
    }, ()=>{
      console.warn('failed to download');
    })
  }

  downloadFile2() {
    this.fileTestService.downloadFile2().subscribe(res => {
      console.log('download success')
    }, (err)=>{
      console.warn('failed to download');
      console.log(err)
    })
  }
}
