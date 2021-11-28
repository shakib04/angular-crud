import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './bits-files/forms/forms.component';
import { PoliciesComponent } from './bits-files/policies/policies.component';
import { EditTemplatesComponent } from './bits-files/templates/edit-templates.component';
import { TemplatesComponent } from './bits-files/templates/templates.component';
import { UploadTemplatesComponent } from './bits-files/templates/upload-templates.component';
import { UploadPolicyComponent } from './bits-files/upload-policy/upload-policy.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { InputForms } from './inputs/input-forms.component';
import { NgbdTableFiltering } from './search/table-filtering';
import { UpdateBookComponent } from './update-book/update-book.component';


const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'create-book', component: CreateBookComponent },
  { path: 'update-book/:id', component: UpdateBookComponent },
  { path: 'bits-policies', component: PoliciesComponent },
  { path: 'bits-templates', component: TemplatesComponent },
  { path: 'bits-forms', component: FormsComponent },
  { path: 'upload-policy', component: UploadPolicyComponent },
  { path: 'upload-templates', component: UploadTemplatesComponent },
  { path: 'edit-templates', component: EditTemplatesComponent },
  { path: 'dummy-input', component: InputForms },
  { path: 'search-table', component: NgbdTableFiltering },
  //{ path: '', redirectTo:'books',pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {
  //https://youtu.be/G46fjVzQ7BQ?t=5294
}
