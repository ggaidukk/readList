# 📚 My Book List App
A full-stack web application for managing books, built with Angular, Node.js, Angular Material, Bootstrap and MongoDB.
Users can add, edit, delete, and view books with details like title, author, reading start & end date, and rating.

## 🌟 Features
1. View a list of books
2. Add new books
3. Edit existing books
4. Delete books
5. Responsive UI with Bootstrap
6. RESTful API with Express & MongoDB

## 🛠 Tech Stack
### Frontend: 
1. Angular (v. 17.0.3.)
2. Bootstrap
3. Angular Material

### Backend: 
1. Node.js (Express.js)
2. Mongoose
3. MongoDB
4. TypeScript

#### Database: MongoDB Compass

## 📦 Build
Zuerst muss man das Backend und danach Frontend bauen.

#### Backend
1. Führen Sie `ng build` aus, um das Projekt zu erstellen. Die Build-Artefakte werden im Verzeichnis `dist/` gespeichert.

#### Frontend
1. Führen Sie zuerst `npm install` aus, um die Abhängigkeiten zu installieren.
2. Führen Sie `ng build` aus, um das Projekt zu erstellen. Die Build-Artefakte werden im Verzeichnis `dist/` gespeichert.


## 🚀 Run

#### Backend
1. Führen Sie die lokale MongoDb-Instanz aus und rufen Sie die db-url ab (z. B. mongodb://localhost:27017/readList).
2. `npm start` führt den Backend-Service aus.

#### Frontend
Führen Sie `ng serve -o` für einen Entwicklungsserver aus. Die Anwendung wird auf http://localhost:4200/ gestartet.

## 🛠 API Endpoints

| Method  | Endpoint              | Description    |
| --------| --------------------- | -------------- |
| GET     | /api/v1/books         | Get all books  |
| POST    | /api/v1/books         | Add a new book |
| PUT     | /api/v1/books/:bookId | Update a book  |
| DELETE  | /api/v1/books/:bookId | Delete a book  |

## 📌 Screenshots
Add Book Form

![Add Book Form](/screenshots/Add%20Book%20Form.png)

Search

![Search](/screenshots/Search%20.png)

Book List

![Book List](/screenshots/book%20list.png)


