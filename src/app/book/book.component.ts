import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { PREFERRED_BOOKS, prefferedBooksFactory } from './preferred-books';


const Java_Book = new Book('Learning Angular', 'JavaScript');
export const HELLO_MESSAGE = new InjectionToken<string>('Hello');

@Component({
  selector: 'app-book',
  providers : [BookService,
    { provide:Book, useValue : Java_Book } ,
    { provide:PREFERRED_BOOKS , useFactory: prefferedBooksFactory(3),deps:[Book, BookService] }
  ],
  template: `
    <h1>PrefferedBooks {{preferredbooks}}</h1>`
  
})
export class BookComponent implements OnInit {
  //constructor(private book : Book, @Inject(HELLO_MESSAGE) private message : string) { }
  constructor(@Inject(PREFERRED_BOOKS) private preferredbooks : string) { }

  ngOnInit() {
  }

}
