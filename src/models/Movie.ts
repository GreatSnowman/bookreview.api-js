export interface Movie {
  id: string;
  title: string;
  director: string;
  releaseYear?: number;
  genre?: string;
  duration?: number;
  description?: string;
  averageRating?: number;
  totalReviews?: number;
}

export interface MovieReview {
  id: string;
  movieId: string;
  userId: string;
  rating: number;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
}
