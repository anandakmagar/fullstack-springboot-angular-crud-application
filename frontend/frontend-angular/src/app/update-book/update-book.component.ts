import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookId!: number;
  name!: string;
  summary!: string;
  rating!: number;

  book: Book = new Book();
  
  constructor(private service: BookService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.bookId = this.route.snapshot.params['bookId'];
  
      this.service.getBookById(this.bookId).subscribe(data => {
        this.book = data;
      }, error => console.log(error));
    }
  
    onSubmit(){
      this.service.updateBook(this.bookId, this.book).subscribe( data =>{
        this.goToBookList();
      }
      , error => console.log(error));
    }
  
    goToBookList(){
      this.router.navigate(['/all']);
    }


}

