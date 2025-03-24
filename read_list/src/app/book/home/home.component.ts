import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Book } from '../book';
import { BookService } from '../book.service';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, FormsModule, MatButtonModule, MatIconModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements AfterViewInit {
  startDate: Date | null = null;
  endDate: Date | null = null;
  rating: number = 1;
  displayedColumns: string[] = ['bookId', 'title', 'author', 'startDate', 'endDate', 'rating', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Book>();

  constructor(private bookService: BookService){}

  book: Book= {
    bookId: 0,
    title: '',
    author: '',
    // startDate: new Date(),
    startDate: null,
    // endDate: new Date(),
    endDate: null,
    rating: 0
  }
  books: Book[] = [];
  filteredBooks: Book[] = [];

  @ViewChild(MatSort) sort: any;
  @ViewChild(MatPaginator) paginator: any;
  
  //for table
  ngAfterViewInit(): void {
    this.bookService.fetchAllBooks().subscribe((data)=>{
      this.books = data;
      this.dataSource = new MatTableDataSource<Book>(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  //for search
  searchBooks(input: string){
    this.filteredBooks = this.books.filter(item => item.title.toLowerCase().includes(input.toLowerCase())
    || item.author.toLowerCase().includes(input.toLowerCase())
    || item.rating.toString().includes(input));
    this.dataSource = new MatTableDataSource<Book>(this.filteredBooks);
  }

  //for add button
  addOrUpdateBook(book: Book){
    if(book.bookId !== 0){
      //update
      this.bookService.updateBook(book).subscribe({
        next: (data) => {
          console.log('Book updated successfully');
          window.location.reload();
        }
      })
    } else{
      this.bookService.createBook(book).subscribe({
        next: (data) => {
          console.log('New Book created successfully');
          window.location.reload();
        }
        })
    }
  }

  //for edit button
  populateFormFields(book: Book){
    this.book.bookId = book.bookId;
    this.book.title = book.title;
    this.book.author = book.author;
    this.book.startDate = book.startDate;
    this.book.endDate = book.endDate;
    this.book.rating = book.rating;
  }

  //for delete button
  deleteBook(id: Number){
    const isConfirmed = window.confirm('Are you sure you want to delete this book?');
    if(isConfirmed){
      this.bookService.deleteBook(id).subscribe((data) => {
        this.books = this.books.filter(item => item.bookId !== id);
        window.location.reload();
      })
    }
  }

  //for cancel button
  resetForm() {
    this.book = {
      bookId: 0,
      title: '',
      author: '',
      startDate: null,
      endDate: null,
      rating: 0
    };
  }
  
}
