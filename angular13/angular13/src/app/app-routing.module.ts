import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDataComponent } from './post-data/post-data.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GetDataComponent } from './get-data/get-data.component';

const routes: Routes = [
  { path: "",component: HomeComponent},
  { path: "getdata",component:GetDataComponent},
  { path: "postdata", component:PostDataComponent},
  { path: "**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
