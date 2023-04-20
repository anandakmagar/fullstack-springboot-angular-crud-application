package com.springboot.backend.controller;

import com.springboot.backend.model.Book;
import com.springboot.backend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class BookController {
    @Autowired
    BookService bookService;

    @PostMapping("/books")
    public Book addBook(@RequestBody Book book){
        return bookService.addBook(book);
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<Book> getBookById(@PathVariable("id") Long bookId){
//        Book book = bookService.getBookById(bookId);
//        return ResponseEntity.ok(book);
//    }

    @DeleteMapping("/books/{bookId}")
    public void deleteBookById(@PathVariable("bookId") Long bookId){
        bookService.deleteBookById(bookId);
    }
    @GetMapping("/books/{bookId}")
    public Book getBookById(@PathVariable("bookId") Long bookId){
        return bookService.getBookById(bookId);
    }

    @GetMapping("/books")
    public List<Book> getAllBooks(){
        return bookService.getAllBooks();
    }

//    @PutMapping("/update")
//    public Book updateBook(@RequestBody Book book){
//        return bookService.updateBook(book);
//
//    }

    @PutMapping("/books/{bookId}")
    public ResponseEntity<Book> updateBook(@PathVariable Long bookId, @RequestBody Book book){
        return ResponseEntity.ok(bookService.updateBook(bookId, book));
    }

//    @PutMapping("/books/{bookId}")
//    public ResponseEntity<Book> updateBook(@PathVariable Long bookId, @RequestBody Book book){
//        Employee employee = employeeRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
//
//        employee.setFirstName(employeeDetails.getFirstName());
//        employee.setLastName(employeeDetails.getLastName());
//        employee.setEmailId(employeeDetails.getEmailId());
//
//        Employee updatedEmployee = employeeRepository.save(employee);
//        return ResponseEntity.ok(updatedEmployee);
//    }
}