import { Docs, Movie, MovieAPIParams, Quote } from './types';
import { API } from './API';
import { BASE_URL } from './Utils';

export class MovieAPI extends API {
  constructor(token: string) {
    super(BASE_URL, token);
  }

  async getMovies(params?: MovieAPIParams): Promise<Docs<Movie>> {
    const response = await this.api.get<Docs<Movie>>('/movie', { params });
    return response.data;
  }

  async getMovieById(id: string): Promise<Docs<Movie>> {
    const response = await this.api.get<Docs<Movie>>(`/movie/${id}`);
    return response.data;
  }

  async getMovieQuotes(id: string): Promise<Docs<Quote>> {
    const response = await this.api.get<Docs<Quote>>(`/movie/${id}/quote`);
    return response.data;
  }
}
