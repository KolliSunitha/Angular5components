import { Component, OnInit } from '@angular/core';
import { AppChildComponent } from '../app-child/app-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  message : string = "I am Parent";
  //childmessage : string = "I am passed from Parent to child component"
  constructor() { }

  ngOnInit() {
  }

}
