import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './successAlert/successAlert.component';
import { ErrorAlertComponent } from './errorAlert/errorAlert.component';
import { PracticingDataBindingComponent } from './practicingDataBinding/practicingDataBinding.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    ErrorAlertComponent,
    PracticingDataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
