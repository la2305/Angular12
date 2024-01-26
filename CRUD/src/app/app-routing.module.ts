import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "list", component: StudentListComponent},
  { path: "create", component: CreateStudentComponent},
  { path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
