import { Component, OnInit } from '@angular/core';
import { IStudents } from './students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
 // styles :['thead {color :#33ADEF;}']
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  pageTitle : string = 'Student List';
  imagewidth: Number = 50;
  imagemargin : Number = 2;
  showImage : Boolean = false;
  listFilter :String = 'cart';
  students: IStudents[] = [
    { 
      "studentName" : "Sunitha Kolli",
      "rollno"      : "abc-5678",
      "marks"       : 550,
      "rank"        : 142,
      "imageUrl"    : "../assets/images/recon.jpg",
    },
    { 
      "studentName" : "Priyanka Rasaneni",
      "rollno"      : "xyz-5678",
      "marks"       : 55035,
      "rank"        : 142,
      "imageUrl"    : "../assets/images/recon.jpg",
    },
    { 
      "studentName" : "Vamsee Krishna",
      "rollno"      : "pqr-5678",
      "marks"       : 55045,
      "rank"        : 142,
      "imageUrl"    : "../assets/images/recon.jpg",
    },
    { 
      "studentName" : "Prem Kumar",
      "rollno"      : "tuv-5678",
      "marks"       : 55055,
      "rank"        : 142,
      "imageUrl"    : "../assets/images/recon.jpg",
    }

    

  ];
   toggleImage() : void {
    this.showImage = !this.showImage;
  }
  constructor() { }

  ngOnInit() :void {
    console.log('In onInit');
  }

}
