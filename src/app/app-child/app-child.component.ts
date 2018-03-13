import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {
   greetMessage: String ="Welcome Kid Component";

  constructor() { }

  ngOnInit() {
  }

}
