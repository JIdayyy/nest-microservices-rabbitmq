import { Args, ID, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { Movie } from './models/movie.model';
import { MovieService } from './movies.service';

@Resolver((of) => Movie)
export class MovieResolver {
  constructor(private usersService: MovieService) {}

  @Query((returns) => Movie)
  movie(@Args({ name: 'id', type: () => ID }) id: number): Movie {
    return this.usersService.findById(id);
  }

  @Query((returns) => [Movie])
  movies(): Movie[] {
    return this.usersService.findAll()
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }): Movie {
    return this.usersService.findById(reference.id);
  }
}
