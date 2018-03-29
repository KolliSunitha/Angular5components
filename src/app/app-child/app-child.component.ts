import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {
  @Input() message: String;
  greetMessage: String ="Welcome Kid Component";
  // _greetMessage : String;

  constructor() { }

  ngOnInit() {
  }



/*@Input()
set greetMessage(childmessage : String) {
  this._greetMessage = childmessage + "Changes in Child Component";
}
get greetMessage() {
  return this._greetMessage;
}*/
}