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

  constructor( private bookService: BookService, private router: Router){

  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    )};
}
