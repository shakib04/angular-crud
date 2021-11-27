import { Component } from "@angular/core";

@Component({
    selector: 'app-input-forms',
    templateUrl: './input-forms.component.html',
    styleUrls: ['./input-forms.component.css']
})

export class InputForms {
    getVal(value:any): void{
        console.warn(value);
    }
}