import { Routes } from '@angular/router';
import { HomeComponent } from './book/home/home.component';

export const routes: Routes = [
    {path: 'books/home', component: HomeComponent},
    {path: 'books', redirectTo: 'books/home', pathMatch: 'full'},
    {path: '', redirectTo: 'books/home', pathMatch: 'full'}
];
