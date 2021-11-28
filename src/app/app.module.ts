import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here

import { PdfViewerModule } from 'ng2-pdf-viewer';// <- import PdfViewerModule

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { SuccessSweetAlertComponent } from './success-sweet-alert/success-sweet-alert.component';
import { DeleteSweetAlertComponent } from './delete-sweet-alert/delete-sweet-alert.component';
import { PoliciesComponent } from './bits-files/policies/policies.component';
import { TemplatesComponent } from './bits-files/templates/templates.component';
import { PdfComponent } from './pdf/pdf.component';
import { FormsComponent } from './bits-files/forms/forms.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UploadPolicyComponent } from './bits-files/upload-policy/upload-policy.component';
import { UploadTemplatesComponent } from './bits-files/templates/upload-templates.component';
import { EditTemplatesComponent } from './bits-files/templates/edit-templates.component';
import { InputForms } from './inputs/input-forms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTableFiltering } from './search/table-filtering';
import { NgbdTableFilteringModule } from './search/table-filtering.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    BookListComponent,
    CreateBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    SuccessSweetAlertComponent,
    DeleteSweetAlertComponent,
    PoliciesComponent,
    TemplatesComponent,
    PdfComponent,
    FormsComponent,
    UploadPolicyComponent,
    UploadTemplatesComponent,
    EditTemplatesComponent,
    InputForms
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule, 
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
