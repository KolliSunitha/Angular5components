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
    userInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
