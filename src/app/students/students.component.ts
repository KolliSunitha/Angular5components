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
  _listFilter :string;
  get listFilter():string {
    return this._listFilter;
  }
  set listFilter(value:string) {
    this._listFilter = value ;
    this.filteredstudents = this.listFilter ? this.performFilter(this.listFilter) : this.students;
  }
  filteredstudents : IStudents[];
  students: IStudents[] = [
    { 
      "studentName" : "Sunitha Kolli",
      "rollno"      : "abc-5678",
      "marks"       : 550,
      "rank"        : 1.5,
      "imageUrl"    : "../assets/images/recon.jpg",
    },
    { 
      "studentName" : "Priyanka Rasaneni",
      "rollno"      : "xyz-5678",
      "marks"       : 55035,
      "rank"        : 3.5,
      "imageUrl"    : "../assets/images/recon.jpg",
    },
    { 
      "studentName" : "Vamsee Krishna",
      "rollno"      : "pqr-5678",
      "marks"       : 55045,
      "rank"        : 4.2,
      "imageUrl"    : "../assets/images/recon.jpg",
    },
    { 
      "studentName" : "Prem Kumar",
      "rollno"      : "tuv-5678",
      "marks"       : 55055,
      "rank"        : 1.2,
      "imageUrl"    : "../assets/images/recon.jpg",
    }

    

  ];
  constructor () {
    this.filteredstudents = this.students;
    this.listFilter = 'kolli';

  }
  onGradeClicked(message : string) :void {
    this.pageTitle = 'Student List : '+ message;
  }
  performFilter (filterBy : string) : IStudents[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.students.filter((students: IStudents) =>
      students.studentName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  
  }
   toggleImage() : void {
    this.showImage = !this.showImage;
  }
  
  ngOnInit() :void {
    console.log('In onInit');
  }

}
