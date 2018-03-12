import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expressioncomponent',
  templateUrl: './expressioncomponent.component.html',
  styleUrls: ['./expressioncomponent.component.css']
})
export class ExpressioncomponentComponent implements OnInit {

  title123 = 'Latest News';
  city = 'Varanasi';
  primeUser = {
    name: {
	    fname : 'Sunitha',
      lname : 'Kolli'
	  },
	  gender : 'Mrs'
  } 

  constructor() { }

  ngOnInit() {
    
  }

}
