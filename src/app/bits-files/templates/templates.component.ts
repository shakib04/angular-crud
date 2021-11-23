import { Component, OnInit } from '@angular/core';
//import { type } from 'os';
import { TemplatesService } from './templates.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  constructor(
    protected templatesService: TemplatesService,
  ) { }

  ngOnInit(): void {
  }

  public showPDF(fileName: string, fileUri: string, fileType: string): void {
    this.templatesService.getPDF(fileUri)
      .subscribe(x => {
        // It is necessary to create a new blob object with mime-type explicitly set
        // otherwise only Chrome works like it should
        //application/pdf
        //
        var newBlob;

        if (fileType == "docx") {
          newBlob = new Blob([x], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
        } else if (fileType == "pdf") {
          newBlob = new Blob([x], { type: "application/pdf" });
        } else if (fileType == "pptx") {
          newBlob = new Blob([x], { type: "application/vnd.openxmlformats-officedocument.presentationml.presentation" })
        }
        else if (fileType == "pptx") {
          newBlob = new Blob([x], { type: "application/vnd.openxmlformats-officedocument.presentationml.presentation" })
        }

        // IE doesn't allow using a blob object directly as link href
        // instead it is necessary to use msSaveOrOpenBlob
        // if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        //     window.navigator.msSaveOrOpenBlob(newBlob, fileName);
        //     return;
        // }

        // For other browsers: 
        // Create a link pointing to the ObjectURL containing the blob.
        const data = window.URL.createObjectURL(newBlob);

        var link = document.createElement('a');
        link.href = data;
        link.download = fileName;
        // this is necessary as link.click() does not work on the latest firefox
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

        setTimeout(function () {
          // For Firefox it is necessary to delay revoking the ObjectURL
          window.URL.revokeObjectURL(data);
          link.remove();
        }, 100);
      });
  }

}
