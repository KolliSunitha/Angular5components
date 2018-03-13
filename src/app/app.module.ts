import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SamplecomponentComponent } from './samplecomponent/samplecomponent.component';
import { ExpressioncomponentComponent } from './expressioncomponent/expressioncomponent.component';

import { AppChildComponent } from './app-child/app-child.component';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [
    AppComponent,
    SamplecomponentComponent,
    ExpressioncomponentComponent,
    
    AppChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
