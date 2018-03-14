import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  pageTitle : string = 'Student List';
  students: any[] = [
    { 
      "studentName" : "Sunitha Kolli",
      "rollno"      : "5678",
      "marks"       : 550,
      "rank"        : 142,
      "imageUrl"    : "./asset/images/recon.jpg",
    },
    { 
      "studentName" : "Priyanka Rasaneni",
      "rollno"      : "5678",
      "marks"       : 550,
      "rank"        : 142,
      "imageUrl"    : "./asset/images/recon.jpg",
    },
    { 
      "studentName" : "Vamsee Krishna",
      "rollno"      : "5678",
      "marks"       : 550,
      "rank"        : 142,
      "imageUrl"    : "./asset/images/recon.jpg",
    },
    { 
      "studentName" : "Prem Kumar",
      "rollno"      : "5678",
      "marks"       : 550,
      "rank"        : 142,
      "imageUrl"    : "./asset/images/recon.jpg",
    }

    

  ];
  constructor() { }

  ngOnInit() {
  }

}
