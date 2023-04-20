import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {
  book: Book = new Book();

  constructor(private service: BookService, private router: Router){

  }

  addBook(){
    this.service.addBook(this.book).subscribe(data => {
      this.router.navigate(['/all']);
    })
  }

  onSubmit(){
    this.addBook();
  }
}
