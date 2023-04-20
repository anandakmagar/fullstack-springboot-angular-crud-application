import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: 'all', component: BookListComponent},
  {path: 'add', component: CreateBookComponent},
  {path: 'find', component: GetByIdComponent},
  {path: 'update', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
