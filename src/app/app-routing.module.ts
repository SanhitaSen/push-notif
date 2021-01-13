import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { ShowToDoComponent } from './show-to-do/show-to-do.component';

const routes: Routes = [
  {path: 'add', component: AddToDoComponent}, 
  {path: 'show', component: ShowToDoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }