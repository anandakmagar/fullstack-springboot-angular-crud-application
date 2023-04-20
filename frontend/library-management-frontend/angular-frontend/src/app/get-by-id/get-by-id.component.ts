import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent implements OnInit {
  book: Book = new Book();
  bookId!: number;
  

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService){
  }

  ngOnInit(): void {
    
  }

  getBookById(bookId: number) {
    this.bookId = this.route.snapshot.params['bookId'];

    this.book = new Book();
    this.bookService.getBookById(this.bookId).subscribe(data => {
      this.book = data;
    });
    
  }
}

