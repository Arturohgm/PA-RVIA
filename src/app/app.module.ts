import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IdGeneratorComponent } from './id-generator/id-generator.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    IdGeneratorComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }