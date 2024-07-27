import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/dropdown';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { EmployeetableComponent } from './employeetable/employeetable.component';
import { DialogModule } from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';

@NgModule({
  declarations: [AppComponent, EmployeeformComponent, EmployeetableComponent],
  imports: [
    BrowserModule,
    DropdownModule,
    TriStateCheckboxModule,
    ButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CalendarModule,
    InputTextareaModule,ReactiveFormsModule, HttpClientModule, AppRoutingModule, DialogModule, FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}