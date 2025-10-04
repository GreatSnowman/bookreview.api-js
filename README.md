# bookreview.api-js

A TypeScript-based backend API for a book and movie review platform built with Express.js.

## Features

- **Book Management**: CRUD operations for books
- **Movie Management**: CRUD operations for movies
- **Review System**: Support for user reviews and ratings
- **TypeScript**: Full type safety and modern JavaScript features
- **Express.js**: Fast, unopinionated web framework

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Linting**: ESLint with TypeScript support

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GreatSnowman/bookreview.api-js.git
cd bookreview.api-js
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server with hot reload:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

### Building

Build the TypeScript code:
```bash
npm run build
```

### Running in Production

```bash
npm start
```

### Linting

Check code quality:
```bash
npm run lint
```

Auto-fix linting issues:
```bash
npm run lint:fix
```

## API Endpoints

### Books

- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get a specific book
- `POST /api/books` - Create a new book
- `PUT /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book

### Movies

- `GET /api/movies` - Get all movies
- `GET /api/movies/:id` - Get a specific movie
- `POST /api/movies` - Create a new movie
- `PUT /api/movies/:id` - Update a movie
- `DELETE /api/movies/:id` - Delete a movie

### Health Check

- `GET /health` - Check server status

## Project Structure

```
bookreview.api-js/
├── src/
│   ├── controllers/     # Request handlers
│   ├── models/          # Data models and interfaces
│   ├── routes/          # API route definitions
│   ├── middleware/      # Custom middleware
│   └── index.ts         # Application entry point
├── dist/                # Compiled JavaScript (generated)
├── node_modules/        # Dependencies (generated)
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore rules
├── nodemon.json         # Nodemon configuration
├── package.json         # Project metadata and dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md            # This file
```

## Development Roadmap

- [ ] Add database integration (MongoDB/PostgreSQL)
- [ ] Implement user authentication and authorization
- [ ] Add comprehensive test suite
- [ ] Implement pagination for list endpoints
- [ ] Add input validation middleware
- [ ] Implement rate limiting
- [ ] Add API documentation (Swagger/OpenAPI)
- [ ] Deploy to cloud platform

## License

ISC