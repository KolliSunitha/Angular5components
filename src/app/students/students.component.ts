import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  pageTitle : string = 'Student List';
  imagewidth: Number = 50;
  imagemargin : Number = 2;
  showImage : Boolean = false;
  listFilter :String = 'cart';
  students: any[] = [
    { 
      "studentName" : "Sunitha Kolli",
      "rollno"      : "5678",
      "marks"       : 550,
      "rank"        : 142,
      "imageUrl"    : "../assets/images/recon.jpg",
    },
    { 
      "studentName" : "Priyanka Rasaneni",
      "rollno"      : "5678",
      "marks"       : 550,
      "rank"        : 142,
      "imageUrl"    : "../assets/images/recon.jpg",
    },
    { 
      "studentName" : "Vamsee Krishna",
      "rollno"      : "5678",
      "marks"       : 550,
      "rank"        : 142,
      "imageUrl"    : "../assets/images/recon.jpg",
    },
    { 
      "studentName" : "Prem Kumar",
      "rollno"      : "5678",
      "marks"       : 550,
      "rank"        : 142,
      "imageUrl"    : "../assets/images/recon.jpg",
    }

    

  ];
   toggleImage() : void {
    this.showImage = !this.showImage;
  }
  constructor() { }

  ngOnInit() {
  }

}
