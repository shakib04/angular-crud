import {Component, OnInit} from '@angular/core';
import {
  NgxFileDropEntry,
  FileSystemFileEntry
  // FileSystemDirectoryEntry
} from "ngx-file-drop";
import {FileUploadService} from "./file-upload.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ngx-file-drop',
  templateUrl: './ngx-file-drop.component.html',
  styleUrls: ['./ngx-file-drop.component.css']
})
export class NgxFileDropComponent implements OnInit {

  [x: string]: any;
  formData!: FormGroup;

  shortLink: string = "";
  successFullyUploadedFiles: string[] = []

  constructor(private formBuilder: FormBuilder, private fileUploadService: FileUploadService) {
  }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      files   : []
    });
  }

  public files: NgxFileDropEntry[] = [];

  public droppedAndUploadMultipleFiles(files: NgxFileDropEntry[]) {
    alert('uploading multiple files');
    const formData: FormData = new FormData();
    for (const file of files){
      const fileEntry = file.fileEntry as FileSystemFileEntry;
      fileEntry.file((ss: File) => {
        formData.append('files', ss, ss.name);
      })
    }
    /*this.fileUploadService.uploadMultiple(files).subscribe(res => {
      if (res.body === true){
        alert('done')
      }
    })*/

    this.fileUploadService.uploadMultiple2(formData).subscribe(res => {
      if (res.body === true){
        alert('done')
      }
    })
  }

  public dropped(files: NgxFileDropEntry[]) {
    if (files.length > 100) {
      window.alert("Cannot add more than 6 Files at a time.");
    } else {
      // this.files = files;
      for (const droppedFile of files) {
        // Is it a file?
        if (
          droppedFile.fileEntry.isFile &&
          this.isFileAllowed(droppedFile.fileEntry.name)
        ) {
          const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
          fileEntry.file((file: File) => {
            if (this.isFileSizeAllowed(file.size)) {
              //files array is used to display
              //the files to the user which will be uploaded
              this.files.push(droppedFile);
              if (this.files.length < 1007) {
                // Here you can access the real file
                // console.log(droppedFile.relativePath, file);
                console.log(droppedFile);

                this.fileUploadService.upload2(file).subscribe((event: any) => {
                  console.log(event);
                  if (typeof event === "object") {
                    // Short link via api response
                    this.shortLink = event.link;
                  }
                }, (error => console.log(error)));
              } else {
                window.alert("Maximum 7 files are allowed.");
              }
            } else {
              window.alert(
                "Max size of a file allowed is 2mb, files with size more than 2mb are discarded."
              );
            }
          });
        } else {
          // It was a directory (empty directories are added, otherwise only files)
          window.alert(
            "Only files in '.pdf', '.jpg', '.jpeg', '.png' format are accepted and directories are not allowed."
          );
          // const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
          // console.log(droppedFile.relativePath, fileEntry);
        }
      }
    }
  }

  isFileAllowed(fileName: string) {
    let isFileAllowed = false;
    const allowedFiles = [".pdf", ".jpg", ".jpeg", ".png", '.docx', '.zip'];
    const regex = /(?:\.([^.]+))?$/;
    const extension = regex.exec(fileName);
    if (undefined !== extension && null !== extension) {
      for (const ext of allowedFiles) {
        if (ext === extension[0]) {
          isFileAllowed = true;
        }
      }
    }
    return isFileAllowed;
  }

  isFileSizeAllowed(size: number): boolean {
    let isFileSizeAllowed = false;
    if (size < 20971520) {
      isFileSizeAllowed = true;
    }
    return isFileSizeAllowed;
  }

  public fileOver(event: any): void {
    console.log(event);
  }

  public fileLeave(event: any): void {
    console.log(event);
  }
}
