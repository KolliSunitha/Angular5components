import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { Book } from './book';


const Java_Book = new Book('Learning Angular', 'JavaScript');
export const HELLO_MESSAGE = new InjectionToken<string>('Hello');

@Component({
  selector: 'app-book',
  providers : [
    { provide:Book, useValue : Java_Book } ,
    { provide:HELLO_MESSAGE , useValue: 'Hello World !!!' }
  ],
  template: `<p>Book Name :<b>{{book.name}}</b></p>
  <p>Category : <b>{{book.category}}</b></p>
  <p>Message : <b>{{message}}</b></p>`
  
})
export class BookComponent implements OnInit {
  constructor(private book : Book, @Inject(HELLO_MESSAGE) private message : string) { }

  ngOnInit() {
  }

}
