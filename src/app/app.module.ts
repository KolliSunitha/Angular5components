import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { SamplecomponentComponent } from './samplecomponent/samplecomponent.component';
import { ExpressioncomponentComponent } from './expressioncomponent/expressioncomponent.component';

import { AppChildComponent } from './app-child/app-child.component';
import { ParentComponent } from './parent/parent.component';
import { DirectionsComponent } from './directions/directions.component';


@NgModule({
  declarations: [
    AppComponent,
    SamplecomponentComponent,
    ExpressioncomponentComponent,
    StudentsComponent,
    AppChildComponent,
    ParentComponent,
    DirectionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
