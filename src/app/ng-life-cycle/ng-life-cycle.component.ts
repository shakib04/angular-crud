import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-life-cycle',
  templateUrl: './ng-life-cycle.component.html',
  styleUrls: ['./ng-life-cycle.component.css']
})
export class NgLifeCycleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
