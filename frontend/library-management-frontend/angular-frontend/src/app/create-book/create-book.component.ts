import { Component } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {
  book: Book = new Book();

  constructor(private bookService: BookService, private router: Router){

  }

  createBook(){
    this.bookService.createBook(this.book).subscribe(data => {
      this.router.navigate(['/all']);
    })
  }

  onSubmit(){
    this.createBook();
  }

}
