import { DecimalPipe } from "@angular/common";
import { Component, OnInit, PipeTransform } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { ITimeRange, TimeRange } from "./time-range.model";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-input-forms',
    templateUrl: './input-forms.component.html',
    styleUrls: ['./input-forms.component.css'],
    providers: [DecimalPipe]
})

export class InputForms implements OnInit{

    
    name = new FormControl('');
    nameString = String;

    langs = ['bn', 'en', 'hindi', 'russia', 'german']
    filteredLangs = this.langs;

    constructor() {
        
    }
    ngOnInit(): void {
        console.log(`test`);
        
    }

    afterChange(): void{
        //console.log(this.name.value);
         this.filteredLangs = this.langs.filter(lang => {
            if (lang.match(this.name.value)) {
                return lang;
            }
            return;
        })
        console.log(this.filteredLangs.length);
        
    }

    getVal(value: any): void{
        console.warn(value);
    }

    updateName() { 
        if (this.name.value === 'shakib') {
            alert('matched')
        } else {
            alert('not matched')
        }
        this.nameString = this.name.value;
        //this.name.setValue("hi, shakib")
    }

    
}