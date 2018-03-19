import { Component, style, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component ({
 selector: 'app-star',
templateUrl :  './star.component.html',
})

    

export class StarComponent implements OnChanges {
   @Input() grade : number;
    starWidth : number;
    @Output() gradeClicked: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges() : void {
        this.starWidth = this.grade * 86 /5 ;
    }

    onClick(): void{
            this.gradeClicked.emit(`Grading ${this.grade} was clicked`);

    }

}
