import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { SamplecomponentComponent } from './samplecomponent/samplecomponent.component';
import { ExpressioncomponentComponent } from './expressioncomponent/expressioncomponent.component';

import { AppChildComponent } from './app-child/app-child.component';
import { ParentComponent } from './parent/parent.component';
import { DirectionsComponent } from './directions/directions.component';
import { CovertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { FormscomponentsComponent } from './formscomponents/formscomponents.component';
import { ClickMeComponent } from './formscomponents/click-me.component';
import { KeyUpComponent } from './formscomponents/keyup.component';
import { loopBackComponent } from './formscomponents/loopback.component';
import { userInputComponent } from './formscomponents/userinput.component';
import { ObservablesComponent } from './observables/observables.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalService } from './animal-details/services/animal.service';
import { AnyAnimalComponent } from './animal-details/any-animal.component';
import { LionComponent } from './animal-details/lion.component';
import { CowComponent } from './animal-details/cow.component';
import { ComputerComponent } from './computer/computer.component';
import { BookComponent } from './book/book.component';
import { PipesComponent } from './pipes/pipes.component';



@NgModule({
  declarations: [
    AppComponent,
    SamplecomponentComponent,
    ExpressioncomponentComponent,
    StudentsComponent,
    AppChildComponent,
    ParentComponent,
    DirectionsComponent,
    CovertToSpacesPipe,
    StarComponent,
    FormscomponentsComponent,
    ClickMeComponent,
    KeyUpComponent,
    loopBackComponent,
    userInputComponent,
    ObservablesComponent,
    AnimalDetailsComponent,
    AnyAnimalComponent,
    LionComponent,
    CowComponent,
    ComputerComponent,
    BookComponent,
    PipesComponent
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
