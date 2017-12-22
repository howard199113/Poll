import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogregComponent } from './logreg/logreg.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { PollComponent } from './poll/poll.component';





const routes: Routes = [
  {
    path: '',
    component: LogregComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/create',
    component: CreateComponent
  },
  {
    path: 'home/poll/:qid',
    component: PollComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
