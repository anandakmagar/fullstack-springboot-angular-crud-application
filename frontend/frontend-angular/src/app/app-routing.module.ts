import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {path: 'all', component: BookListComponent},
  {path: 'getById/:bookId', component: BookDetailsComponent},
  {path: 'add', component: CreateBookComponent},
  {path: 'update/:bookId', component: UpdateBookComponent}
  // {path: 'delete', component: DeleteBookCOmponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
