import { MovieAPI } from './MovieAPI';
import { QuoteAPI } from './QuoteAPI';
import { Docs, Movie, Quote, MovieAPIParams, QuoteAPIParams } from './types';

export * from "./types";

export class LordOfTheRingsSDK {
  private movieAPI: MovieAPI;
  private quoteAPI: QuoteAPI;

  constructor(token: string) {
    this.movieAPI = new MovieAPI(token);
    this.quoteAPI = new QuoteAPI(token);
  }

  async getMovies(params?: MovieAPIParams): Promise<Docs<Movie>> {
    return this.movieAPI.getMovies(params || {});
  }

  async getMovieById(id: string): Promise<Docs<Movie>> {
    return this.movieAPI.getMovieById(id);
  }

  async getMovieQuotes(id: string): Promise<Docs<Quote>> {
    return this.movieAPI.getMovieQuotes(id);
  }

  async getQuotes(params?: QuoteAPIParams): Promise<Docs<Quote>> {
    return this.quoteAPI.getQuotes(params || {});
  }

  async getQuoteById(id: string): Promise<Docs<Quote>> {
    return this.quoteAPI.getQuoteById(id);
  }
}