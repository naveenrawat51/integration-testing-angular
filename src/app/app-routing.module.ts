import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { AllPostComponent } from './all-post/all-post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostDetailsComponent } from './post-details/post-details.component';

export const routes: Routes = [
  { path:'', component: CounterComponent },
  { path:'allpost', component: AllPostComponent },
  { path: 'postDetails', component: PostDetailsComponent },
  { path: 'not-found', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
