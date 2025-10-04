export interface Book {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  publishedYear?: number;
  genre?: string;
  description?: string;
  averageRating?: number;
  totalReviews?: number;
}

export interface BookReview {
  id: string;
  bookId: string;
  userId: string;
  rating: number;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
}
