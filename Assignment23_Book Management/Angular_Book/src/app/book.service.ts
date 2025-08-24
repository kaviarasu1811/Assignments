import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book.model';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:3000/books';  // API endpoint

  constructor(private http: HttpClient) {}

  // Get all books
  getBooks(): Observable<Book[]> {
  return this.http.get<Book[]>('http://localhost:3000/books'); // ✅ make sure backend is running
}


  // Add a new book
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }
}