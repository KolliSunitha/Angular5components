import {Component } from '@angular/core';

@Component ({
    selector :'app-keyup',
    template : `
    <input (keyup) ="onKey($event)">
    <p>{{values}}</p>`
})

export class KeyUpComponent {
    values ='';


    onKey(event :KeyboardEvent) {
      // this.values = '';
        this.values += (<HTMLInputElement>event.target).value + '|'; 
    }
}