import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ChartForStudentComponent } from './students/chart-for-student/chart-for-student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddParentsComponent } from './parents/add-parents/add-parents.component';
import { AllParentsComponent } from './parents/all-parents/all-parents.component';
import { EditParentsComponent } from './parents/edit-parents/edit-parents.component';
import { AboutStudentComponent } from './students/about-student/about-student.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { NavigateComponent } from './navigate/navigate.component';
import { RouterOutlet } from '@angular/router';
import { StudyYearComponent } from './sittings/study-year/study-year.component';
import { StagesGradesComponent } from './sittings/stages-grades/stages-grades.component';
import { SchoolInfoComponent } from './sittings/school-info/school-info.component';
import { GradesComponent } from './sittings/stages-grades/grades/grades.component';
import { DivisionComponent } from './sittings/stages-grades/division/division.component';
import { ActionComponent } from './action/action.component';
import { StudentsComponent } from './students/students.component';

const components = [
  DashboardComponent,
  HeaderComponent,
  PageHeaderComponent,
  AddParentsComponent,
  AllParentsComponent,
  EditParentsComponent,
  SidebarComponent,
  AboutStudentComponent,
  AddStudentComponent,
  ChartForStudentComponent,
  EditStudentComponent,
  TeachersComponent,
  NavigateComponent,
  StudyYearComponent,
  StagesGradesComponent,
  SchoolInfoComponent,
  StudentsComponent,
  GradesComponent,
  ActionComponent,
  DivisionComponent
];

const modules = [
  FormsModule,
  CommonModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  ReactiveFormsModule,
  RouterOutlet,
  FormsModule, MatFormFieldModule, MatInputModule,
  
];

@NgModule({
  declarations: components,
  imports: [
    ...modules,
    AdminRoutingModule,
  ],
  exports: [
    ...components,...modules
  ]
})
export class AdminModule { 
  
}
