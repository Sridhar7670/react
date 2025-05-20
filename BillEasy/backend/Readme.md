# Book Review API

A simple and modular Node.js REST API for book reviews, built with Express.js and MongoDB. Authenticated users can review books, and anyone can browse/search books.

---

## 📦 Tech Stack

* **Node.js** + **Express.js**
* **MongoDB** with **Mongoose**
* **JWT** for authentication
* **dotenv** for environment config

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sridhar7670/react.git
cd react/BillEasy/backend

```

### 2. Install Dependencies

```bash
npm init //to intilize the folder 
npm i express mongoose nodemon bcrypt dotenv jsonwebtoken
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add:

```env
MONGO_URI=mongodb://localhost:27017/bookreviews
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. Run the Server

```bash
in package json: choose "start" : "nodemon index.js" 

```
that will be running good on local host port number for now use post man to check for the backend routes 

---
insted of adding some ther data into mongo db use books.json which is avaliable in my repository 

---

## 🧪 Example API Requests

### User Registration

```bash
curl -X POST http://localhost:5000/register \
  -H "Content-Type: application/json" \
  -d '{"_id": "abc@gmail.com", "password": "123456", "name": "User One"}'
```

### User Login

```bash
curl -X POST http://localhost:5000/login \
  -H "Content-Type: application/json" \
  -d '{"_id": "abc@gmail.com", "password": "123456"}'
```


### To get all books
```bash 
curl -X GET  http://localhost:5000/books \
   -H "Content-Type: application/json" \
```
### To get books based on ID
```bash 
curl -X GET  http://localhost:5000/books/<book_id>\
   -H "Content-Type: application/json" \
```


### Submit a Review (Authenticated)

```bash
curl -X POST http://localhost:5000/<book_id>/reviews \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"rating": 4, "comment": "Great book!"}'
```

### Submit a Update (Authenticated)

```bash
curl -X POST http://localhost:3000/reviews/<review_id> \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"rating": 4, "comment": "Great book!"}'
```

### delete review by ID 

```bash
curl -X DELETE 'http://localhost:3000/reviews/<review_id>
```

### get book based on title or author 
```bash 
curl -X GET "http://localhost:3000/search?query=<title or author>"
```
---

## 🔍 Features Summary

* **User Registration/Login** (with hashed passwords & JWT)
* **Add/View Books** (filterable & paginated)
* **Submit, Update & Delete Reviews** (1 per user per book)
* **Get Book Details** with average rating and **paginated reviews**
* **Search Books** by title/author (case-insensitive, partial match)


---

## 📂 Project Structure

```
.
├── controllers
│   ├── bookController.js
│   └── controller.js
├── middleware
│   └── middleware.js
├── models
│   ├── book.js
│   └── user.js
├── routes
│   ├── routes.js
├── .env
├── index.js
└── README.md
└── books.json //for my data set 
```



---

## 🧑‍💻 Author

Sridhar Reddy – [Portfolio](https://sridhars-portfolio.netlify.app/)




