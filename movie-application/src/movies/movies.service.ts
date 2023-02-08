import { Injectable } from '@nestjs/common';
import { Movie } from './models/movie.model';

@Injectable()
export class MovieService {
  private users: Movie[] = [
    { id: 1, name: 'Star wars' },
    { id: 2, name: 'Ca' },
  ];

  findById(id: number): Movie {
    return this.users.find((user) => user.id === Number(id));
  }

  findAll(): Movie[] {
    return this.users
  }
}
