package com.springboot.backend.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@Entity
@Table(name="book_table")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long bookId;
    @NonNull
    private String name;
    @NonNull
    private String summary;
    private int rating;
}