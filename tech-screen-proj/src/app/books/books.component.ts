import { Component, OnInit } from '@angular/core';
import { Book } from '../books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// books: Book[] = [
//   new Book(title, author, img, id),
//   new Book("Village life", "AM", "bjkj", 3),
//   new Book("Her", "Andrei Mosanu",
//       "300.00.", 3)
// ];
