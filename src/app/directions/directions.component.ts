import { Component, OnInit } from '@angular/core';
//import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})
export class DirectionsComponent implements OnInit {
 person: string = 'Sohan';
 //students: any[] = [];
 //myDir : any[] = [{'dirEnum':'East'} ,{'dirEnum':'West'} ,{'dirEnum':'North'},{'dirEnum':'South'}];
 //myDir : any[] = [{'dirEnum':'East West North South'}];
  constructor() { }

  ngOnInit() {
  }

  

}
