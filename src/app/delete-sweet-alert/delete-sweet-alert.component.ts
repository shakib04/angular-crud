import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SuccessSweetAlertComponent } from "../success-sweet-alert/success-sweet-alert.component";

@Component({
  selector: 'app-delete-sweet-alert',
  templateUrl: './delete-sweet-alert.component.html',
  styleUrls: ['./delete-sweet-alert.component.css']
})
export class DeleteSweetAlertComponent implements OnInit {

  closeResult = '';

  constructor(private modalService: NgbModal) { }

  open(content2: any, content: any) {
    this.modalService.open(content2, { ariaLabelledBy: 'modal-delete-titl2' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (result == 'Yes') {
        console.log(content2);
        this.modalService.open(content);
      }
      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }

  }
  ngOnInit(): void {
  }

}
