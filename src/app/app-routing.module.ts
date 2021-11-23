import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliciesComponent } from './bits-files/policies/policies.component';
import { TemplatesComponent } from './bits-files/templates/templates.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';


const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'create-book', component: CreateBookComponent },
  { path: 'update-book/:id', component: UpdateBookComponent },
  { path: 'bits-policies', component: PoliciesComponent },
  { path: 'bits-templates', component: TemplatesComponent },
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
