package com.springboot.backend.service;

import com.springboot.backend.exception.ResourceNotFoundException;
import com.springboot.backend.model.Book;
import com.springboot.backend.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {
    @Autowired
    BookRepository bookRepository;

    @Override
    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public Book getBookById(Long bookId) {
        return bookRepository.findById(bookId).
                orElseThrow(() -> new ResourceNotFoundException("Book not exist with id" + bookId));
    }

    @Override
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public void deleteBookById(Long bookId) {
        bookRepository.deleteById(bookId);
    }

    @Override
    public Book updateBook(Long bookId, Book book) {
        Book book1 = bookRepository.findById(bookId)
                .orElseThrow(() -> new ResourceNotFoundException("Boot not exist with id " + bookId));
        book1.setName(book.getName());
        book1.setSummary(book.getSummary());
        book1.setRating(book.getRating());

        Book updatedBook = bookRepository.save(book1);

        return updatedBook;
    }
}




