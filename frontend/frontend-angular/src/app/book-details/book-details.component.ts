import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookId!: number;
  book! : Book;
  
  constructor(private route: ActivatedRoute, private service: BookService) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['bookId'];

    this.book = new Book();
    this.service.getBookById(this.bookId).subscribe( data => {
      this.book = data;
    });
  }
}
