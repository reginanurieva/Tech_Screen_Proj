import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BooksComponent } from './books/books.component';
import { FooterComponent } from './footer/footer.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooksComponent,
    FooterComponent,
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
