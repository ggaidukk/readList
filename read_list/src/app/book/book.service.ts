import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor( private _httpClient: HttpClient) { }
  baseUrl: string = '/api/v1/books';

  //for get function
  fetchAllBooks(): Observable<Book[]> {
    return this._httpClient.get<Book[]>(`${this.baseUrl}`);
  }

  //for post function
  createBook(data: Book) {
    return this._httpClient.post<Book>(`${this.baseUrl}`, data);
  }

  //for put function
  updateBook(data: Book) {
    return this._httpClient.put<Book>(`${this.baseUrl}/${data.bookId}`, data);
  }

  //for delete function
  deleteBook(id: Number) {
    return this._httpClient.delete<Book>(`${this.baseUrl}/${id}`);
  }
}
