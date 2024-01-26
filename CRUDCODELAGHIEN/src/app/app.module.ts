import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentListComponent,
    CreateStudentComponent,
    EditStudentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
