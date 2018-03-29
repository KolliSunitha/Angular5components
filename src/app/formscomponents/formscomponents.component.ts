import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-formscomponents',
  templateUrl: './formscomponents.component.html'})
export class FormscomponentsComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
 
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
 
  submitted = false;
 

  onSubmit() { this.submitted = true; }
 
  newHero() {
    this.model = new Hero(42, '', '');
  }
  
  constructor() { }

  ngOnInit() {
  }

}
