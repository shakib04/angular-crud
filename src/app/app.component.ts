import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit, ViewChild, OnChanges, SimpleChanges, ElementRef, ContentChild} from '@angular/core';
import {Book} from './book.model';
import {BookService} from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'angular-tour-of-heroes';
  myInput = ''
  items:string[] = []
  newItem:string= '';
  public books!: Book[];
  @ViewChild("testPara") testPara!: ElementRef;
  hideFooter: boolean = false;

  constructor(private bookService: BookService) {
    //console.log("contractor called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called")
    console.log(changes)
  }


  ngOnInit() {
    //this.getBooks();
    console.log('"view child data" ' + this.testPara?.nativeElement.innerText);
  }

  ngDoCheck(){
    console.log("calling ng do check")
  }

  ngAfterContentInit(){
    console.log('ng after content init')
  }

  ngAfterContentChecked(){
    console.log('ng after content checked')
  }

  ngAfterViewInit(){
    console.log('ng after view init')
    console.log('"view child data" ' + this.testPara?.nativeElement.innerText);
  }

  ngAfterViewChecked(){
    console.log('ng after view checked')
    console.log('"view child data" ' + this.testPara?.nativeElement.innerText);
  }

  ngDestroy(){
    console.log("destroyed app component")
  }

  public getBooks(): void {
    this.bookService.getBooks().subscribe(
      (response: Book[]) => {
        //this.books = response;
        console.log(this.books);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
      }
    );
  }

  onClickBtn(input: HTMLInputElement): void {
    this.myInput += input.value;
    this.items.push(input.value)
    this.newItem = input.value;
  }

  clickHideFooter() {
    this.hideFooter = true;
  }
}
