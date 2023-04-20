import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] | undefined;

  constructor(private service: BookService, private router: Router){
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.service.getBooks().subscribe(data => {
      this.books = data;
    })
  }

  getBookById(bookId: number){
    this.router.navigate(['/getById', bookId]);
  }

  updateBook(bookId: number){
    this.router.navigate(['/update', bookId]);
  }

  deleteBook(bookId: number){
    this.service.deleteBook(bookId).subscribe(data => {
      console.log(data);
      this.getBooks();
    });
  }
  
}