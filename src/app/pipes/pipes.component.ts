import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  newValue: number = 123; 
  perValue: number = 0.123; 
  newdate = new Date(2018, 2, 29); 
  TutorialName: string = 'Angular JS2'; 
   appList: string[] = ["Binding", "Display", "Services"]; 
  constructor() { }

  ngOnInit() {
  }

}
