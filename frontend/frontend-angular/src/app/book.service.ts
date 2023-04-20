import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  
  private url = "http://localhost:8085/books";

  constructor(private http: HttpClient) { }

  // Add book
  addBook(book: Book): Observable<Book>{
    return this.http.post<Book>(`${this.url}`, book)
  }

  // Get books - Read
  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.url)
  }

  // Get Book by Id - Read
  getBookById(bookId: number): Observable<Book>{
    return this.http.get<Book>(`${this.url}/${bookId}`)
  }

  // Update book - Update
  updateBook(bookId: number, book: Book): Observable<Object>{
    return this.http.put(`${this.url}/${bookId}`, book)
  }

  // Delete book - Delete
  deleteBook(bookId: number): Observable<Object>{
    return this.http.delete(`${this.url}/${bookId}`)
  }
}
