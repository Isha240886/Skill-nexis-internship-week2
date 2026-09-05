🚀 Week 2 — Backend Development

💻 Full Stack Web Development (MERN) Internship

«Week 2 Focus: Building backend applications using Node.js, Express.js, MongoDB, REST APIs, JWT & bcrypt.»

---

🌟 Week 2 Overview

This week focused on understanding the fundamentals of backend development and building practical REST APIs using the MERN stack.

📚 Topics Covered

- 🟢 Node.js basics and NPM setup
- ⚡ Express.js framework and routing
- 🍃 MongoDB & Mongoose database management
- 🔗 REST API design principles
- 🔐 Authentication using JWT & bcrypt
- 📝 CRUD operations

---

🛠️ Tech Stack

Technology| Purpose
🟢 Node.js| JavaScript runtime for backend development
⚡ Express.js| Framework for creating APIs and routes
🍃 MongoDB| NoSQL database
🧩 Mongoose| MongoDB object modeling
🔐 JWT| Authentication & route protection
🔒 bcrypt| Password encryption
📦 NPM| Package management
🧪 Postman / cURL| API testing

---

📂 Project Structure

week2-mern-backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── taskController.js
│   ├── authController.js
│   └── noteController.js
│
├── middleware/
│   └── auth.js
│
├── models/
│   ├── Task.js
│   ├── User.js
│   └── Note.js
│
├── routes/
│   ├── taskRoutes.js
│   ├── authRoutes.js
│   └── noteRoutes.js
│
├── .env.example
├── .gitignore
├── package.json
└── server.js

---

📝 Assignment 1 — To-Do List REST API

A REST API for managing tasks with MongoDB as the database.

🔗 API Endpoints

Method| Endpoint| Description
"GET"| "/api/tasks"| Get all tasks
"GET"| "/api/tasks/:id"| Get a single task
"POST"| "/api/tasks"| Create a new task
"PUT"| "/api/tasks/:id"| Update a task
"DELETE"| "/api/tasks/:id"| Delete a task

➕ Create Task Example

POST /api/tasks

{
  "title": "Learn Express.js",
  "description": "Finish routing module"
}

---

🔐 Assignment 2 — User Authentication API

An authentication API implementing:

- 👤 User registration
- 🔑 User login
- 🔒 Password encryption using bcrypt
- 🎟️ JWT-based authentication
- 🛡️ Protected routes

🔗 Authentication Endpoints

Method| Endpoint| Auth Required| Description
"POST"| "/api/auth/register"| ❌| Register a new user
"POST"| "/api/auth/login"| ❌| Login and receive JWT
"GET"| "/api/auth/profile"| ✅| Get logged-in user information

👤 Register Example

POST /api/auth/register

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "password123"
}

🔑 Login Example

POST /api/auth/login

{
  "email": "jane@example.com",
  "password": "password123"
}

After successful login, the API returns a JWT token.

Use the token for protected routes:

Authorization: Bearer <token>

---

📒 Mini Project — Notes App Backend

A secure Notes App REST API implementing complete CRUD functionality with JWT authentication.

✨ Features

- ➕ Create notes
- 👀 View all personal notes
- 🔍 View a single note
- ✏️ Update notes
- 🗑️ Delete notes
- 🔐 JWT-protected routes

🔗 Notes API Endpoints

Method| Endpoint| Description
"GET"| "/api/notes"| Get all your notes
"GET"| "/api/notes/:id"| Get a single note
"POST"| "/api/notes"| Create a new note
"PUT"| "/api/notes/:id"| Update a note
"DELETE"| "/api/notes/:id"| Delete a note

📝 Create Note Example

POST /api/notes
Authorization: Bearer <token>

{
  "title": "Grocery list",
  "content": "Eggs, milk, bread"
}

---

🎯 Learning Outcomes

By completing Week 2, I gained practical understanding of:

- ✅ Backend development with Node.js
- ✅ Express.js routing and API creation
- ✅ MongoDB database integration
- ✅ Mongoose models
- ✅ CRUD operations
- ✅ REST API development
- ✅ User authentication
- ✅ JWT-based authorization
- ✅ Password encryption with bcrypt
- ✅ API testing using Postman/cURL

---

📈 Internship Progress

Week| Focus| Status
1| 🌐 Web Development Fundamentals| ✅ Completed
2| ⚙️ Backend Development — MERN| ✅ Completed
3| 🚀 Coming Soon| ⏳

---

💡 Key Takeaway

«Week 2 transformed backend concepts into practical API development by combining Node.js, Express.js, MongoDB, authentication, and CRUD operations.»
