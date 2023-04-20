package com.springboot.backend.service;

import com.springboot.backend.model.Book;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BookService {
    public Book addBook(Book book);
    public Book getBookById(Long bookId);
    public List<Book> getAllBooks();
    public void deleteBookById(Long bookId);
//    public Book updateBook(Book book);
    public Book updateBook(Long bookId, Book book);
}
