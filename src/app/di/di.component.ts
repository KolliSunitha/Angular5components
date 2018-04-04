import { Component, OnInit } from '@angular/core';
import { Engine } from './Engine';
import { Tires } from './Tires';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})

export class DiComponent implements OnInit {



  public description = 'DI';

  constructor(public engine: Engine, public tires: Tires) { }
    //public engine: Engine;
   // public tires: Tires;
   // public description = 'No DI';
  
   
  
    // Method using the engine and tires
   /* drive() {
      return `${this.description} car with ` +
        `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`;
    }*/
  
  ngOnInit() {
  }
  

}
