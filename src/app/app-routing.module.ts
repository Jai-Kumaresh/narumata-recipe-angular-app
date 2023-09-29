import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'edit/:id', component: AddComponent},
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
