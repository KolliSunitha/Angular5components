import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SamplecomponentComponent } from './samplecomponent/samplecomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    SamplecomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
