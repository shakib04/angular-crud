import {Component, ContentChild, ElementRef, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() items:string[] = [];
  @Input() newItem!:string;

  @ContentChild("testPara2") testPara2!: ElementRef;

  constructor() {
    console.log("contractor called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called")
    console.log(changes)
  }

  ngOnInit(): void {
    console.log(`ng onInit called`)
  }

  ngAfterContentInit(){
    console.log("after content init " + this.testPara2.nativeElement.textContent);
  }

  ngOnDestroy(){
    console.log('footer destroyed')
  }

  changeParaText():void {
    this.newItem = this.newItem.toLowerCase();
  }
}
