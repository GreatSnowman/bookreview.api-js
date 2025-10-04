import { Request, Response } from 'express';
import { Book } from '../models/Book';

// In-memory storage for demo purposes
let books: Book[] = [];

export const getAllBooks = (_req: Request, res: Response) => {
  res.status(200).json(books);
};

export const getBookById = (req: Request, res: Response) => {
  const { id } = req.params;
  const book = books.find(b => b.id === id);
  
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  
  res.status(200).json(book);
};

export const createBook = (req: Request, res: Response) => {
  const book: Book = {
    id: Date.now().toString(),
    ...req.body
  };
  
  books.push(book);
  res.status(201).json(book);
};

export const updateBook = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = books.findIndex(b => b.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  
  books[index] = { ...books[index], ...req.body, id };
  res.status(200).json(books[index]);
};

export const deleteBook = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = books.findIndex(b => b.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  
  books = books.filter(b => b.id !== id);
  res.status(204).send();
};
