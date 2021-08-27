import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListBookComponent} from "./components/book/list-book/list-book.component";
import {AddBookComponent} from "./components/book/add-book/add-book.component";
import {UpdateBookComponent} from "./components/book/update-book/update-book.component";
import {DetailBookComponent} from "./components/book/detail-book/detail-book.component";

const routes: Routes = [
  {
    path:'books',
    component:ListBookComponent
  },
  {
    path:'book/create',
    component:AddBookComponent
  },
  {
    path:'book/edit/:id',
    component:UpdateBookComponent
  },
  {
    path:'book/detail/:id',
    component:DetailBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
