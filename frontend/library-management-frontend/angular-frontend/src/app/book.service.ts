import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseURL: string;

  constructor(private httpClient: HttpClient) { 
    this.baseURL = "http://localhost:8085/books"
  }

  getBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }

  createBook(book: Book): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, book);
  }

  getBookById(bookId: number): Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseURL}/${bookId}`);
  }
}
