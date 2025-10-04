import { Request, Response } from 'express';
import { Movie } from '../models/Movie';

// In-memory storage for demo purposes
let movies: Movie[] = [];

export const getAllMovies = (_req: Request, res: Response) => {
  res.status(200).json(movies);
};

export const getMovieById = (req: Request, res: Response) => {
  const { id } = req.params;
  const movie = movies.find(m => m.id === id);
  
  if (!movie) {
    return res.status(404).json({ message: 'Movie not found' });
  }
  
  res.status(200).json(movie);
};

export const createMovie = (req: Request, res: Response) => {
  const movie: Movie = {
    id: Date.now().toString(),
    ...req.body
  };
  
  movies.push(movie);
  res.status(201).json(movie);
};

export const updateMovie = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = movies.findIndex(m => m.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'Movie not found' });
  }
  
  movies[index] = { ...movies[index], ...req.body, id };
  res.status(200).json(movies[index]);
};

export const deleteMovie = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = movies.findIndex(m => m.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'Movie not found' });
  }
  
  movies = movies.filter(m => m.id !== id);
  res.status(204).send();
};
