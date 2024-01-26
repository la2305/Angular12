import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GetDataComponent } from './get-data/get-data.component';
import { PostDataComponent } from './post-data/post-data.component';
import { ConComponent } from './con/con.component';
import { ChaComponent } from './cha/cha.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'templateform', component: TemplateDrivenFormComponent},
  { path: 'reactiveform', component: ReactiveFormComponent},
  { path: 'getdata', component: GetDataComponent},
  { path: 'postdata', component: PostDataComponent},
  { path: 'con', component: ConComponent},
  { path: 'cha', component: ChaComponent},
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
