import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faSquare, faCheckSquare, faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  constructor(
    private modalService: NgbModal, 
    private library: FaIconLibrary) 
   {
      library.addIcons(faTimes, faPencilAlt);
   }

  ngOnInit(): void {
  }

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }


  

}
