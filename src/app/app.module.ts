import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

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
import { BitsPoliciesComponent } from './bits-policies/bits-policies.component';

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
    BitsPoliciesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
