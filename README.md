# User API — Node.js + Express + MongoDB

A REST API for managing users, built with Express and MongoDB (via Mongoose), featuring JWT-based authentication and full CRUD operations.

## Features
- REST API for managing users
- Express app connected to MongoDB using Mongoose
- Full CRUD operations (Create, Read, Update, Delete)
- JWT-based authentication (register/login, protected routes, role-based access)
- Postman collection included for testing all routes

## Tech Stack
- Node.js, Express
- MongoDB, Mongoose
- jsonwebtoken (JWT), bcryptjs (password hashing)

## Project Structure
```
user-api/
├── config/
│   └── db.js
├── controllers/
│   └── userController.js
├── middleware/
│   └── auth.js
├── models/
│   └── User.js
├── routes/
│   └── userRoutes.js
├── .env.example
├── .gitignore
├── package.json
├── postman_collection.json
└── server.js
```

## Setup

1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and fill in your values:
   ```bash
   cp .env.example .env
   ```
   ```
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/user-api
   JWT_SECRET=your_long_random_secret
   JWT_EXPIRES_IN=1d
   ```

3. Start MongoDB locally, or use a MongoDB Atlas connection string in `MONGO_URI`.

4. Run the server:
   ```bash
   npm run dev   # with nodemon
   # or
   npm start
   ```

Server runs at `http://localhost:5000`.

## API Endpoints

| Method | Route                | Access        | Description                  |
|--------|-----------------------|---------------|-------------------------------|
| POST   | `/api/users/register` | Public        | Register a new user           |
| POST   | `/api/users/login`    | Public        | Login and receive a JWT       |
| GET    | `/api/users/me`       | Private       | Get logged-in user's profile  |
| GET    | `/api/users`          | Private       | Get all users                 |
| GET    | `/api/users/:id`      | Private       | Get a single user             |
| PUT    | `/api/users/:id`      | Private       | Update a user                 |
| DELETE | `/api/users/:id`      | Private/Admin | Delete a user                 |

Private routes require an `Authorization: Bearer <token>` header, using the token returned from register/login.

## Testing with Postman

Import `postman_collection.json` into Postman. It includes requests for every route with a `{{baseUrl}}`, `{{token}}`, and `{{userId}}` variable — set `token` after logging in and `userId` after registering a user.

## License
MIT
